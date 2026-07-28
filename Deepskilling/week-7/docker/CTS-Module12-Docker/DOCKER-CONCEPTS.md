# Docker Concepts – Images, Storage, Networking & Orchestration

## Docker Images

A **Docker image** is a read-only template containing everything needed to run an application: code, runtime, libraries, and system tools. Containers are running *instances* of an image.

### Image layers
Every instruction in a Dockerfile (`FROM`, `RUN`, `COPY`, etc.) creates a new **layer**. Layers are cached and shared — if two images both start `FROM node:20`, that layer is only stored once on disk. When a container runs, Docker adds one final writable **container layer** on top of the image's read-only layers; changes made while the container runs go there and disappear when the container is removed (unless a volume is used).

- **Base image** — the starting point (e.g. `ubuntu`, `alpine`) with no application-specific content.
- **Parent image** — the image your own image is built `FROM` (often the base image itself, or another image built on top of it, like `node:20-alpine`).
- **Docker manifest** — metadata listing an image's layers and the platforms it supports (useful for multi-architecture images like amd64 vs arm64).
- **Container registries/repositories** — a **registry** (e.g. Docker Hub, GitHub Container Registry, Azure Container Registry) hosts many **repositories**; each repository holds the tagged versions of one image (`myapp:1.0`, `myapp:latest`, etc.).

### Building an image
Two ways to create an image:
1. **Interactive method** — run a base container, install/configure things manually inside it, then `docker commit` the result into a new image. Quick for experiments, but not reproducible or version-controllable.
2. **Dockerfile method** (standard approach) — write the build steps as code in a `Dockerfile`, then run `docker build`. Reproducible, reviewable, and diff-able in Git.

```dockerfile
# Example multi-stage Dockerfile (SDK to build, smaller runtime image to ship)
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY WebApi.csproj .
RUN dotnet restore
COPY . .
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 8080
ENTRYPOINT ["dotnet", "WebApi.dll"]
```

### Build context
The **build context** is the set of files sent to the Docker daemon when you run `docker build .` — everything in the specified directory (the `.` at the end). Only files inside the context can be `COPY`'d into the image, which is why a `.dockerignore` file (excluding `node_modules/`, `bin/`, `obj/`, `.git/`) matters — a smaller context means a faster build.

## Docker Engine

**Docker Engine** is the underlying client-server application that makes Docker work. It has three parts:
- **Docker CLI** — the `docker` command you type; sends commands to the daemon.
- **REST API** — the interface the CLI (and other tools) actually talk to; can be used directly for automation/integrations.
- **Docker Daemon (`dockerd`)** — the background process that does the real work: building images, running containers, managing networks/volumes.

## Docker Storage

By default, anything written inside a container's writable layer is **ephemeral** — it's lost when the container is removed. For data that needs to persist (databases, uploads, etc.), Docker offers:

- **Data volumes** — storage managed by Docker itself, stored outside any container's writable layer, and independent of container lifecycle. The recommended approach for persistent data (see `db-data` in `docker-compose.yml`).
- **Bind mounts** — map a specific host folder directly into the container (see the `web-content` mount in `docker-compose.yml`). Useful for local development when you want host file changes to reflect instantly inside the container.
- **Storage drivers** — control how image layers and the container's writable layer are actually stored on disk (e.g. `overlay2` is the modern Linux default). Rarely changed manually, but relevant when tuning performance on a specific host OS/filesystem.

```bash
docker volume create my-data          # create a named volume
docker volume ls                      # list all volumes
docker volume inspect my-data         # see where it lives on the host, and what's using it
docker run -v my-data:/app/data myapp # mount it into a container
```

## Docker Networking

By default, Docker creates a **bridge network** and attaches every container to it unless told otherwise — but containers on the *default* bridge network can only reach each other by IP address, not by name.

```bash
docker network ls                       # list all networks (bridge, host, none, plus any custom ones)
docker network inspect bridge           # see connected containers, subnet, gateway
docker network create demo-network      # create a custom bridge network
docker run --network demo-network ...   # attach a container to it
```

Creating a **custom** bridge network (like `demo-network` in `docker-compose.yml`) gives you built-in DNS: containers on that network can reach each other using their **service/container name** as a hostname (e.g. the `api` service connecting to `db:5432` instead of a hardcoded IP that changes on every restart).

## Container Orchestration

As soon as an application needs more than one container — or needs those containers to survive host failures, scale up under load, and be updated without downtime — running `docker run` manually stops being practical. **Container orchestration** is the automated management of many containers across many machines: scheduling, scaling, networking, health checking, and self-healing (restarting failed containers automatically).

### Why it's needed
- Manually running `docker run` on one machine doesn't scale to production traffic or high availability.
- Deployments need to be repeatable, rolled out gradually, and rolled back quickly if something breaks.
- Containers need to find each other reliably even as they're created/destroyed/rescheduled.

### Benefits
- **Auto-scaling** — add/remove container instances based on load.
- **Self-healing** — automatically restart or reschedule failed containers.
- **Load balancing** — traffic distributed across healthy instances.
- **Declarative deployments** — describe the *desired state* (e.g. "3 replicas of this image"); the orchestrator continuously works to match reality to that description.

### Kubernetes
**Kubernetes (K8s)** is the most widely adopted container orchestration platform. It groups containers into **Pods**, manages them via **Deployments** (which handle rolling updates and replica counts), and exposes them via **Services** (stable networking/DNS even as individual Pods come and go).

### Docker (Compose) vs. Orchestration (Kubernetes)
| | Docker / Docker Compose | Kubernetes |
|---|---|---|
| Scope | Single host | Cluster of many hosts (nodes) |
| Scaling | Manual (`docker compose up --scale api=3`) | Automated, policy-driven (HorizontalPodAutoscaler) |
| Self-healing | Limited (`restart: always` policy) | Built-in — continuously reconciles desired vs actual state |
| Best for | Local development, small single-server deployments | Production workloads needing high availability and scale |

`docker-compose.yml` in this repo is the right tool for local development and small deployments; Kubernetes manifests (Deployment + Service, with rolling updates and health probes) are the equivalent orchestrated setup for production.
