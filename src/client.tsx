import { hydrate } from 'preact';
import { router } from './app/routing/router';

hydrate(router(), document.getElementById('root'));
