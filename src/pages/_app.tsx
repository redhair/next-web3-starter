import React, { useMemo } from "react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

import NavBar from "../components/NavBar";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/App.css";

const SOLANA_NETWORK = WalletAdapterNetwork.Mainnet;
// const SOLANA_NETWORK = WalletAdapterNetwork.Devnet;
const network = SOLANA_NETWORK;

const WalletProvider = dynamic(
  () => import("../contexts/ClientWalletProvider"),
  {
    ssr: false,
  }
);

function App({ Component, pageProps }: AppProps) {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider>
        <NavBar
          navItems={[
            { name: "Map", href: "/map" },
            { name: "Wallet", href: "/wallet" },
            { name: "Trade", href: "/trade" },
            { name: "Profile", href: "/profile" },
            { name: "Settings", href: "/settings" },
          ]}
        />
        <Component {...pageProps} />
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
