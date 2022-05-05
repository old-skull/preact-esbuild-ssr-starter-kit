require('esbuild').buildSync({
  entryPoints: ['./src/client.tsx'],
  bundle: true,
  minify: true,
  platform: 'browser',
  inject: ['./scripts/shim/preact-shim.js'],
  outfile: './build/client.js',
});
