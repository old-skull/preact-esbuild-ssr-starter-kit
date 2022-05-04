import { About } from '../pages/about';
import { Home } from '../pages/home';
import { NotFound } from '../pages/not-found';

export const routes = [
  { path: '/', component: Home },
  {
    path: '/about',
    component: About,
  },

  {
    // should match noMatchHandler route in the `server.tsx`
    path: '/404',
    component: NotFound,
  },
];
