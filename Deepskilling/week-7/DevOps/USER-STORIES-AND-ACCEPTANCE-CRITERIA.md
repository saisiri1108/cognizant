# Writing User Stories & Acceptance Criteria

Examples below are written against a Q&A platform ("Doubt Stack") to keep them concrete instead of generic.

## User Story Format

```
As a [type of user], I want [some goal], so that [some benefit/reason].
```

The three parts matter for different reasons:
- **"As a [user]"** — forces the team to think about who actually benefits, which shapes UX decisions.
- **"I want [goal]"** — the actual functionality being requested.
- **"so that [benefit]"** — the *why*. Without this, teams tend to over-engineer or misunderstand intent — the benefit clause is what lets a developer make a good judgment call when an edge case comes up mid-implementation.

## The INVEST Principle
A good user story should be:

| Letter | Meaning | What it guards against |
|---|---|---|
| **I**ndependent | Can be developed/delivered without depending on other unfinished stories | Blocked work, unclear sprint planning |
| **N**egotiable | Details can be discussed/refined before/during implementation, not a rigid spec | Over-specification that kills flexibility |
| **V**aluable | Delivers real value to a user or the business | Stories that exist only because "the system needs it" internally, with no clear who-benefits |
| **E**stimable | The team has enough detail to size it (even roughly) | Stories too vague to plan a sprint around |
| **S**mall | Fits comfortably within a single sprint | Stories that silently become mini-projects |
| **T**estable | Has clear enough criteria to know when it's done | Endless "is this really finished?" debates |

## Example User Stories

### Story 1
> As a **registered user**, I want to **post a question with tags**, so that **other users can find and answer it based on topic**.

**Acceptance Criteria (Given-When-Then):**
```gherkin
Scenario: Successfully posting a tagged question
  Given I am logged in as a registered user
  And I am on the "Ask a Question" page
  When I enter a title, a question body, and at least one tag
  And I click "Post Question"
  Then the question should appear in the question feed
  And the question should be searchable by any tag I added

Scenario: Attempting to post without a title
  Given I am logged in as a registered user
  And I am on the "Ask a Question" page
  When I leave the title field empty
  And I click "Post Question"
  Then I should see a validation error "Title is required"
  And the question should not be posted
```

### Story 2
> As a **question author**, I want to **mark one answer as "accepted"**, so that **future visitors can immediately see which answer solved my problem**.

**Acceptance Criteria:**
```gherkin
Scenario: Author accepts an answer
  Given I am the author of a question with at least one answer
  When I click "Accept" on one of the answers
  Then that answer should be visually marked as "Accepted"
  And it should move to the top of the answers list

Scenario: Non-author tries to accept an answer
  Given I am viewing a question I did not author
  Then I should not see an "Accept" option on any answer
```

### Story 3
> As a **visitor (not logged in)**, I want to **search existing questions by keyword**, so that **I can find an answer without needing to create an account or post a duplicate question**.

**Acceptance Criteria:**
```gherkin
Scenario: Search returns matching results
  Given I am on the Doubt Stack homepage without logging in
  When I enter a keyword in the search bar
  And I press Enter
  Then I should see a list of questions whose title or body contains that keyword,
    ordered by relevance

Scenario: Search with no matches
  Given I am on the Doubt Stack homepage
  When I search for a keyword with no matching questions
  Then I should see a "No questions found" message
  And a prompt to "Ask this question" pre-filled with my search text
```

## Why Given-When-Then works well
- **Given** — the starting context/state.
- **When** — the action the user takes.
- **Then** — the expected, verifiable outcome.

This format maps directly onto automated acceptance tests (e.g. via SpecFlow/Cucumber-style tools), so acceptance criteria written this way aren't just documentation — they're close to executable test cases, closing the gap between "what the Product Owner asked for" and "what QA verifies."
