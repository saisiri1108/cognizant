# DevOps & CI/CD Fundamentals

## What is DevOps?
DevOps is a set of practices and a culture that brings **Development** and **Operations** together, instead of treating them as separate teams that hand code off to each other. The goal is to build, test, release, and monitor software faster and more reliably by removing the traditional silo between "people who write code" and "people who run it in production."

## Goals and benefits of DevOps
- **Faster delivery** — smaller, more frequent releases instead of large infrequent ones.
- **Higher quality** — automated testing catches issues earlier, before they reach production.
- **Better collaboration** — shared ownership of the whole lifecycle (build → deploy → monitor → fix) instead of "throw it over the wall."
- **Faster recovery** — automated pipelines and monitoring make it much quicker to detect and roll back a bad release.
- **Reduced manual work** — automation replaces repetitive, error-prone manual deployment steps.

## Key DevOps practices
- **Continuous Integration (CI)** — merging code changes frequently, with each merge automatically built and tested.
- **Continuous Delivery/Deployment (CD)** — automatically preparing (Delivery) or directly shipping (Deployment) every passing build to an environment.
- **Infrastructure as Code (IaC)** — defining servers/environments in version-controlled config (e.g. Terraform, ARM templates) instead of manual setup.
- **Monitoring & Logging** — continuous visibility into how the application behaves in production.
- **Containerization** — packaging an app with its dependencies (e.g. via Docker) so it runs identically everywhere.

## Understanding CI/CD

### Continuous Integration (CI)
Every time a developer pushes code, an automated pipeline:
1. Builds the application
2. Runs automated tests (unit, sometimes integration)
3. Reports back pass/fail — broken builds are caught within minutes, not days later

This keeps the `main` branch always in a known-good, buildable state.

### Continuous Delivery vs. Continuous Deployment
Both extend CI further down the pipeline, but differ in the last step:

| | Continuous Delivery | Continuous Deployment |
|---|---|---|
| After tests pass | Build is automatically packaged and made ready to release | Build is automatically released to production |
| Production release | Requires a manual approval/trigger | Fully automatic, no human step |
| Use case | Teams that want a human sign-off before customers see changes | Teams confident enough in their test coverage to ship every passing change immediately |

### Benefits of CI/CD
- Bugs are caught close to when they're introduced (cheaper to fix).
- Releases become routine, low-risk events instead of rare, high-stress ones.
- Developers get fast feedback instead of waiting for a manual QA cycle.
- Rollbacks are easier because each release is small and traceable to a specific commit.

## Where this fits with the rest of the FSE track
- **Git** (Module 10) is the trigger — pushes/PRs to a repo are what kick off a CI/CD pipeline.
- **Docker** (containerization) packages the app consistently so the same artifact that passed CI is exactly what gets deployed.
- **Kubernetes** (seen in Module 7) is a common deployment target for containerized CD pipelines, supporting rolling updates and health-check-based traffic routing.
