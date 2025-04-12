"use client";

import React from "react";
import SecondHero from "../components/SecondHero";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const ConnectPage: React.FC = () => {
  return (
    <>
      {/* Custom hero section for the Connect page */}
      <SecondHero />

      {/* Main connect content */}
      <main className="py-18 h-[52vh]">
        <div className="max-w-4xl mx-auto text-center font-light text-lg md:text-xl space-y-4">
          <p className="font-medium">NEHA ARORA</p>
          <p>Production Designer, Editor, and Director</p>
          <p>
            <a
              href="tel:+14164143800"
              className="hover:underline"
            >
              (416) 414 3800
            </a>
          </p>
          <p>
            <a
              href="mailto:nehaaro@yahoo.com"
              className="hover:underline"
            >
              nehaaro@yahoo.com
            </a>
          </p>
          <p>Oakville, ON Canada</p>
          <div className="mt-8 flex justify-center space-x-4">
          <Link
              href="https://www.instagram.com/neha.ar1356/"
              target="_blank"
              className="text-lg"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.youtube.com/@nehasedits"
              target="_blank"
              className="text-lg"
            >
              <FaYoutube />
            </Link>
            <Link
              href="https://www.linkedin.com/in/neha-arora-aa7027333/"
              target="_blank"
              className="text-lg"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ConnectPage;
