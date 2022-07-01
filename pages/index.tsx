import Head from 'next/head';

import type { NextPage } from 'next';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Create Next App</title>
      <meta name="JRGCast wine-front-challenge" content="JRGCast wine-front-challenge" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <h1>Hello world</h1>
      <p>
        Get started by editing
        {' '}
        <code>pages/index.tsx</code>
      </p>
    </main>
  </div>
);

export default Home;
