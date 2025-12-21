import { SafeLink } from "@/components/SafeLink";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const { personalInfo } = portfolioData;

  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 py-4"
    >
      <div className="container px-6">
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
          <SafeLink to="/" className="text-xl font-bold text-gradient">
            {personalInfo.name.split(" ")[0]}
          </SafeLink>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium bg-gradient-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
