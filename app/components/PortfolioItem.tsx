import React from "react";
import Link from "next/link";

interface PortfolioItemProps {
  image: string;
  title: string;
  subtitle: string;
  href: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  image,
  title,
  subtitle,
  href,
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group block relative overflow-hidden cursor-pointer"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
    />
    <div className="absolute bottom-0 left-0 w-full p-4">
      <h4 className="text-xl text-white transition duration-300">
        {title}
      </h4>
      <p className="text-sm font-extralight text-gray-100">{subtitle}</p>
    </div>
  </Link>
);

export default PortfolioItem;
