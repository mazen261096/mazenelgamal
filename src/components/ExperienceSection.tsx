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
    <section id="experience" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-background border-2 border-primary glow-sm" />

                <div className="glass glass-hover rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <img
                      src={exp.logoUrl}
                      alt={exp.companyName}
                      className="w-14 h-14 rounded-lg object-cover border border-border"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span className="text-primary font-medium">
                          {exp.companyName}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
