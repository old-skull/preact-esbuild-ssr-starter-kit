# preact-esbuild-ssr-starter-kit

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

### Styleguide

- [x] [ESLint](https://eslint.org/)
- [x] [Prettier](https://prettier.io/)

## How it works?

There are two main entry points in the `src` folder: `client` and `server`

```
src/
├── app
│   ├── _template
│   │   └── base.tsx
│   ├── app.routing.tsx
│   └── app.tsx
├── client.tsx // 1
└── server.tsx // 2
```

1. `client.tsx` entry uses `hydrate` function to [bypass most rendering work when loading in the browser](https://preactjs.com/guide/v10/api-reference/#hydrate). Otherwise it's just your react project `index.tsx`.
2. `server.tsx` entry contains server which:
   - Serves static assets via `sirv`
   - Maps application `routes` to the server routes.
   - Renders components via `renderToString` and template from `_templates`.

## Serve-side comparsion and alternatives

### Output size comparsion(minimal app)

- express + static: ~1.5mb
- fastify + @fastify/static: ~750kb
- @tinyhttp/app + sirv: ~220kb

### Benchmarks

**_NOTE:_**: Unfortunately, this table doesn't contains benches for tinyhttp

[fastify/benchmarks](https://github.com/fastify/benchmarks/#benchmarks)

### Choose your fighter `¯\_(ツ)_/¯`

## Credits

- [How to Set Up Server Side Rendering (SSR) With React, express.js, and esbuild](https://devtails.xyz/how-to-set-up-server-side-rendering-ssr-with-react-and-esbuild)
- [fastify-preact-ssr](https://github.com/sebringrose/fastify-preact-ssr)
- [eslint config](https://github.com/preactjs/eslint-config-preact/blob/master/index.js)
