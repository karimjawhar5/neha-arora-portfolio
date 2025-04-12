"use client";

import React from "react";
import PortfolioItem from "./PortfolioItem";

interface PortfolioProject {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  href: string;
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    image: "/images/portfolio/BOLG/cover.jpg",
    title: "The Beauty of Letting Go",
    subtitle:
      "Credit: Director, Script Writer, and Production Designer",
    href: "/beauty-of-letting-go",
  },
  {
    id: 2,
    image: "/images/portfolio/LTG/cover.jpg",
    title: "Learning to Grow",
    subtitle: "Credit: Director",
    href: "https://youtu.be/AtfWhzOZyNQ?si=ELdmkd_JNFyxXE0a",
  },
  {
    id: 3,
    image: "/images/portfolio/FOA/cover.jpg",
    title: "Face of Adversity",
    subtitle: "Credit: Production Designer",
    href: "face-of-adversity",
  },
  {
    id: 4,
    image: "/images/portfolio/Prey/cover.jpg",
    title: "Prey",
    subtitle: "Credit: Production Designer",
    href: "https://youtu.be/JY4j169njqE",
  },
  {
    id: 5,
    image: "/images/portfolio/Stitches/cover.jpg",
    title: "Stitches",
    subtitle: "Credit: Production Designer",
    href: "/stitches",
  },
  {
    id: 6,
    image: "/images/portfolio/Husk/cover.jpg",
    title: "Husk",
    subtitle: "Credit: Production Designer",
    href: "/husk",
  },
  {
    id: 7,
    image: "/images/portfolio/DIAR/cover.jpg",
    title: "Denial Is A River",
    subtitle: "Credit: Production Designer",
    href: "https://www.youtube.com/watch?app=desktop&v=3xeV6a-0wog",
  },
  {
    id: 8,
    image: "/images/portfolio/Lucid/cover.jpg",
    title: "Lucid",
    subtitle: "Credit: Production Designer",
    href: "/lucid",
  },
  {
    id: 9,
    image: "/images/portfolio/White-Ferrari/cover.jpg",
    title: "White Ferrari",
    subtitle: "Credit: Director of Photography",
    href: "https://youtu.be/3pwMtsl4eEg?si=_b_OhaXjLQ2HH0Ob",
  },
  {
    id: 10,
    image: "/images/portfolio/WIWY/cover.jpg",
    title: "When I Was You",
    subtitle: "Credit: Director of Photography",
    href: '/when-i-was-you',
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-medium mb-8">PORTFOLIO</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolioProjects.map((project) => (
            <PortfolioItem
              key={project.id}
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              href={project.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
