# Specs

Spec-driven development: a non-trivial change starts as a written spec, a Jira-style story
stored in this folder. The spec is the contract. Claude Code and reviewers both check the
work against its acceptance criteria.

## When a spec is required

**Required:** new or changed sections, routes, or components; content model changes; new
dependencies; deployment or configuration changes; any change touching more than one area;
any work with unclear requirements.

**Not required:** typo fixes, single-value edits in `data/content.ts`, patch version bumps,
and one-line fixes.

## Naming

- Key: `AM-NNN`, numbered in order and never reused. Example: `AM-001`.
- File: `<KEY>-<short-slug>.md`. Example: `AM-001-blog-tag-filter.md`.
- Start from [`_template.md`](./_template.md).

## Workflow

| Step | Who | What happens | Status |
| --- | --- | --- | --- |
| 1. Draft | Owner | Copy the template. Write the user story and acceptance criteria. | `Draft` |
| 2. Ready | Reviewer | Confirm the criteria are testable and open questions are answered. | `Ready` |
| 3. Implement | Claude Code | Ask Claude to implement the key, for example "Implement AM-001 per project-docs/specs/AM-001-….md". Claude plans first if anything is ambiguous, works against the criteria, and logs progress. | `In Progress` |
| 4. Validate | Claude Code + owner | Run the validation checklist, then check the built `docs/` output. | `In Review` |
| 5. Done | Reviewer | Every Definition of Done box is checked. Merge to `main` to deploy. | `Done` |

## Rules

- Acceptance criteria are the source of truth. If the work reveals they are wrong, update the criteria and note why in the Activity log.
- Never delete a spec. Mark it Done so the history stays readable.
- Keep one story per spec. Split it if the criteria cover two outcomes.

## Index

| Key | Title | Status |
| --- | --- | --- |
| — | No specs yet | — |
