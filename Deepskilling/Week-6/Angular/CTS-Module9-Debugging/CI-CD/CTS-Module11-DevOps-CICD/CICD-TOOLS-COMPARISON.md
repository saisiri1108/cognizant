# CI/CD Tools & Platforms — Comparison

| Tool | Hosting | Config format | Notable strengths | Typical fit |
|---|---|---|---|---|
| **Jenkins** | Self-hosted (you run the server) | `Jenkinsfile` (Groovy-based pipeline DSL) | Extremely mature, huge plugin ecosystem, full control over infrastructure | Teams that need on-prem/self-hosted CI or highly custom pipelines |
| **GitHub Actions** | Hosted by GitHub (or self-hosted runners) | YAML workflows in `.github/workflows/` | Tightly integrated with GitHub repos/PRs, large marketplace of reusable actions, generous free tier | Projects already hosted on GitHub — fastest to set up |
| **GitLab CI/CD** | Hosted by GitLab (or self-hosted GitLab) | `.gitlab-ci.yml` | Built into GitLab itself (no separate service to wire up), strong built-in container registry & environments | Teams using GitLab as their primary Git host |
| **CircleCI** | Hosted (cloud) or self-hosted | `.circleci/config.yml` | Fast build times via caching/parallelism, good Docker-first support | Teams wanting a dedicated, cloud-first CI service independent of the git host |
| **Azure DevOps Pipelines** | Hosted by Microsoft (or self-hosted agents) | YAML pipelines or classic UI editor | Deep integration with Azure cloud deployments, works with any git host | Teams already on the Microsoft/Azure stack |

## Common shape across all of them
Regardless of the tool, a CI/CD pipeline is almost always structured the same way:

```
Trigger (push / PR / schedule)
   -> Checkout code
   -> Restore dependencies
   -> Build
   -> Run tests
   -> Package (e.g. Docker image)
   -> Push artifact (e.g. to a registry)
   -> Deploy (to staging / production)
```

## How to choose
- Already on **GitHub** → GitHub Actions is the path of least friction.
- Already on **GitLab** → GitLab CI/CD, for the same reason.
- Need **full control / on-prem / air-gapped environments** → Jenkins.
- Heavy **Azure** usage (App Service, AKS, etc.) → Azure DevOps Pipelines.
- Want a **dedicated CI service** decoupled from whichever git host is in use → CircleCI.

See `.github/workflows/ci-cd-pipeline.yml` in this folder for a working example of the "common shape" above, implemented with GitHub Actions.
