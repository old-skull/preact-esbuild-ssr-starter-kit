import { Fragment, FunctionComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import { useEffect, useState } from 'preact/hooks';

export const Home: FunctionComponent = () => {
  const [msg, setMsg] = useState<string>('');

  useEffect(() => setMsg('Preact'), []);

  return (
    <>
      <h1>Home</h1>
      {msg}
      <Link href="/about">About</Link>
    </>
  );
};
