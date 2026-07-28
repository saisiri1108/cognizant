# Agile Estimation & Sprint Planning

## Story Points
Story points estimate the **relative effort/complexity** of a user story — not hours or days. A story worth 8 points isn't "8 hours of work"; it's roughly "twice as complex/risky/effort-intensive" as a 4-point story. Using relative sizing instead of absolute time avoids the trap of individual estimates varying wildly by who's doing the work, and tends to stay more consistent over a project's life.

Common scale: Fibonacci-like sequence — **1, 2, 3, 5, 8, 13, 21** — the growing gaps between numbers reflect growing uncertainty at larger sizes (it's easy to tell a 2 from a 3, much harder to tell a 20 from a 21, so the scale doesn't even offer that false precision).

## Planning Poker
A consensus-based estimation technique to avoid anchoring (the first number said in a room tends to bias everyone else):

1. The Product Owner reads a user story aloud.
2. Each team member privately selects a card (from the Fibonacci-like deck) representing their estimate.
3. Everyone reveals their card **simultaneously**.
4. If estimates differ significantly, the highest and lowest estimators explain their reasoning.
5. Discuss, then re-vote until the team converges on a shared estimate.

This surfaces hidden assumptions early — e.g. someone estimating "13" might know about a tricky edge case others missed.

## Sprint Planning Process
1. **Capacity check** — how many story points did the team complete on average in recent sprints (velocity)? That's roughly how much to commit to this sprint.
2. **Backlog review** — the Product Owner presents the highest-priority items from the Product Backlog.
3. **Estimation** — any unestimated items get sized (often via Planning Poker) before being pulled in.
4. **Commitment** — the team pulls items into the Sprint Backlog until they reach (but don't exceed) their capacity.
5. **Task breakdown** — larger stories are broken into smaller technical tasks the team can execute day-to-day.

## Velocity
**Velocity** = total story points the team completed in a sprint. Tracked sprint over sprint, it becomes a reliable planning input: "we've averaged 32 points over the last 3 sprints, so we can realistically commit to ~30-35 this sprint." Velocity is team-specific and not comparable across teams — it's a planning tool, not a performance metric.

Example velocity trend:

| Sprint | Committed | Completed |
|---|---|---|
| Sprint 1 | 30 | 24 |
| Sprint 2 | 28 | 27 |
| Sprint 3 | 30 | 31 |
| Sprint 4 | 32 | 30 |

## Burndown Chart
A **burndown chart** plots remaining work (story points or hours) against time within a sprint. The x-axis is days in the sprint; the y-axis is points remaining. An "ideal" diagonal line shows the expected steady pace; the actual line shows real progress.

```
Points
remaining
  30 |\
     | \  <- ideal line (straight, steady burn)
  20 |  \
     |   \___
  10 |       \___
     |    actual  \___
   0 |________________\____ Days
     0   2   4   6   8  10
```

- **Actual line above the ideal line** → the team is behind pace; either the estimate was optimistic or something is blocking progress.
- **Actual line below the ideal line** → ahead of pace, or the sprint was under-committed.
- **Flat stretches** → often indicate a blocker, work not being updated/tracked, or a large story that's "all or nothing" (no partial credit until it's fully done).

Burndown charts make progress visible daily instead of only discovering "we're behind" at the sprint review.
