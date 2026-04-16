# PM Planning System

A structured planning system for product teams shipping in the AI era. Specs live next to code. Claude Code reads them automatically. Everything is version-controlled.


## What This Is

- A forkable template for the planning docs that PMs write before features ship.
- A CLAUDE.md that tells Claude Code how a PM should and shouldn't contribute to the codebase.
- A skill file that reviews planning docs and flags gaps.
- A rollout playbook, measurement template, and review cadence for deploying the system to a team.

## What This Isn't

- A code generator — the skill file reviews plans, it doesn't write code.
- A replacement for engineer review — every PM PR still requires engineer sign-off.
- Opinionated about which product you're building — the template is stack-agnostic.
- A substitute for strategy, user research, or stakeholder alignment — this is the artifact layer, not the thinking layer.

## Why Engineers Benefit Too

Engineer review becomes the interesting part of the job — judgment calls on specs and approaches, not mechanical "change this string" tickets. Sharper PLANNING docs mean less back-and-forth. Measured engineer NPS is a program guardrail; if the program costs engineers more than it saves, it ends.

## What's Inside

```
pm-planning-system/
├── CLAUDE.md                          ← Claude Code reads this every session
├── planning/
│   ├── PLANNING-TEMPLATE.md           ← Fill-in template for any feature
│   ├── EXAMPLE-notification-batching.md  ← Worked example: non-AI feature
│   └── EXAMPLE-ai-search.md           ← Worked example: AI feature w/ behavior contract
├── rollout/
│   ├── TEAM-ROLLOUT-PLAYBOOK.md       ← How to deploy this across your PM team
│   ├── PILOT-MEASUREMENT.md           ← Metrics template for a one-sprint pilot
│   └── WEEKLY-REVIEW-CADENCE.md       ← Structure for weekly planning reviews
└── .claude/skills/
    └── planning-review.md             ← Reviews your planning doc and flags gaps
```

## Adding to an Existing Repo

Most teams already have a product repo. You don't need a separate repo for this. Copy the `/planning`, `/rollout`, and `/.claude/skills` folders into your existing repo. Add the contents of `CLAUDE.md` to your existing CLAUDE.md (or create one at the root). That's it. The planning docs now live next to the code they describe.

## Platform Alternatives

This system works with any git platform: GitHub, GitLab, Bitbucket, Azure DevOps. The concepts are identical: markdown files in a repo, branch-based changes, pull/merge requests with review. The skill files reference "PR" but this applies equally to GitLab merge requests or Bitbucket pull requests. Adjust the terminology in CLAUDE.md for your platform.

## For Product Directors

You're deploying a planning system for your team. Here's how:

**Week 1: Set up the repo.**
1. Fork this repo or copy the folders into your existing product repo
2. Edit `CLAUDE.md` with your product's context, coding standards, and team norms
3. Review the two examples to understand the format

**Week 2: Pilot with one PM.**
1. Pick one PM and one upcoming feature
2. Have them write a PLANNING.md using the template
3. Have them push it to the repo and get feedback from eng
4. Use `PILOT-MEASUREMENT.md` to track cycle time before/after

**Week 3: Review and expand.**
1. Review pilot data with your eng director
2. If cycle time improved and nothing broke, add a second PM
3. Start the weekly review cadence from `WEEKLY-REVIEW-CADENCE.md`

The rollout playbook in `/rollout` has the full details.

## For Individual PMs

1. Fork this repo
2. Edit `CLAUDE.md` with your product context
3. Write a PLANNING.md for your next feature using the template
4. Push it. You just shipped your first spec to git.

You can do all of this from GitHub's web interface. No terminal needed.

## For Aspiring PMs

Fork this repo. Write a PLANNING.md for a product you admire or a case study. This is a better portfolio artifact than a PDF.

You won't have real data. That's fine. Use publicly available benchmarks, reasonable estimates, and label them as assumptions. Write: "Assumption: current notification mute rate is ~8% based on industry benchmarks for B2B SaaS." Interviewers care that you think in specific metrics, not that you have the exact numbers.

## The Skill File

### Planning Review (`/.claude/skills/planning-review.md`)
Run this before sharing your planning doc. It checks for missing sections, vague metrics, unspecified rollout plans, and gaps in AI behavior contracts. Saves you from sending a half-baked doc to eng.

## What PMs Should and Shouldn't Ship

**PM Shipping Zone (do this):**
- Copy and microcopy (error messages, CTAs, tooltips, onboarding text)
- Config and feature flags
- AI prompts and behavior examples
- Planning docs and specs
- Small front-end changes (spacing, visibility, ordering)

**Engineering Zone (don't touch):**
- Database schemas and migrations
- API design and backend logic
- Authentication and security
- Infrastructure and deployment pipelines
- Performance optimization

Rule of thumb: if you can describe the change in one sentence and the blast radius is limited to what users see, it's in the PM zone.

## Code Review is Non-Negotiable

Every PM pull request gets engineer review. No exceptions. The PM PR skill file catches issues before engineers see them, but it doesn't replace human review. The skill file is the first pass. The engineer is the safety net.

## Learn More

- [The PM's Guide to Shipping Code to Production](https://www.news.aakashg.com) — the full guide this repo accompanies
- [Taste at Speed](https://www.news.aakashg.com/p/taste-at-speed) — how to evaluate prototypes before speccing
- [AI PRDs: Everything You Need to Know](https://www.news.aakashg.com/p/ai-prd) — the PRD template this system builds on
- [Claude Code Setup Guide](https://www.news.aakashg.com/p/claude-cowork-code-setup) — getting started with Claude Code

## License

MIT. Use it, fork it, adapt it. If it helps your team ship better, that's the point.
