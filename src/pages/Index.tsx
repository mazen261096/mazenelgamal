import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolioData";

const Index = () => {
  const { personalInfo } = portfolioData;

  useEffect(() => {
    document.title = `${personalInfo.name} | ${personalInfo.profession}`;
  }, [personalInfo.name, personalInfo.profession]);

  return (
    <div className="min-h-screen noise">
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
