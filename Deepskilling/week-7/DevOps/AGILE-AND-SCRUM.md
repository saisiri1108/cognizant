# Agile Principles & the Scrum Framework

## The Agile Manifesto

### 4 Core Values
Agile values the items on the left more than the items on the right (without discarding the right entirely):

1. **Individuals and interactions** over processes and tools
2. **Working software** over comprehensive documentation
3. **Customer collaboration** over contract negotiation
4. **Responding to change** over following a plan

### 12 Principles (summarized)
1. Highest priority is satisfying the customer through early, continuous delivery of valuable software.
2. Welcome changing requirements, even late in development.
3. Deliver working software frequently (weeks rather than months).
4. Business people and developers must work together daily.
5. Build projects around motivated individuals; trust them to get the job done.
6. Face-to-face conversation is the most efficient way to convey information.
7. Working software is the primary measure of progress.
8. Agile promotes sustainable development — a constant, maintainable pace.
9. Continuous attention to technical excellence and good design.
10. Simplicity — maximizing the amount of work *not* done — is essential.
11. The best architectures/requirements/designs emerge from self-organizing teams.
12. Regularly reflect on how to become more effective, then tune behavior accordingly.

## Agile vs. Waterfall

| | Waterfall | Agile |
|---|---|---|
| Approach | Sequential phases (requirements → design → build → test → deploy), each completed before the next starts | Iterative, short cycles (sprints) that each produce a working increment |
| Requirements | Fixed upfront, changes are costly | Expected to evolve; welcomed even late |
| Customer feedback | Mostly at the end | Continuous, every sprint |
| Delivery | One large release at project end | Frequent, incremental releases |
| Risk | Discovered late (e.g. at final testing) | Surfaced early, each sprint |
| Best fit | Well-understood, stable requirements (e.g. regulated/fixed-scope projects) | Evolving requirements, need for fast feedback |

## Scrum Roles
- **Product Owner** — owns the Product Backlog, defines priorities, represents the customer/business, decides *what* gets built.
- **Scrum Master** — facilitates the process, removes blockers, coaches the team on Scrum practices, shields the team from disruption. Not a manager — a servant-leader.
- **Development Team** — the cross-functional group that actually builds the increment (developers, testers, designers as needed). Self-organizing — decides *how* the work gets done.

## Scrum Ceremonies (Events)
- **Sprint Planning** — at the start of a sprint, the team selects backlog items to commit to and plans how to deliver them.
- **Daily Scrum (Standup)** — a short (~15 min) daily sync: what I did yesterday, what I'll do today, any blockers.
- **Sprint Review** — at sprint end, the team demos the completed increment to stakeholders and gathers feedback.
- **Sprint Retrospective** — the team reflects on how the sprint went (process, collaboration, tooling) and identifies concrete improvements for next sprint.

## Scrum Artifacts
- **Product Backlog** — the full, prioritized list of everything that might be needed in the product (features, fixes, technical work), owned and ordered by the Product Owner.
- **Sprint Backlog** — the subset of Product Backlog items selected for the current sprint, plus the plan for delivering them.
- **Increment** — the sum of all completed Product Backlog items at the end of a sprint, meeting the team's Definition of Done, and potentially shippable.

## Definition of Done
A shared, explicit checklist the team agrees on that defines when a piece of work is truly complete — not just "code written," but typically: code reviewed, unit tests passing, documentation updated, deployed to a test environment, and accepted against its acceptance criteria. Having this agreed upfront avoids disputes about whether something is "done" at sprint review time.
