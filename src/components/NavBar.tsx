import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export interface INavItem {
  name: string;
  href: string;
}

export interface INavBarProps {
  navItems: INavItem[];
}

export default function NavBar({ navItems }: INavBarProps) {
  const { publicKey } = useWallet();

  return (
    <nav className="navbar mb-2 shadow-lg bg-gray-800 text-neutral-content">
      <div className="flex-none px-2 mx-2">
        <span className="text-lg font-bold">Parcl</span>
      </div>
      <div className="flex-1 px-2 mx-2">
        <ul className="items-stretch hidden lg:flex">
          {navItems.map((item, i) => {
            return (
              <li key={i} className="btn btn-ghost btn-sm rounded-btn">
                <Link href={item.href}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <div className="flex-none">
          <button aria-label="avatar" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-none">
          <WalletMultiButton />
          {/* <button className="btn btn-square btn-ghost">
            <div className="avatar">
              <div className="rounded-full w-10 h-10 m-1">
                <img
                  height="40"
                  src="https://i.pravatar.cc/500?img=32"
                  alt="avatar"
                />
              </div>
            </div>
          </button> */}
        </div>
      </div>
    </nav>
  );
}
