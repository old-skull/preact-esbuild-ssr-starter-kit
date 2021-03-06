import { App as Server, Response } from '@tinyhttp/app';
import pc from 'picocolors';
import { renderToString } from 'preact-render-to-string';
import sirv from 'sirv';
import { routes } from './app/app.routing';
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
    dev: false,
  }),
);

// === routes ===
routes.forEach(({ path, component: Component }) =>
  app.get(path, (_, res: Response) => {
    const html = renderToString(<Component />);
    const page = template(html);

    res.header('Content-Type', 'text/html; charset=utf-8').send(page);
  }),
);

// === start ===
const PORT = 8080;

app.listen(PORT, () => {
  const msg = pc.green(`App running on: http://localhost:${PORT}`);
  console.log(msg);
});
