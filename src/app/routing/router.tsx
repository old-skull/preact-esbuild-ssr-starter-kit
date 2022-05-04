/* eslint-disable react/jsx-key */
import { Router as PreactRouter } from 'preact-router';
import { routes } from './routing';

export const router = () => (
  <PreactRouter>
    {routes.map(page => (
      <page.component path={page.path} />
    ))}
  </PreactRouter>
);
