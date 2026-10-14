# Claude Cowork, Cloud Sessions & Remote Control

Reviewed 2026-10-13. These products change quickly. Check the official pages linked at the
bottom before relying on a plan requirement or a command.

## The three ways to use Claude with this repo

| | Claude Cowork | Claude Code cloud session | Claude Code Remote Control |
| --- | --- | --- | --- |
| **Best for** | Non-code knowledge work: reviewing docs, drafting summaries and copy, organizing files | Code changes to this repo, reviewed as a pull request | Continuing a session that runs on your machine, from a phone or another browser |
| **Runs on** | The Claude desktop app is the core experience. Web and mobile are in beta | An Anthropic-managed VM. Claude clones the repo | Your machine |
| **Needs** | A folder you grant access to in the desktop app | GitHub connected. The repo must be visible to the session | A claude.ai login (API keys are not supported). Your machine must stay on |
| **Local config** | Only the folders you choose | Only what is committed, including `.claude/` | Everything local: `.claude/settings.local.json`, MCP servers, tools |
| **If you close your laptop** | Scheduled tasks run unattended. Tasks started from a phone run in the cloud | Keeps running. You review when it finishes | Pauses. Reconnects when the machine is back online |

Plans: Cowork and cloud sessions are included in Pro, Max, Team, and Enterprise. Remote
Control also works on those plans. Team and Enterprise need an Owner to enable the relevant
toggle in admin settings first.

## Which one to use

- **Code change to the portfolio** → cloud session, or local Claude Code. Cloud sessions run in parallel and each one produces a reviewable branch.
- **Needs your local tooling or a local dev server** → local Claude Code. Add Remote Control if you want to watch or steer it from your phone.
- **Non-code work** (reviewing a spec, drafting a blog outline, summarizing `project-docs/roadmap/`) → Cowork. Grant it access to this project folder only, not your whole home directory.
- **Do not edit repo code through Cowork.** Code changes should go through git and a pull request so the spec and review steps still apply.

## Set up cloud sessions for this repo

1. Run `claude`, then `/login` with your claude.ai account. Confirm with `/status` that the login method is claude.ai.
2. Connect GitHub. Either run `gh auth login` and then `/web-setup` in Claude Code, or connect in the browser at [claude.ai/code](https://claude.ai/code).
3. Install the Claude GitHub App on the account that owns this repo. Private repos do not appear without it.
4. Edit the **Default** cloud environment:
   - Setup script: `npm ci`. CI uses npm with `package-lock.json`, so match it.
   - Network access: `Trusted`. This reaches package registries and nothing else.
   - Variables: the site needs no secrets to build or run. Do not add credentials to a cloud environment.
5. Start a session from [claude.ai/code](https://claude.ai/code) or with `claude --cloud`. Choose the repo and a feature branch, not `main`.
6. Use **Plan** mode for the first run on a new spec. Cloud sessions offer Accept edits, Plan, and Auto modes.

## Remote Control

- Start a session on your machine with `claude --remote-control "Portfolio work"`, or type `/remote-control` inside a running session.
- Open the session from [claude.ai/code](https://claude.ai/code) or the Claude mobile app.
- Your files and local config stay on the machine, so keep it awake and connected.

## Deployment readiness

Know what happens when work reaches production before you let it run unattended.

- **Current production path:** `.github/workflows/deploy.yml` runs on every push to `main`. It runs `npm run build` with `NEXT_PUBLIC_BASE_PATH=/amarmohite2001` and publishes `docs/` to GitHub Pages. See [`../deployment/README.md`](../deployment/README.md).
- **Cloud sessions push feature branches.** The site deploys only after a branch is merged to `main`. Keep that merge as a human decision.
- **`docs/` is generated.** Never edit it or put documentation there. `npm run build` deletes and regenerates it.
- **No secrets are needed** for the current build. If that changes, use GitHub Actions secrets, never a committed `.env` file or a `NEXT_PUBLIC_*` variable.

## Checklist before a cloud or Cowork task reaches production

- [ ] A spec exists in [`project-docs/specs/`](../specs/README.md) and its status is Ready.
- [ ] The work is on a branch, not on `main`.
- [ ] The validation checklist in the spec has run: type check, build, mobile and desktop checks, and the built `docs/` output.
- [ ] A human has reviewed the diff before merge.

## Official references

- [Claude Cowork](https://claude.com/product/cowork). Anthropic's page notes that Cowork is "now just Claude", rolling out to Pro and Max first. Check it for current names and platform support.
- [Claude Code on the web: quickstart](https://code.claude.com/docs/en/web-quickstart)
- [Remote Control](https://code.claude.com/docs/en/remote-control)
- [How Claude remembers your project (CLAUDE.md, AGENTS.md, and rules)](https://code.claude.com/docs/en/memory)
- [Settings files and precedence](https://code.claude.com/docs/en/settings)
