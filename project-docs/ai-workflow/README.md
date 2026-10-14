# AI Workflow

How Claude is set up for this repo, where each piece lives, and how to keep it healthy.

## What is configured

| Path | Purpose | Committed |
| --- | --- | --- |
| `AGENTS.md` | Shared guide for all coding agents: scope, rules, deployment notes | Yes |
| `CLAUDE.md` | Claude Code entry point. It imports `AGENTS.md` and adds Claude-specific notes | Yes |
| `.claude/rules/` | Rules loaded automatically. Path-scoped rules load only when matching files are touched | Yes |
| `.claude/settings.json` | Shared permissions for everyone working in this repo | Yes |
| `.claude/settings.local.json` | Your personal permission overrides | No (gitignored) |
| `project-docs/specs/` | Spec-driven stories, the contract for non-trivial work | Yes |
| `project-docs/ai-workflow/` | This folder | Yes |

Claude Code reads `CLAUDE.md`, which imports `AGENTS.md`. Other tools read `AGENTS.md`
directly. Keep shared rules in `AGENTS.md`, so the two stay in sync.

## The working loop

1. Write or pick a spec in [`project-docs/specs/`](../specs/README.md).
2. Ask Claude Code to implement it. Use plan mode first if the spec has open questions.
3. Claude works against the acceptance criteria and runs the validation checklist, including the build.
4. Review the diff, then merge to `main`. The merge is what deploys the site.

For where this work runs (your laptop, a cloud session, or Cowork), see
[`claude-cowork-and-cloud.md`](./claude-cowork-and-cloud.md).

## Keeping the Claude setup healthy

- **Keep `CLAUDE.md` and `AGENTS.md` short.** They should hold facts Claude needs in every session. Area-specific guidance belongs in a `.claude/rules/` file with a `paths:` scope.
- **Fix the rule, not the prompt.** If Claude keeps making the same mistake, the rule is missing or unclear. Edit the file so the next session gets it right.
- **Audit periodically.** Run `/doctor prompt-audit` in Claude Code to check instruction files for conflicts and outdated content.
- **Don't commit personal settings.** Use `.claude/settings.local.json` for personal overrides. It is gitignored.
