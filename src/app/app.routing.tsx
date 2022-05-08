import { Home } from './pages/home';
import { NotFound } from './pages/not-found';
import { Users } from './pages/users';

export const routes = [
  { path: '/', component: Home },
  {
    path: '/users',
    component: Users,
  },
  {
    // should match noMatchHandler route in the `server.tsx`
    path: '/404',
    component: NotFound,
  },
];
