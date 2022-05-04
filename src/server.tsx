import { App as Server, Response } from '@tinyhttp/app';
import pc from 'picocolors';
import { renderToString } from 'preact-render-to-string';
import sirv from 'sirv';
import { routes } from './app/routing/routing';
import { template } from './app/_template/base';

const app = new Server({
  // should match 404 route in the `routing.tsx`
  noMatchHandler: (_, res: Response) => res.redirect('/404'),
});

// === middleware ===
app.use(
  sirv('build', {
    maxAge: 31536000,
    immutable: true,
    dev: process.env.NODE_ENV === 'dev',
  }),
);

// === routes ===
routes.forEach(route =>
  app.get(route.path, (_, res: Response) => {
    res.header('Content-Type', 'text/html; charset=utf-8');
    res.send(template(renderToString(<route.component />)));
  }),
);

// === start ===
const PORT = 8080;

app.listen(PORT, () => {
  const msg = pc.green(`App running on: http://localhost:${PORT}`);
  console.log(msg);
});
