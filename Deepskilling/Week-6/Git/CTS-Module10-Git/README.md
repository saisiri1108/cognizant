# Module 10 – Version Control (Git)

3 deliverables demonstrating the Git concepts covered in Module 10.

| File | Covers |
|---|---|
| `GIT-COMMANDS-CHEATSHEET.md` | Reference for every command group in the module: setup, init/clone, add/commit/status/log, branching, merging & conflicts, remotes (push/pull/fetch), forking & Pull Requests |
| `git-workflow-demo.sh` | A runnable, annotated shell script that walks through a full lifecycle end to end: init → stage → commit → branch → merge (including a deliberate conflict) → remote → push/pull |
| `BRANCHING-STRATEGIES.md` | Explains Feature Branching, Release Branching, and Git Flow, plus a comparison of collaboration workflows (Centralized, Feature Branch, Forking, Gitflow) and a practical recommendation |

## How to use
```bash
chmod +x git-workflow-demo.sh
./git-workflow-demo.sh
```
The script pauses at the merge conflict step so you can practice resolving it manually, exactly as described in `BRANCHING-STRATEGIES.md`.
