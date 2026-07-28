# Module 11 – DevOps and CI/CD

3 deliverables demonstrating the DevOps/CI/CD concepts covered in Module 11.

| File | Covers |
|---|---|
| `DEVOPS-OVERVIEW.md` | What DevOps is, its goals/benefits, key practices, and a clear breakdown of Continuous Integration vs. Continuous Delivery vs. Continuous Deployment |
| `CICD-TOOLS-COMPARISON.md` | Comparison of Jenkins, GitHub Actions, GitLab CI/CD, CircleCI, and Azure DevOps Pipelines — config format, strengths, and how to choose |
| `.github/workflows/ci-cd-pipeline.yml` | A real, working GitHub Actions pipeline: build → lint → test → package build artifact (CI), then a separate deploy job gated to `main` only (CD) |

## How to use
Copy `.github/workflows/ci-cd-pipeline.yml` into any repo with an `npm run build` / `npm test` setup (e.g. one of the Angular projects from Module 8) — it will run automatically on the next push or PR.
