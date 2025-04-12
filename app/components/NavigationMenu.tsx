"use client";

import React, { useState } from "react";
import Link from "next/link";

// Define a type for our navigation items.
interface NavItem {
  label: string;
  href: string;
}

// List of navigation items.
const navItems: NavItem[] = [
  { label: "PORTFOLIO", href: "/" },
  { label: "CONNECT", href: "/connect" },
];

const NavigationMenu: React.FC = () => {
  // State to manage if the mobile menu is open or closed.
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the mobile menu.
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="relative">
      {/* Burger menu button: Visible only on mobile view */}
      <button
        type="button"
        className="lg:hidden p-2"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {/* Hamburger icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Navigation links */}
      <ul
        className={`absolute right-0 mt-2 bg-black border border-gray-400 shadow-md 
                    lg:static lg:flex lg:space-x-4 lg:bg-transparent lg:border-0 lg:shadow-none
                    ${isOpen ? "block" : "hidden"} lg:block`}
      >
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="block px-4 py-2 hover:underline"
              onClick={() => setIsOpen(false)} // Optionally close the menu on link click for mobile view.
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
