"use client";

import React from "react";
import Image from "next/image";

const topMovies = [
  {
    id: 1,
    src: "/images/top-movies/top-1.jpg",
    alt: "#1 favorite movie",
    title: "Get Out",
  },
  {
    id: 2,
    src: "/images/top-movies/top-2.jpg",
    alt: "#2 favorite movie",
    title: "Coraline",
  },
  {
    id: 3,
    src: "/images/top-movies/top-3.jpg",
    alt: "#3 favorite movie",
    title: "Barbie",
  },
  {
    id: 4,
    src: "/images/top-movies/top-4-1.jpg",
    alt: "#4 favorite movie",
    title: "Anora",
  },
  {
    id: 5,
    src: "/images/top-movies/top-5.jpg",
    alt: "#5 favorite movie",
    title: "The Substance",
  },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 px-4 md:px-8">
      {/* Use flex-col-reverse on mobile so the image appears above the text,
          and switch to flex-row on md+ */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* About Text */}
        <div className="md:w-1/2">
          <h2 className="text-xl font-medium mb-4">ABOUT</h2>
          <p className="font-light">
          Neha Arora is a third-year Film and Television student at Sheridan College with a passion for production design and directing.<br /><br />
          What began as a hobby editing videos turned into a love for filmmaking, and during her time at Sheridan, she found her voice in production design—creating visually striking sets across a range of student films.<br /><br />
          Neha has also explored cinematography, editing, and directing. In 2024, she directed her first short film <em>The Beauty of Letting Go</em> with a group of close collaborators.
          </p>
          {/* Top 5 Movies Section */}
          <div className="mt-8">
            <h3 className="text-md mb-4">MY FAVOURITE MOVIES</h3>
            <div className="flex space-x-4 overflow-x-auto md:overflow-visible">
              {topMovies.map((movie) => (
                <div key={movie.id} className="flex-shrink-0">
                  <Image
                    src={movie.src}
                    width={90}
                    height={120}
                    alt={movie.alt}
                  />
                  <p className="text-sm mt-2">{movie.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Image */}
        <div className="md:w-1/2 my-10 md:mt-0 md:ml-8">
          {/* Constrain image width on mobile and center it */}
          <div className="w-3/4 md:w-full mx-auto md:flex justify-end">
            <Image
              src="/images/about/about-01.jpg"
              alt="Neha Arora"
              width={450}
              height={450}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
