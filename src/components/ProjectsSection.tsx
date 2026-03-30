import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { SafeLink } from "@/components/SafeLink";
import { ArrowUpRight, Github, Globe, Layers } from "lucide-react";
import { GooglePlayIcon, AppStoreIcon } from "@/components/icons/StoreIcons";

const getLinkIcon = (link: string) => {
  if (link.includes("github.com")) return <Github className="w-4 h-4" />;
  if (link.includes("play.google.com")) return <GooglePlayIcon className="w-4 h-4" />;
  if (link.includes("apps.apple.com") || link.includes("apple.com")) return <AppStoreIcon className="w-4 h-4" />;
  return <Globe className="w-4 h-4" />;
};

const getLinkLabel = (link: string) => {
  if (link.includes("github.com")) return "GitHub";
  if (link.includes("play.google.com")) return "Play Store";
  if (link.includes("apps.apple.com") || link.includes("apple.com")) return "App Store";
  return "Website";
};

const ProjectsSection = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-12 md:py-16 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SafeLink to={`/project/${project.id}`} className="group block h-full">
                <div className="glass glass-hover rounded-xl overflow-hidden h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    
                    {/* End-to-End Badge */}
                    {project.isEndToEnd && (
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-end-to-end text-end-to-end-foreground rounded-full shadow-lg">
                          <Layers className="w-3.5 h-3.5" />
                          End-to-End
                        </span>
                      </div>
                    )}
                    
                    {/* Tech chips on image - show first 3 only */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs font-medium bg-muted/80 text-muted-foreground rounded backdrop-blur-sm">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    {/* Store/GitHub links */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.links.map((link, linkIndex) => {
                        const icon = getLinkIcon(link);
                        if (!icon) return null;
                        return (
                          <span
                            key={linkIndex}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                          >
                            {icon}
                            {getLinkLabel(link)}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </SafeLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
