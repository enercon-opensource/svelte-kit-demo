# front-end

## Do this

```bash
pnpm install (or pnpm install, etc)
```

```bash
pnpm run dev -- --open
```

To close the dev server, hit Ctrl-C

## Developing

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

```bash
pnpm run dev
```

...or start the server and open the app in a new browser tab

```bash
pnpm run dev -- --open
```

Use `--host` to expose server to other devices on this network.

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
pnpm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
