import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Linkedin, Phone, Github, ExternalLink } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  email: <Mail className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  phone: <Phone className="w-5 h-5" />,
  github: <Github className="w-5 h-5" />,
};

const ContactSection = () => {
  const { contactInfo, personalInfo } = portfolioData;

  const getHref = (item: typeof contactInfo[0]) => {
    if (item.linkOrPhone.startsWith("mailto:") || item.linkOrPhone.startsWith("http")) {
      return item.linkOrPhone;
    }
    if (item.name.toLowerCase() === "phone") {
      return `tel:${item.linkOrPhone}`;
    }
    return item.linkOrPhone;
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-8 md:p-12"
          >
            <div className="text-center mb-10">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-30" />
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="relative w-20 h-20 rounded-full object-cover border-2 border-primary/30"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-1">{personalInfo.name}</h3>
              <p className="text-muted-foreground">{personalInfo.profession}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={getHref(item)}
                  target={item.linkOrPhone.startsWith("http") ? "_blank" : undefined}
                  rel={item.linkOrPhone.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {iconMap[item.logoUrl] || <ExternalLink className="w-5 h-5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground truncate">
                      {item.linkOrPhone.replace("mailto:", "").replace("tel:", "")}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
