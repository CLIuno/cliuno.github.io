# Getting Started

## Requirements

- **Node.js** 20+ and **Git** 2+ (always needed).
- The toolchain for whatever stack you pick, only for its dependency-install step:
  - **Laravel / TALL** → PHP + Composer
  - **Django / FastAPI** → Python + [uv](https://docs.astral.sh/uv/)
  - **Rails** → Ruby + Bundler
  - **Spring Boot** → JDK 17 (the `./mvnw` wrapper is included)
  - **ASP.NET** → .NET 8 SDK
  - **Drogon** → Docker (builds in the official Drogon image)
  - **Flutter** → the Flutter SDK

If a toolchain is missing, the project is still scaffolded — you just run the install
command yourself afterward.

## Usage

CLIuno is interactive. Run it and answer the prompts (design pattern → framework →
package manager → database):

```bash
npx cliuno
```

Or install it globally:

::: code-group

```bash [pnpm]
pnpm add -g cliuno
```

```bash [npm]
npm install -g cliuno
```

```bash [yarn]
yarn global add cliuno
```

```bash [bun]
bun add -g cliuno
```

:::

Then:

```bash
cliuno
```

Prefer to check your machine first? Run the doctor to see which tools each stack needs:

```bash
npx cliuno --doctor
```

## In your editor

The **[CLIuno VS Code extension](https://github.com/CLIuno/CLIuno-Vscode-Extension)** does
the same thing without leaving your editor: open the Command Palette and run
**CLIuno: Scaffold a new app**, pick a stack, and it clones the template, installs
dependencies, and opens the project.

## After scaffolding

Each template ships its own `README.md` and `CLAUDE.md` with the exact commands to run it.
Frontends default to a backend at `http://localhost:3000/api/v1`; point them elsewhere via
the template's env variable. Pick any frontend with any backend — every pair is
contract-tested.
