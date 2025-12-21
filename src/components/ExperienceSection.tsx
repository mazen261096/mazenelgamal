import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Calendar, Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const { experience } = portfolioData;

  const formatDate = (dateStr: string) => {
    if (dateStr === "Present") return dateStr;
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <section id="experience" className="py-12 md:py-16 relative">
      <div className="container px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />
          
          {/* Mobile Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:hidden" />

          {experience.map((exp, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative mb-8 last:mb-0 md:flex ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Timeline dot - center for desktop */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background glow-sm z-10" />

                {/* Card */}
                <div className={`ml-16 md:ml-0 md:w-[45%] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="glass glass-hover rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <img
                        src={exp.logoUrl}
                        alt={exp.companyName}
                        className="w-12 h-12 rounded-lg object-cover border border-border flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="w-3.5 h-3.5 text-primary" />
                          <span className="text-primary font-medium text-sm">
                            {exp.companyName}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>
                            {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
