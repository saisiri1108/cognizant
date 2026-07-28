# Branching Strategies & Git Workflows

## Why branch at all
A branch is an independent line of development. Working on `main` directly means every half-finished change is visible to everyone and risks breaking a working build. Branches let multiple people (or one person working on multiple things) develop in isolation, then merge back in when ready.

## Branching strategies

### 1. Feature Branching
- One branch per feature/task, created off `main` (or `develop`), e.g. `feature/login-page`.
- Merged back via a Pull Request once complete and reviewed.
- Simple, works well for small-to-medium teams.

```
main:    A---B---------F  (merge)
                \       /
feature:         C---D-E
```

### 2. Release Branching
- A dedicated `release/x.y` branch is cut from `main`/`develop` when preparing a version for production.
- Only bug fixes go into the release branch after that point — new feature work continues on `main`/`develop` in parallel.
- Once stable, the release branch is merged into `main` and tagged (e.g. `v1.2.0`).

### 3. Git Flow
A more structured model with defined long-lived and short-lived branches:
- `main` — always reflects production-ready code.
- `develop` — integration branch where finished features accumulate.
- `feature/*` — branched from `develop`, merged back into `develop`.
- `release/*` — branched from `develop` when preparing a release, merged into both `main` and `develop`.
- `hotfix/*` — branched from `main` for urgent production fixes, merged into both `main` and `develop`.

Git Flow is thorough but adds process overhead — better suited to larger teams / scheduled release cycles than to fast-moving small projects.

## Git collaboration workflows

| Workflow | How it works | Typical use case |
|---|---|---|
| **Centralized** | Everyone pushes directly to a single shared branch (usually `main`) | Very small teams, simple projects |
| **Feature Branch** | Every change happens on its own branch, merged via Pull Request/code review | Most team projects — the default modern approach |
| **Forking** | Contributors fork the repo into their own copy, push there, and open PRs back to the original | Open-source projects where contributors don't have direct write access |
| **Gitflow** | Structured long-lived branches as described above (`main`/`develop`/`feature`/`release`/`hotfix`) | Larger teams with scheduled, versioned releases |

## Handling merge conflicts (quick reference)
1. Git pauses the merge and marks conflicting sections in the affected file(s) with `<<<<<<<`, `=======`, `>>>>>>>` markers.
2. Manually edit the file to keep the correct combination of changes, removing the markers.
3. `git add <file>` to mark it resolved.
4. `git commit` to complete the merge (or `git merge --continue`).
5. If things go wrong, `git merge --abort` cancels the merge and returns to the pre-merge state.

## Practical recommendation for a CTS/team project
- Use **Feature Branching** off `main` for day-to-day work.
- Name branches descriptively: `feature/...`, `bugfix/...`, `hotfix/...`.
- Open a Pull Request for every merge into `main` — even solo — so there's a reviewable diff and clean history.
- Reserve full **Gitflow** for projects with scheduled release cycles and multiple environments (dev/staging/prod).
