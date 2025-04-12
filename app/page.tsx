import Image from "next/image";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
    </div>
  );
}
