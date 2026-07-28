# Module 9 – Application Debugging

2 deliverables demonstrating the debugging tooling covered in Module 9.

| File | Covers |
|---|---|
| `.vscode/launch.json` | VS Code debugger configurations for an Angular app: launch Chrome with source maps, attach to an already-running Chrome instance, debug Karma unit tests, and a compound config that runs `ng serve` automatically first |
| `DEBUGGING-GUIDE.md` | Full walkthrough of both debugging environments — Chrome DevTools (Elements, Sources, breakpoints, call stack, Watch, Network) and VS Code (breakpoints, watches, logpoints, debugging services & NgRx state via Redux DevTools) |

## How to use
Drop `.vscode/launch.json` into the root of any Angular CLI project, run `ng serve`, then press **F5** in VS Code to start debugging — or follow `DEBUGGING-GUIDE.md` for the Chrome DevTools-only workflow.
