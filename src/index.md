---
layout: home

title: CLIuno
titleTemplate: Your Ultimate Full Stack Web Development Tool

hero:
  name: Scaffold a working full-stack app
  text: in any stack, ready to build on
  tagline: Pick a frontend and a backend — CLIuno gives you two projects that already talk to each other. Auth, CRUD, tests, and CI included.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: What is CLIuno?
      link: /guide/what-is-cliuno
    - theme: alt
      text: View on GitHub
      link: https://github.com/CLIuno
  image:
    src: /logo.png
    alt: CLIuno Logo
features:
  - title: Any stack, one contract
    details: 7 web frontends, 2 mobile, and 12 backends — all implementing the same demo app against one shared REST contract.
  - title: Every pair just works
    details: A live compatibility matrix proves all 108 frontend×backend combinations against the full contract with real payloads.
  - title: Start from something that runs
    details: Every template ships auth (JWT, refresh, reset, verify, OTP), CRUD, tests, linting, and CI — not a blank folder.
  - title: shadcn-style UI, oxc tooling
    details: Web frontends use shadcn components on Tailwind v4; JS/TS is linted and formatted with oxc. A CLAUDE.md guides AI agents.
---

<style>

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(90deg, rgba(7,45,83,1) 0%, rgba(7,45,83,1) 5%, rgba(0,212,255,1) 100%);

  --vp-home-hero-image-background-image: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(7,45,83,1) 35%, rgba(0,212,255,1) 100%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
