import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useEffect, useState } from "react";

const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          // Keep cursor blinking after typing is done
          setTimeout(() => setShowCursor(false), 2000);
        }
      }, 80);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span>
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="text-primary"
        >
          |
        </motion.span>
      )}
    </span>
  );
};

const HeroSection = () => {
  const { personalInfo } = portfolioData;

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Main content - centered */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container relative z-10 px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 mt-8 inline-block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50 animate-pulse-glow" />
                <motion.img
                  src={profilePhoto}
                  alt={personalInfo.name}
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-primary/50"
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              Hi, I'm{" "}
              <span className="text-gradient">
                <TypingText text={personalInfo.name} delay={800} />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-primary font-medium mb-4"
            >
              <TypingText text={personalInfo.profession} delay={1500} />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-balance"
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#projects"
                className="group px-8 py-3.5 bg-gradient-primary text-primary-foreground font-semibold rounded-lg glow transition-all duration-300 hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 glass glass-hover font-semibold rounded-lg"
              >
                Get In Touch
              </a>
              {portfolioData.cvUrl && (
                <a
                  href={portfolioData.cvUrl}
                  download
                  className="flex items-center gap-2 px-8 py-3.5 glass glass-hover font-semibold rounded-lg text-primary hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - fixed at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="pb-8 flex justify-center"
      >
        <a
          href="#experience"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
