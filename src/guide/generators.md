# Generators & AI agents

Every CLIuno template implements the same demo app on one REST contract. Once a project
is scaffolded, `cliuno make:*` clones that pattern for **your** resources, in the
template's own conventions, so you (or an AI agent) only edit fields and business logic.

## `cliuno make`

Run it anywhere inside a scaffolded project — detection walks up to the manifest
(`package.json`, `composer.json`, `pyproject.toml`, `Gemfile`, `pom.xml`, `*.csproj`,
`CMakeLists.txt`, `pubspec.yaml`):

```bash
cliuno make                 # what this stack can generate (and which kinds use the framework's own CLI)
cliuno make:resource Product --fields name:string,price:number,inStock:boolean,notes:text?
cliuno make:controller Invoice --dry-run    # preview, write nothing
cliuno make:model Tag --force               # overwrite an existing file
```

### What `make:resource` produces

| Where      | Files                                                                                     | Registered in                                   |
| ---------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Backends   | entity/model, controller/route, validation (validator / form request / DTO / serializer), test, migration where the stack uses them | router index, app module, `routes/api.php`, `config/routes.rb`, `urls`, `app.py`, DbContext, … |
| Frontends  | API client, list page (create + delete), detail page, store where the template uses one   | `apis/index`, router/routes file (file-based routers need nothing) |

Every backend resource is auth-guarded, owned by the authenticated user, exposes
list / get / create / update / delete under `/api/v1/<plural>`, and answers with
`{ status, message, data }` — exactly like the todos the templates ship with, so any
CLIuno frontend can consume it.

Re-running is safe: existing files are skipped unless `--force`, and registrations are
never duplicated. Follow-ups you still have to do (run a migration, add a nav link) are
printed as `!` lines.

### Single-file kinds

`make:controller`, `make:model`, `make:migration`, `make:service`, `make:validator`,
`make:request`, `make:dto`, `make:test`, `make:api`, `make:store`, `make:page`,
`make:component`. Where the framework has its own generator the command delegates to it —
`php artisan make:*`, `node ace make:*`, `bin/rails g`, `manage.py makemigrations`,
`ng g`, `shadcn add` — otherwise CLIuno renders a stub in the template's style.

### Fields

`--fields a:type,b:type?` — `?` means nullable. Types: `string` (short text, used as the
display field), `text`, `int`, `number`, `boolean`, `date`, `json`. Default when omitted:
`title:string,description:text?`.

## Claude Code skills & plugin

The `core` repo ships three skills that teach an AI agent to scaffold from the templates
(`cliuno-scaffold`), to generate instead of hand-writing (`cliuno-make`), and to verify
the shared contract (`cliuno-matrix`). Install them any of these ways:

::: code-group

```bash [Claude Code plugin]
/plugin install cliuno --marketplace CLIuno/core
# or: claude plugin marketplace add CLIuno/core && claude plugin install cliuno@cliuno
```

```bash [project .claude/skills]
npx cliuno@latest skills install        # --global → ~/.claude/skills
npx cliuno@latest skills status         # installed / outdated / modified / missing
```

```bash [skills.sh]
npx skills add CLIuno/core
```

:::

Every template's `CLAUDE.md` asks the agent to run `cliuno skills status` first and to
reach for `cliuno make:*` before writing a resource by hand — a generated vertical slice
costs one command instead of thousands of tokens, and it follows the conventions the
compatibility matrix tests.
