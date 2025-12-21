import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { SafeLink } from "@/components/SafeLink";
import { ArrowUpRight, Github } from "lucide-react";

// Store icons as SVG components
const PlayStoreIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181-.085-.319-.26-.319-.482V2.296c0-.222.138-.397.319-.482zm10.831 9.469l2.416-2.416 6.168 3.561c.479.277.479.939 0 1.216l-6.168 3.561-2.416-2.416L17.946 12l-3.506-2.717zM4.275.85l9.948 9.948L4.275.85zm0 22.3L14.223 13.2 4.275 23.15z"/>
  </svg>
);

const AppStoreIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const getLinkIcon = (link: string) => {
  if (link.includes("github.com")) return <Github className="w-4 h-4" />;
  if (link.includes("play.google.com")) return <PlayStoreIcon />;
  if (link.includes("apps.apple.com") || link.includes("apple.com")) return <AppStoreIcon />;
  return null;
};

const getLinkLabel = (link: string) => {
  if (link.includes("github.com")) return "GitHub";
  if (link.includes("play.google.com")) return "Play Store";
  if (link.includes("apps.apple.com") || link.includes("apple.com")) return "App Store";
  return "Link";
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
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
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
