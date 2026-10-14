# CLAUDE.md

@AGENTS.md

The import above loads the shared guide for all coding agents. The notes below are specific to Claude Code.

## Commands

- `npm run dev`: local dev server at http://localhost:3000
- `npm run build`: static export into `docs/`. This script deletes and regenerates `docs/`, so never hand-edit it.
- `npm run preview`: serve `docs/` locally
- Type check: `npx tsc --noEmit`. This repo has no lint script.

## Specs

Non-trivial changes start from a spec in [`project-docs/specs/`](project-docs/specs/README.md), a Jira-style story with a key like `AM-001`. Copy the template, fill it in, and get it to Ready before implementing.

## Claude setup

- `.claude/rules/`: rules loaded automatically. Path-scoped rules load only when matching files are touched.
- `.claude/settings.json`: shared permissions, committed. Personal overrides go in `.claude/settings.local.json`, which is gitignored.
- Cowork, cloud sessions, and Remote Control: [`project-docs/ai-workflow/`](project-docs/ai-workflow/README.md)
