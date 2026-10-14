# AM-NNN: <Story title in plain words>

| Field        | Value                                                        |
| ------------ | ------------------------------------------------------------ |
| Key          | AM-NNN                                                       |
| Type         | Story / Task / Bug / Spike                                   |
| Epic         | <epic key or "None">                                         |
| Status       | Draft / Ready / In Progress / In Review / Done               |
| Priority     | P0 / P1 / P2                                                 |
| Estimate     | S / M / L                                                    |
| Owner        | <name>                                                       |
| Created      | YYYY-MM-DD                                                   |

## User story

As a <role>, I want <capability>, so that <outcome>.

_Keep it to one user outcome. If you need "and" twice, split the story._

## Context

_Why this matters now. Link the roadmap or architecture doc it relates to, and any earlier spec it depends on._

## Acceptance criteria

_Each criterion must be testable. Use Given / When / Then. A reviewer should be able to tick each one without asking you what it means._

- [ ] **AC1** — Given <context>, when <action>, then <observable result>.
- [ ] **AC2** — Given <context>, when <action>, then <observable result>.

## Out of scope

_Things a reader might assume are included but are not._

- 

## Technical notes

- **Files likely touched:** <paths>
- **Content changes:** <keys to add or change in `data/content.ts`, or "None">
- **Rules that apply:** `.claude/rules/` — list the ones that bite here (content, asset-paths, static-export, ...)
- **Dependencies:** <new packages and why, or "None">
- **Deployment impact:** <none / describe>. Remember that `docs/` is generated and must not be edited.

## Validation

- [ ] `npx tsc --noEmit` passes
- [ ] `npm run build` passes and the output in `docs/` looks right
- [ ] Checked at 375px width and at desktop width, in light and dark theme
- [ ] Keyboard-only walkthrough of the changed UI
- [ ] Other validation specific to this story: <describe>

## Definition of Done

- [ ] All acceptance criteria ticked
- [ ] Validation checklist complete
- [ ] Docs updated where behavior or structure changed
- [ ] Reviewed by a human before merge

## Open questions

_Anything unresolved. Claude asks these before implementing rather than guessing._

- 

## Activity log

- YYYY-MM-DD — Created as Draft.
