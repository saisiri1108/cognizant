# Module 12 – Containerization using Docker

3 deliverables covering the module's topics.

| File | Covers |
|---|---|
| `DOCKER-COMMANDS-CHEATSHEET.md` | Basic Docker commands: run, ps, stop, rm, images, rmi, pull, exec, cleanup |
| `docker-compose.yml` | A working 3-service stack (API + Postgres + Nginx) demonstrating Compose, a custom network for service-name DNS resolution, a named volume for persistent DB storage, and a bind mount |
| `DOCKER-CONCEPTS.md` | Images & layers, the Docker Engine (CLI/REST API/daemon), storage (volumes vs bind mounts vs storage drivers), networking, and container orchestration (why it's needed, Kubernetes overview, Docker vs. orchestration) |

## Run the Compose stack
```bash
mkdir -p web-content && echo "<h1>Hello from Nginx</h1>" > web-content/index.html
docker compose up -d
docker compose ps
docker compose down
```
