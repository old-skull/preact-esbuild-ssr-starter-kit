import { css } from '@emotion/css';
import { Link } from 'preact-router';

export const Header = () => {
  return (
    <header
      className={css`
        background-color: orange;
        padding: 1rem;
      `}
    >
      <h1>preact-esbuild-ssr</h1>
      <nav
        className={css`
          display: flex;
          gap: 1rem;
        `}
      >
        <Link href="/">Home</Link>
        <Link href="/users">Users</Link>
        <Link href="/404">404</Link>
      </nav>
    </header>
  );
};
