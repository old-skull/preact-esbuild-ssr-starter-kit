require('esbuild').buildSync({
  entryPoints: ['./src/server.tsx'],
  bundle: true,
  minify: true,
  platform: 'node',
  inject: ['./scripts/shim/preact-shim.js'],
  outfile: './build/server.js',
});
