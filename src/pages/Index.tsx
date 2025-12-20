import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolioData";

const Index = () => {
  const { personalInfo } = portfolioData;

  return (
    <>
      <Helmet>
        <title>{personalInfo.name} | {personalInfo.profession}</title>
        <meta name="description" content={personalInfo.description} />
        <meta property="og:title" content={`${personalInfo.name} | ${personalInfo.profession}`} />
        <meta property="og:description" content={personalInfo.description} />
        <meta property="og:image" content={personalInfo.profileImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personalInfo.name} | ${personalInfo.profession}`} />
        <meta name="twitter:description" content={personalInfo.description} />
      </Helmet>

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
    </>
  );
};

export default Index;
