import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

const SkillsSection = () => {
  const { skills } = portfolioData;

  // Group skills by category
  const grouped = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categories = Object.entries(grouped);

  return (
    <section id="skills" className="py-10 md:py-14 relative">
      <div className="container px-4 md:px-6 max-w-[90rem]">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {categories.map(([category, categorySkills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-xl border border-border bg-card p-5"
            >
              <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <span
                    key={skill.id}
                    className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
