import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
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
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
