/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import NavBar from "../components/NavBar";
import "@testing-library/jest-dom";

it("should render the nav items given", () => {
  const { getByText } = render(
    <NavBar
      navItems={[
        { name: "Map", href: "/map" },
        { name: "Wallet", href: "/wallet" },
        { name: "Trade", href: "/trade" },
        { name: "Profile", href: "/profile" },
        { name: "Settings", href: "/settings" },
      ]}
    />
  );
  const mapElement = getByText(/map/i);
  const walletElement = getByText(/wallet/i);
  const tradeElement = getByText(/trade/i);
  const profileElement = getByText(/profile/i);
  const settingsElement = getByText(/settings/i);

  expect(mapElement).toBeInTheDocument();
  expect(walletElement).toBeInTheDocument();
  expect(tradeElement).toBeInTheDocument();
  expect(profileElement).toBeInTheDocument();
  expect(settingsElement).toBeInTheDocument();
});
