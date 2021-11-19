import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useWallet } from "@solana/wallet-adapter-react";

const Home: NextPage = (props) => {
  const { publicKey } = useWallet();

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="This site will fly high 🦤" />
      </Head>

      <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
        <div className="">
          <div className="text-center pt-2">
            <div className="hero min-h-16 py-20">
              <div className="text-center hero-content">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-5xl font-bold">Hello World!</h1>
                  <p className="mb-5">
                    This scaffold includes awesome tools for rapid development
                    and deploy dapps to Solana: Next.JS, TypeScript,
                    TailwindCSS, Daisy UI.
                  </p>
                  <p className="mb-5">
                    Sollana wallet adapter is connected and ready to use.
                  </p>
                  <p>
                    {publicKey ? (
                      <>Your address: {publicKey.toBase58()}</>
                    ) : null}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h1 className="mb-5 text-5xl">Templates:</h1>
              <ul>
                <li>
                  <Link href="/gallery">
                    <a className="mb-5 text-4xl font-bold hover:underline">
                      1 -- 🏞 🌄 🎑 -- NFT Gallery
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
