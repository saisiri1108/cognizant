# Angular Application Debugging Guide

Covers Module 9's two debugging environments: Chrome DevTools and VS Code, applied to an Angular app run via `ng serve`.

## 1. Debugging with Chrome DevTools

### Setup
```bash
ng serve
```
Open the app at `http://localhost:4200`, then press **F12** (or right-click → Inspect) to open DevTools.

### Elements panel — inspecting the DOM
- The **Elements** tab shows the live, rendered DOM tree — not the raw template, but what Angular actually produced after binding, `*ngIf`/`*ngFor`, and directives ran.
- Click any node to see its computed styles, attributes, and Angular-added classes (e.g. `ng-star-inserted` from `*ngIf`).
- Use the element picker (top-left arrow icon) to click a UI element directly and jump to its DOM node.

### Sources panel — breakpoints, call stack, source maps
- Because Angular CLI emits **source maps** by default in dev builds, the Sources panel lets you browse and set breakpoints directly in your original `.ts` files (not the compiled/bundled JS).
- Navigate: `Sources → webpack:// → src → app → your-component.ts`.
- Click a line number to set a breakpoint. Reload or trigger the code path — execution pauses there.
- While paused:
  - **Call Stack** panel shows the chain of function calls that led here.
  - **Scope** panel shows local/closure/global variables in context at that line.
  - **Watch** panel lets you add expressions (e.g. `this.user.name`) to track across steps.
  - Step controls: Step over (F10), Step into (F11), Step out (Shift+F11), Resume (F8).
- **Conditional breakpoints**: right-click a line number → "Add conditional breakpoint" → e.g. `user.id === 3`, so it only pauses when that's true — useful inside `*ngFor` loops.
- `debugger;` statement: typing this directly in your TypeScript also pauses execution there when DevTools is open, without needing to click a line number.

### Console panel
- Inspect thrown errors with full stack traces (again mapped back to `.ts` files via source maps).
- Angular change-detection errors (`ExpressionChangedAfterItHasBeenCheckedError`, etc.) show up here with the offending component.
- You can also invoke `ng.getComponent($0)` (Angular DevTools' console utility) on a selected DOM element to inspect its component instance directly.

### Network panel
- Watch outgoing `HttpClient` calls, inspect request/response headers and payloads — useful for confirming interceptors (auth headers, etc.) are actually being applied.

## 2. Debugging in Visual Studio Code

### Setup
1. Install the **Angular Language Service** extension (official Angular team extension) — gives template type-checking, go-to-definition inside `.html` templates, and autocomplete.
2. Install the **Debugger for Chrome** capability (built into modern VS Code via the `js-debug` extension, no separate install usually needed).
3. Use the `launch.json` in this repo (`.vscode/launch.json`) — it defines three configurations:
   - **Launch Chrome against localhost** — opens a new Chrome window pointed at `http://localhost:4200` with source maps wired up.
   - **Attach to Chrome** — attaches to an already-running Chrome instance (started with `--remote-debugging-port=9222`).
   - **Debug Karma Unit Tests** — attaches to `ng test`'s Karma server so breakpoints inside `*.spec.ts` files are hit.
   - A **compound** config (`ng serve + Debug Chrome`) runs `ng serve` as a pre-launch task automatically before attaching.

### Setting breakpoints and watches in TypeScript
1. Open any `.ts` file (component, service, guard, etc.) directly in VS Code.
2. Click in the gutter to the left of a line number — a red dot appears (breakpoint set).
3. Press **F5** (or Run → Start Debugging) using the launch config above.
4. Trigger the code path in the app — VS Code pauses execution right in the editor, at the exact TypeScript line.
5. While paused, the **Run and Debug** sidebar shows:
   - **Variables** — locals and closures in scope
   - **Watch** — add any expression to track continuously (e.g. `this.cartItems$$.value`)
   - **Call Stack** — same idea as Chrome's, but with jump-to-source on every frame
6. **Conditional/hit-count breakpoints**: right-click a breakpoint dot → "Edit Breakpoint" → set a condition or "break after N hits".
7. **Logpoints**: right-click → "Add Logpoint" — logs an expression to the Debug Console without pausing execution, a non-invasive alternative to `console.log()` that doesn't require redeploying code.

### Debugging state management (services & NgRx)
- **Service state**: set a breakpoint inside the service method that mutates state (e.g. a `BehaviorSubject.next(...)` call) to see exactly what value is being pushed and from where.
- **NgRx store**: set breakpoints inside reducers (`counterReducer`) to inspect the action and previous state on every dispatch — reducers are plain functions, so this works exactly like breakpointing any other TypeScript function.
- Install the **Redux DevTools** browser extension — NgRx integrates with it automatically (via `provideStoreDevtools()` in dev builds) and shows a full timeline of dispatched actions, state diffs, and lets you "time travel" between past states without touching source code at all.

## Quick technique summary
| Technique | Where | Best for |
|---|---|---|
| Breakpoints + step controls | Chrome Sources / VS Code editor | Following exact execution flow, inspecting variables at a point in time |
| Conditional breakpoints | Both | Loops/lists where you only care about one specific item |
| Watch expressions | Both | Tracking a specific value as you step through multiple lines |
| `debugger;` statement | Chrome (DevTools must be open) | Quick one-off pause without clicking a line number |
| Logpoints | VS Code | Logging without modifying source or redeploying |
| Redux DevTools | Chrome extension | NgRx state history, time-travel debugging |
| Network panel | Chrome DevTools | Verifying HTTP calls, headers, interceptor behavior |
