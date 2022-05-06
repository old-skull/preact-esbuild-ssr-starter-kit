/* eslint-disable react/jsx-key */
import { Router as PreactRouter } from 'preact-router';
import { routes } from './app.routing';

export const App = () => (
  <PreactRouter>
    {routes.map(page => (
      <page.component path={page.path} />
    ))}
  </PreactRouter>
);
