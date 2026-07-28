# Prompt Engineering — Techniques, Best Practices & Ethics

## What is Prompt Engineering, and why it matters for developers
Prompt engineering is the practice of crafting inputs to a generative AI model to reliably get the output you actually want. The same model can produce a vague, generic answer or a precise, directly usable one depending purely on how the request is phrased — for developers, this directly affects how much editing an AI-generated code suggestion needs before it's trustworthy.

## Prompting Techniques

### Zero-shot prompting
Ask the model to perform a task directly, with no examples given — relying entirely on what the model already learned during training.

```
Write a C# method that validates whether an email address is in a valid format.
```

### Few-shot prompting
Give the model a small number of examples demonstrating the pattern you want, then ask it to continue the pattern. Useful when the desired output format/style is specific and hard to describe in words alone.

```
Convert these method names to REST endpoint routes:

GetAllUsers -> GET /api/users
GetUserById -> GET /api/users/{id}
CreateUser  -> POST /api/users

Now convert: DeleteUserById
```

### Chain-of-thought prompting
Ask the model to reason step by step before giving a final answer, instead of jumping straight to a conclusion. This tends to improve accuracy on problems that need multi-step logic (math, debugging, algorithm design).

```
A user reports that GET /api/orders/5 returns 404 even though order 5 exists in the database.
Think through the possible causes step by step, then suggest the most likely fix.
```

## Best Practices for Coding-Task Prompts
1. **Give clear, specific instructions** — "write a method that validates email format using regex" beats "check emails."
2. **Provide context** — mention the language/framework/existing conventions (e.g. "in an ASP.NET Core 8 minimal API controller").
3. **Specify the output format** — "return only the code, no explanation" vs. "explain your reasoning first" produces very different responses.
4. **Iterate** — treat the first response as a draft. Follow up with "make this async" or "add null checks" rather than expecting a perfect result in one shot.

### Example: a well-formed coding-task prompt
```
Write a C# method `IsValidEmail(string email)` that:
- Returns true only for syntactically valid email addresses
- Uses System.Text.RegularExpressions
- Includes XML doc comments
- Does not throw an exception for null or empty input (returns false instead)
```
This is specific about the signature, the technique to use, edge cases to handle, and documentation expectations — all things that would otherwise require a follow-up round-trip.

## Ethical Considerations
- **Avoiding bias in prompts** — a prompt like "write a story about a successful CEO" can implicitly encode assumptions (gender, background) baked into training data; being explicit ("a CEO of any background") reduces this.
- **Accuracy / hallucination risk** — generative models can produce plausible-sounding but incorrect information (fabricated API methods, incorrect library behavior, made-up citations). Always verify generated facts/APIs against real documentation, especially for anything unfamiliar.
- **Privacy** — avoid pasting sensitive/proprietary data (customer PII, secrets, internal-only code) into prompts sent to a third-party service, unless that service's data handling policy has been explicitly reviewed and approved.
- **Responsible AI usage** — treat AI output as a first draft or a suggestion from a knowledgeable but fallible collaborator, not as an authoritative source — the same standard applied to any other tool's output before it ships to production.
