# What is CLIuno?

CLIuno is a CLI that scaffolds a **working full-stack app** in the stack of your choice —
ready for humans *and* AI agents to build on. Instead of a blank folder, you start from a
project that already has authentication, CRUD, tests, linting, and CI-grade quality gates.

## Motivation

Starting a project means setting up the environment, wiring auth, installing and
configuring everything — slow and repetitive. CLIuno does that for you: pick a frontend
and a backend and get two projects that already talk to each other.

The trick is that **every template implements the same demo app against one shared REST
contract** — auth (JWT with refresh, reset, email verification, OTP), users, todos,
posts + comments, follows and roles. A live compatibility matrix boots each backend and
drives the full contract with real payloads, so **every frontend works with every
backend** (currently 9 frontends × 12 backends, all green). See
[Frameworks](/frameworks/framework) for the full list.

## What you get

### Web frontends

- **shadcn-style UI** on unstyled, accessible primitives (Base UI, reka-ui, bits-ui,
  Kobalte, spartan) — you own the component code.
- **Tailwind v4** with CSS-variable theming and light/dark mode.
- A typed **API layer** already wired to the shared contract, plus auth state management.
- **Vite** (or the framework's dev server) for a fast dev loop.

### Backends

- The full contract at **`/api/v1`** on **SQLite** — auth, users, todos, posts,
  comments, follows and roles — with a matching test suite.
- **Bearer (JWT) auth** with refresh tokens, password reset, email verification, and
  RFC 6238 **TOTP** OTP.
- Fresh-clone rule: the default role is created on first registration, so it runs against
  an **empty database** with no seeding.

### Mobile

- **Flutter** (Material 3) and **React Native** (Expo) clients that speak the same
  contract as the web frontends.

### Tooling everywhere

- **oxc** for JS/TS (oxlint + oxfmt); each non-JS stack keeps its native linter
  (ruff, rubocop, pint, …).
- **Conventional commits**, editor-ready configs, and a `CLAUDE.md` in every template so
  AI agents extend it idiomatically.

CLIuno is published on npm and ready to use — `npx cliuno` to get started.
