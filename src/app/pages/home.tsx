import { css } from '@emotion/css';
import { FunctionalComponent } from 'preact';
import { Link } from 'preact-router/match';

export const Home: FunctionalComponent = () => {
  return (
    <>
      <h1
        className={css`
          padding: 32px;
          background-color: orange;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: white;
          }
        `}
      >
        Home
      </h1>

      <Link href="/about">About</Link>
    </>
  );
};
