/* eslint-disable react/jsx-key */
import { injectGlobal } from '@emotion/css';
import { Router } from 'preact-router';
import { routes } from './app.routing';
import { Header } from './components/header';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const App = () => (
  <>
    <Header />
    <Router>
      {routes.map(({ path, component: Component }) => (
        <Component path={path} />
      ))}
    </Router>
  </>
);
