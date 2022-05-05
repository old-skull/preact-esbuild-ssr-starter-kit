import { buildSync } from 'esbuild';

buildSync({
  entryPoints: ['./src/client.tsx'],
  bundle: true,
  minify: true,
  format: 'esm',
  platform: 'browser',
  inject: ['./scripts/shims/preact.shim.js'],
  outfile: './build/client.js',
  logLevel: 'info',
});
