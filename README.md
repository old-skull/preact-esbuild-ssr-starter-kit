# preact-esbuild-ssr-starter-kit

🏗🏗🏗 Work in progress 🏗🏗🏗

## Table of contents

- [TOC](#table-of-contents)
- [About](#about)
- [Available scripts](#available-scripts)
- [Server-side comparsion and alternatives](#server-side-comparsion-and-alternatives)
- [Q&A](#questions-and-answers)
- [Credits](#credits)

## About

### Core

- [x] [tinyhttp](https://github.com/tinyhttp/tinyhttp)
  - [x] [sirv static assets](https://github.com/lukeed/sirv/tree/master/packages/sirv)
  - [x] [picocolors](https://github.com/alexeyraspopov/picocolors)
- [x] [preact](https://github.com/preactjs/preact)
  - [x] [preact-router](https://github.com/preactjs/preact-router)
  - [x] [hydrate](https://preactjs.com/guide/v10/api-reference/#hydrate)
  - [x] [renderToString](https://preactjs.com/guide/v10/api-reference/#hydrate)
- [x] [esbuild](https://github.com/evanw/esbuild)
- [x] [@emotion/css](https://emotion.sh/docs/@emotion/css)
- [x] [PNPM](https://pnpm.io/)

### Styleguide

- [x] [ESLint](https://eslint.org/)
- [x] [Prettier](https://prettier.io/)

## Available scripts

### Serve build

```bash
pnpm serve
```

### Remove build artifacts

```bash
pnpm prebuild
```

### Build client OR server

```bash
pnpm build:server
# or
pnpm build:client
```

### Build for production

```bash
pnpm build
```

### Format via prettier

```bash
pnpm format
```

### Lint via ESLint

```bash
pnpm li

## Alternatives

### Output size comparsion(minimal app)

- express + static: ~1.5mb
- fastify + @fastify/static: ~750kb
- @tinyhttp/app + sirv: ~220kb

### Benchmarks

**_NOTE:_** Unfortunately, this table doesn't contains benches for tinyhttp

[fastify/benchmarks](https://github.com/fastify/benchmarks/#benchmarks)

Choose your fighter `¯\_(ツ)_/¯`

## Questions and Answers

### How it works?

There are two main entry points in the `src` folder: `client` and `server`

```

src/
├── app
│ ├── \_template
│ │ └── base.tsx
│ ├── app.routing.tsx
│ └── app.tsx
├── client.tsx // 1
└── server.tsx // 2

```

1. `client.tsx` entry uses `hydrate` function to [bypass most rendering work when loading in the browser](https://preactjs.com/guide/v10/api-reference/#hydrate). Otherwise it's just your react project `index.tsx`.
2. `server.tsx` entry contains server which:
   - Serves static assets via `sirv`
   - Maps application `routes` to the server routes.
   - Renders components via `renderToString` and template from `_templates`.

### Why do I need shims?

With the new [jsx transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) you don't need to import React in every file where you want to use jsx. With esbuild you could inject `import React from 'react'` in file using re-export a.k.a shim. Think about it as workaround that helps expose built-in API during build.

- [esbuild - Auto-import for JSX](https://esbuild.github.io/content-types/#auto-import-for-jsx)
- [mdn - Shim](https://developer.mozilla.org/en-US/docs/Glossary/Shim)

### Route objects vs JSX routing?

You could move `app.routing.tsx` to the App component [like this](https://github.com/preactjs/preact-router/issues/207#issuecomment-313259298).

## Credits

- [How to Set Up Server Side Rendering (SSR) With React, express.js, and esbuild](https://devtails.xyz/how-to-set-up-server-side-rendering-ssr-with-react-and-esbuild)
- [fastify-preact-ssr](https://github.com/sebringrose/fastify-preact-ssr)
- [eslint config](https://github.com/preactjs/eslint-config-preact/blob/master/index.js)
```
