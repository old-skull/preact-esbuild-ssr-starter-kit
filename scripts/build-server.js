import { buildSync } from 'esbuild';

buildSync({
  entryPoints: ['./src/server.tsx'],
  bundle: true,
  minify: true,
  format: 'esm',
  platform: 'node',
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  inject: [
    './scripts/shims/preact.shim.js',
    './scripts/shims/require.shim.js',
    './scripts/shims/emotion.shim.js',
  ],
  outfile: './build/server.js',
  logLevel: 'info',
});
