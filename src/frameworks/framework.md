# Supported Frameworks

CLIuno scaffolds the **same demo app** — auth (JWT with refresh, reset, email
verification, OTP), users, todos, posts + comments, follows and roles — in every stack,
against **one shared REST contract**. So you can mix any frontend with any backend and
they just work together.

Every frontend × backend pair is proven by a live **compatibility matrix** that boots
each backend and drives the full contract with real payloads. Today that's **9 frontends
× 12 backends = 108 passing combinations**.

## Web frontends

All web frontends ship **shadcn-style components** on unstyled, accessible primitives,
with **Tailwind v4** CSS-variable theming (light/dark) and lucide icons.

| Framework | Stack | UI kit |
| --------- | ----- | ------ |
| **React** | React 19 + Vite | shadcn/ui on Base UI |
| **Vue** | Vue 3 + Vite | shadcn-vue on reka-ui |
| **Solid** | SolidJS + Vite | shadcn-style on Kobalte |
| **Next.js** | Next.js 15 (app router) | shadcn/ui on Base UI |
| **Svelte** | SvelteKit 2 (runes) | shadcn-svelte on bits-ui |
| **Nuxt** | Nuxt | shadcn-vue via shadcn-nuxt |
| **Angular** | Angular 19 | spartan-ng helm components |

## Mobile

Mobile keeps its **native design system** (shadcn is a DOM library).

| Framework | Stack |
| --------- | ----- |
| **Flutter** | Flutter (Material 3) — android / iOS / web |
| **React Native** | Expo SDK 57 + expo-router |

## Backends

Every backend serves the contract at `/api/v1` on **SQLite** out of the box. Registering
the first user creates the default role — a fresh clone works against an empty database
with no seeding.

| Framework | Language / stack |
| --------- | ---------------- |
| **Express** | Node · TypeScript + TypeORM |
| **Fastify** | Node · TypeScript + TypeORM |
| **NestJS** | Node · NestJS 10 + TypeORM |
| **AdonisJS** | Node · AdonisJS 6 + Lucid |
| **Django** | Python · Django (uv) |
| **FastAPI** | Python · FastAPI + SQLAlchemy (uv) |
| **Laravel** | PHP · Laravel 12 + Sanctum |
| **Rails** | Ruby · Rails 8 API |
| **Spring Boot** | Java 17 · Spring Boot 3.4 |
| **ASP.NET** | C# · ASP.NET Core 8 + EF Core |
| **Drogon** | C++17 · Drogon |

## Full-stack (one repo)

| Framework | Stack |
| --------- | ----- |
| **TALL stack** | Laravel 13 + Livewire/Volt UI — also serves the REST API |

## Scaffolding

CLIuno is interactive — run it and answer the prompts (design pattern → framework →
package manager):

```bash
npx cliuno
```

Or scaffold from your editor with the [VS Code extension](https://github.com/CLIuno/CLIuno-Vscode-Extension)
— run **CLIuno: Scaffold a new app** and pick a stack.
