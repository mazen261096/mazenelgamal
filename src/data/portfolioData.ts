export interface ContactInfo {
  id: string;
  name: string;
  logoUrl: string;
  linkOrPhone: string;
}

export interface Experience {
  id: string;
  companyName: string;
  logoUrl: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  links: string[];
  images: string[];
}

export interface PersonalInfo {
  name: string;
  profession: string;
  profileImage: string;
  description: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo[];
  experience: Experience[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Your Name",
    profession: "Flutter Developer",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    description: "Passionate mobile developer crafting beautiful, performant applications with Flutter. Turning ideas into pixel-perfect experiences."
  },
  contactInfo: [
    {
      id: "1",
      name: "Email",
      logoUrl: "email",
      linkOrPhone: "mailto:your@email.com"
    },
    {
      id: "2",
      name: "LinkedIn",
      logoUrl: "linkedin",
      linkOrPhone: "https://linkedin.com/in/yourname"
    },
    {
      id: "3",
      name: "Phone",
      logoUrl: "phone",
      linkOrPhone: "+201234567890"
    },
    {
      id: "4",
      name: "GitHub",
      logoUrl: "github",
      linkOrPhone: "https://github.com/yourname"
    }
  ],
  experience: [
    {
      id: "1",
      companyName: "Tech Company",
      logoUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
      role: "Senior Flutter Developer",
      description: "Led mobile development team, built scalable Flutter applications with clean architecture, implemented CI/CD pipelines, and mentored junior developers.",
      startDate: "2022-01-01",
      endDate: "Present"
    },
    {
      id: "2",
      companyName: "Startup Inc",
      logoUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=100&h=100&fit=crop",
      role: "Flutter Developer",
      description: "Developed cross-platform mobile applications, integrated REST APIs, implemented state management with BLoC pattern.",
      startDate: "2020-06-01",
      endDate: "2021-12-31"
    }
  ],
  projects: [
    {
      id: "1",
      name: "E-Commerce App",
      description: "A full-featured e-commerce mobile application with payment integration, real-time notifications, and seamless user experience. Built with Flutter and Firebase backend.",
      technologies: ["Flutter", "Dart", "Firebase", "Stripe", "BLoC"],
      links: [
        "https://github.com/yourname/ecommerce-app",
        "https://play.google.com/store/apps/details?id=ecommerce"
      ],
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
      ]
    },
    {
      id: "2",
      name: "Fitness Tracker",
      description: "Health and fitness tracking application with workout plans, progress analytics, and social features. Integrated with wearable devices.",
      technologies: ["Flutter", "Dart", "Clean Architecture", "GraphQL"],
      links: [
        "https://github.com/yourname/fitness-tracker"
      ],
      images: [
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
      ]
    },
    {
      id: "3",
      name: "Task Management",
      description: "Collaborative task management tool with real-time sync, team workspaces, and intuitive drag-and-drop interface.",
      technologies: ["Flutter", "Dart", "Supabase", "Riverpod"],
      links: [
        "https://github.com/yourname/task-app",
        "https://apps.apple.com/app/task-management"
      ],
      images: [
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop"
      ]
    }
  ]
};
