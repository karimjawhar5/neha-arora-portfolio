"use client";

import React from "react";
import NavigationMenu from "./NavigationMenu";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-6 md:px-12 py-6">
      <div>
        <h1 className="font-light text-3xl md:text-4xl"><Link href={"/"}>NEHA ARORA</Link></h1>
        <p className="font-light text-sm md:text-md">DIRECTOR/ PRODUCTION DESIGNER</p>
      </div>
      <NavigationMenu />
    </header>
  );
};

export default Header;
