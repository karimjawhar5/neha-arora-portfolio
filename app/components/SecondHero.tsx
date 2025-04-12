"use client";

import React from "react";
import Image from "next/image";
import Header from "./Header";

const SecondHero: React.FC = () => {
  return (
    <section className="relative w-full h-[40vh]">
      {/* Hero Image */}
      <Image
        src="/images/hero/hero-banner.jpg"
        alt="Hero image"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-35" />

      {/* Header overlaid at the top */}
      <div className="absolute top-0 w-full z-10">
        <Header />
      </div>
    </section>
  );
};

export default SecondHero;
