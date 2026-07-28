# Git Commands Cheat Sheet

Organized to match Module 10's sub-topics: setup, basic commands, branching/merging, remotes, and collaboration.

## Setup

```bash
# Install Git, then configure identity (used on every commit you make)
git config --global user.name "Kakumanu Venkata Sadwik"
git config --global user.email "sadwik@example.com"

# View current config
git config --list
```

## Creating / cloning a repository

```bash
git init                        # turn the current folder into a new Git repository
git clone <repo-url>            # copy an existing remote repository to your machine
git clone <repo-url> my-folder  # clone into a specific folder name
```

## Working directory → Staging area → Repository

Git tracks three states for every file: **Working Directory** (your edits) → **Staging Area** (what will go in the next commit) → **Repository** (committed history).

```bash
git status                # see what's changed, staged, or untracked
git add file.txt          # stage a specific file
git add .                 # stage everything in the current folder
git add *.ts              # stage using a wildcard (only .ts files)
git commit -m "message"   # commit staged changes with a message
git commit -am "message"  # stage + commit all tracked (already-known) files in one step
git log                   # view commit history
git log --oneline --graph --all   # compact, visual history across all branches
```

## Branching

```bash
git branch                      # list local branches
git branch feature/login-page   # create a new branch
git checkout feature/login-page # switch to that branch
git checkout -b feature/signup  # create AND switch in one step
git switch feature/login-page   # modern equivalent of checkout for switching branches
```

## Merging & conflicts

```bash
git checkout main
git merge feature/login-page    # merge feature branch into main

# If a conflict occurs, Git marks the conflicting lines in the file:
# <<<<<<< HEAD
# your version
# =======
# incoming version
# >>>>>>> feature/login-page
# Edit the file to resolve, then:
git add resolved-file.txt
git commit                      # completes the merge
```

## Remote repositories

```bash
git remote add origin <repo-url>   # link a local repo to a remote (e.g. GitHub)
git remote -v                      # list configured remotes
git remote add upstream <repo-url> # a second remote, e.g. the original repo you forked from

git push -u origin main            # push local commits, set upstream tracking
git push                           # subsequent pushes (tracking already set)
git pull                           # fetch + merge remote changes into current branch
git fetch                          # download remote changes WITHOUT merging them yet

git push origin feature/signup     # push a new local branch to the remote
git checkout --track origin/feature/signup   # create a local branch tracking a remote one
```

## Forking & Pull Requests (GitHub workflow)

```bash
# 1. Fork the repo on GitHub (via the web UI) - creates your own copy under your account
# 2. Clone YOUR fork locally
git clone https://github.com/<your-username>/<repo>.git

# 3. Keep your fork in sync with the original ("upstream")
git remote add upstream https://github.com/<original-owner>/<repo>.git
git fetch upstream
git merge upstream/main

# 4. Make changes on a feature branch, then push to YOUR fork
git checkout -b fix/typo
git push origin fix/typo

# 5. Open a Pull Request from your fork's branch into the original repo's main branch (via GitHub UI)
```
