"use client";

import React from "react";
import Image from "next/image";
import Header from "../components/Header";

const PortfolioProjectPage: React.FC = () => {
  // Dummy data – replace these with your actual project details and image paths.
  const title = "HUSK";
  const credit = "Credit: Production Designer";
  const btsImages = [
    "/images/portfolio/husk/bts-1.jpg",
    "/images/portfolio/husk/bts-2.jpg",
    "/images/portfolio/husk/bts-3.jpg",
    "/images/portfolio/husk/bts-4.jpg",
    // Add more paths if needed.
  ];

  return (
    <main>
        <Header />
        <div className="py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Project Info */}
        <div className="text-center">
          <h1 className="text-xl font-medium">{title}</h1>
          <p className="mt-2 text-lg font-light">{credit}</p>
        </div>

        {/* BTS / Stills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {btsImages.map((src, index) => (
            <div key={index}>
              <Image
                src={src}
                alt={`BTS image ${index + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    </main>
  );
};

export default PortfolioProjectPage;
