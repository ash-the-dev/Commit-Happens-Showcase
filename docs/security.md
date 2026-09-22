# Security

Categories of controls only. No secrets, bypasses, thresholds, or schemes.

## Threat model (short)

Commit Happens handles accounts, optional Google Analytics / Search Console
connections, first-party analytics, technical findings, and subscription state.

Primary risks: account takeover, cross-site data leakage, abuse of public
analysis, credential theft, and forged external events.

## Principles

- Authenticated sessions in production
- Tenant isolation on site-scoped data
- Secrets only in environment configuration
- Secure third-party integrations — the UI shows connection health, not raw credentials
- Distributed abuse protection on sensitive paths
- Public privacy / terms surfaces and account-deletion paths
- Observability that prefers error classes over payloads or PII

## Deliberate omissions

Not documented here on purpose:

- authentication architecture and session internals
- token handling, callbacks, and recovery flows
- ownership-check implementation
- abuse-protection topology and thresholds
- external-event authentication schemes
- operator bypasses, scoring, and verifier internals
- operator-only routes and tooling
