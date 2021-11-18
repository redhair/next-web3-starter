import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>next-web3-starter</title>
        <meta name="description" content="A starter repo for nextjs + web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="h-screen flex justify-center items-center">
          <h1 className="text-4xl text-white font-bold text-center">Welcome to Next.js + web3!</h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
