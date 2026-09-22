# Engineering Decisions

Product-level choices — not an implementation changelog.

## One product, not three frontends

**Choice:** Web and mobile share one product surface.

**Why:** Faster iteration for a solo full-stack builder. Operators get the same Mission Control on a laptop and on a phone.

**Tradeoff:** Store review and platform-specific commerce still require extra work — but not three product roadmaps.

## Relational, owner-scoped data

**Choice:** Website health is modeled as related, owner-scoped records.

**Why:** A site owns findings, connections, and reports. Audits and backfills stay tractable.

**Tradeoff:** Dashboards still need summaries for speed. Those models stay private.

## Tenant isolation as a product rule

**Choice:** Site-scoped data is only available to the owner of that site.

**Why:** Multi-site accounts fail if one property can read another.

**Tradeoff:** Isolation is enforced in more than one layer. Exact mechanisms stay private.

## Identity that spans clients

**Choice:** Provider and credential sign-in converge on one account.

**Why:** Signup and recovery have to work on the web and in the apps.

## Fail closed on untrusted input

**Choice:** Reject malformed input before it becomes stored state.

**Why:** Public forms and integration traffic attract garbage and abuse.

## Abuse protection instead of hoping

**Choice:** Sensitive paths have distributed abuse protection.

**Why:** Anonymous analysis and account flows are abuse magnets. Clients should get a predictable “try later” outcome.

## AI as a layer, not the product

**Choice:** AI assists summarization and guided help. Core health signals stay deterministic product data.

**Why:** Operators need trustworthy website signals. AI should clarify, not invent.

## What we did not choose

- Rewriting the dashboard every quarter for fashion — visual identity (including the pink accent and Mission Control language) is protected on purpose
- Publishing scoring internals — commercially sensitive
- Putting secrets in git — environment-only configuration
- Publishing an implementation blueprint — this showcase describes outcomes, not internals
