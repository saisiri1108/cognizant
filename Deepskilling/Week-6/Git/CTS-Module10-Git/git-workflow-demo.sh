#!/bin/bash
# git-workflow-demo.sh
# A runnable, annotated walkthrough of the full Git lifecycle:
# init -> stage -> commit -> branch -> merge -> conflict -> remote -> push/pull.
# Run section by section (or the whole script) inside an empty demo folder.

set -e

echo "== 1. Initialize a new repository =="
mkdir -p git-demo-project && cd git-demo-project
git init

echo "== 2. Configure identity for this repo (or use --global once, machine-wide) =="
git config user.name "Kakumanu Venkata Sadwik"
git config user.email "sadwik@example.com"

echo "== 3. Create a file, stage it, and commit =="
echo "# Git Demo Project" > README.md
git add README.md
git status
git commit -m "Initial commit: add README"

echo "== 4. Create a feature branch and make a change =="
git checkout -b feature/add-notes
echo "This project demonstrates a full Git workflow." >> README.md
git add README.md
git commit -m "Add project description to README"

echo "== 5. Switch back to main and make a DIFFERENT change (to set up a merge conflict) =="
git checkout main
echo "Maintained by Sadwik." >> README.md
git commit -am "Add maintainer note to README"

echo "== 6. Merge the feature branch into main =="
# This will likely produce a conflict since both branches touched the same lines.
set +e
git merge feature/add-notes
if [ $? -ne 0 ]; then
  echo "Conflict detected - resolve manually in README.md, then run:"
  echo "  git add README.md && git commit"
fi
set -e

echo "== 7. View commit history =="
git log --oneline --graph --all

echo "== 8. Link to a remote (replace with your actual GitHub repo URL) and push =="
echo "git remote add origin https://github.com/<your-username>/git-demo-project.git"
echo "git push -u origin main"

echo "== 9. Pull the latest changes from the remote (e.g. after a teammate pushes) =="
echo "git pull origin main"

echo "Workflow demo complete."
