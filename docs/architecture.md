# Architecture

## High-level shape

Commit Happens is a **modern full-stack web application** with native iOS and Android clients. The live product includes:

- marketing and public tools
- authenticated Mission Control
- APIs that support product capabilities and integrations
- store-distributed mobile clients

The data layer is **relational, with tenant isolation**. Exact schemas, roles, and storage topology stay private.

## Product surfaces

- Operator workspace (Mission Control) with site-scoped navigation
- Public surfaces for acquisition (health check, guides, pricing)
- Localized copy for multiple languages (English is the source of truth)

## Backend (product level)

Authenticated APIs support product reads and writes, analytics, integrations,
technical analysis, subscriptions, and monitoring. Routes, service
boundaries, job orchestration, and operator tooling remain private.

Untrusted input is rejected before it becomes stored product state.

## Data

Owner-scoped product data lives in a relational store. Exact entities,
relationships, summary models, scoring formulas, and schemas are private.

## Identity

Web and mobile clients share one product identity. Session and token
handling remain private.

## Integrations

| Capability | Product role |
| --- | --- |
| Google Analytics | Optional traffic signals the customer already owns |
| Google Search Console | Optional search-visibility signals |
| First-party analytics | Product-owned traffic and events |
| Technical analysis | Asynchronous website findings |
| AI assistance | Grounded summaries — prompts stay private |
| Commerce | Web and mobile subscriptions |
| Messaging | Account and lifecycle communication |

How those connections authenticate, store credentials, or recover is not documented here.

## Website analysis

Long-running analysis becomes site-scoped product results. Provider contracts,
normalization, storage design, and acquisition-path behavior remain private.

## Reliability

Sensitive paths are protected against abuse. Background work supports analysis,
account lifecycle, and notifications. Thresholds and orchestration stay private.

## Deployment

The web product is cloud-hosted. Native clients ship through the App Store and Google Play.

Environment secrets live in the host, never in this showcase.
