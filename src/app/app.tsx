/* eslint-disable react/jsx-key */
import { Router } from 'preact-router';
import { routes } from './app.routing';

export const App = () => (
  <Router>
    {routes.map(({ path, component: Component }) => (
      <Component path={path} />
    ))}
  </Router>
);
