<div align="center">
  <img src="./assets/logo.svg" alt="Logo" width="50" />
</div>

<div align="center">
  <b>@hopflavour</b><br>
  Apps for beer lovers 🍺
</div>

## Features

- **Applications**
  - 🗃️ [CMS](./apps/cms/README.md): CMS headless (ApostropheCMS)
  - 🖥️ [Web](./apps/web/README.md): PWA mobile-optimized (Svelte, SvelteKit)
- **Packages**
  - 🪄 [Lint](./packages/eslint-config-custom/README.md): Custom linting rules (Eslint, StandardJS)
- **Tools**
  - 🗂️ Monorepo

## Getting started

- Create `.env` file
- Create `docker-compose.override.yml`

```yml
version: '3.4'
services:
  root:
    command: tail -f /dev/null
```

- Create and start containers

```js
docker-compose up -d
```

- Start shell inside applicative container

```js
docker-compose exec root sh
```

- Start application commands

```js
npm run -w @hopflavour/<app> <command>
```

## License

[Private and proprietary](./LICENSE)
