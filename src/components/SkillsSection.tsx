import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

const SkillsSection = () => {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const chipVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="skills" className="py-12 md:py-16 relative">
      <div className="container px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <motion.span
                key={skill.id}
                variants={chipVariants}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 20px hsl(var(--primary) / 0.4)",
                }}
                className="px-5 py-2.5 text-sm font-medium bg-secondary text-secondary-foreground rounded-full border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
