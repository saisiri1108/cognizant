# Generative AI Fundamentals

## What is Generative AI?
Generative AI (GenAI) refers to AI models that **create new content** — text, code, images, audio — rather than just classifying or predicting a label for existing input. Instead of answering "is this email spam?", a generative model answers "write me an email."

## Generative vs. Traditional (Discriminative) AI

| | Discriminative AI | Generative AI |
|---|---|---|
| Goal | Learn the boundary between categories (classify/predict) | Learn the underlying data distribution (create new samples) |
| Typical output | A label, a number, a probability | New text, code, images, audio |
| Example task | "Is this transaction fraudulent?" | "Write a fraud-detection function in Python" |
| Example models | Logistic regression, traditional CNN classifiers | GPT-family models, GANs, diffusion models |

In short: discriminative models answer "what is this?", generative models answer "make me one of these."

## Applications of GenAI
- **Text generation** — drafting emails, articles, summaries, chatbot responses.
- **Code completion/generation** — GitHub Copilot, code review suggestions, boilerplate generation.
- **Image creation** — text-to-image tools (e.g. DALL·E, Midjourney, Stable Diffusion).
- **Chatbots/conversational AI** — customer support assistants, coding assistants, general-purpose assistants like ChatGPT/Claude.

## History and Evolution
| Era | Milestone |
|---|---|
| 1960s | Early rule-based chatbots (e.g. ELIZA) — pattern matching, no real "understanding" |
| 2014 | **GANs** (Generative Adversarial Networks) introduced — two networks (generator vs. discriminator) compete, enabling realistic image generation |
| 2020 | **GPT-3** — a large language model demonstrating strong general-purpose text generation from a single pretrained model |
| 2022 | **ChatGPT** launches — brings conversational GenAI to mainstream/consumer use |
| 2021 onward | **GitHub Copilot** and similar tools bring GenAI directly into the developer's IDE as a coding assistant |

## Why this matters for developers
GenAI tools (like GitHub Copilot, covered later in this module) are increasingly part of the standard development workflow — for boilerplate generation, test writing, and documentation — but they require the same engineering judgment as any other tool: understanding what they're good at, where they fail, and how to verify their output rather than trusting it blindly.
