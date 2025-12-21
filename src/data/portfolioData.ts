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
  isEndToEnd?: boolean; // Mark if project is end-to-end
}

export interface PersonalInfo {
  name: string;
  profession: string;
  profileImage: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  iconUrl?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo[];
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  cvUrl?: string;
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Mazen",
    profession: "Flutter Developer",
    profileImage: "/profile-photo.jpg",
    description: "Passionate mobile developer crafting beautiful, performant applications with Flutter. Turning ideas into pixel-perfect experiences."
  },
  cvUrl: "/cv.pdf", // Add your CV file to public folder
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
      technologies: ["Flutter", "Dart", "Firebase", "Stripe", "BLoC", "Clean Architecture", "Push Notifications"],
      links: [
        "https://github.com/yourname/ecommerce-app",
        "https://play.google.com/store/apps/details?id=ecommerce"
      ],
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
      ],
      isEndToEnd: true
    },
    {
      id: "2",
      name: "Fitness Tracker",
      description: "Health and fitness tracking application with workout plans, progress analytics, and social features. Integrated with wearable devices for real-time data sync.",
      technologies: ["Flutter", "Dart", "Clean Architecture", "GraphQL", "Riverpod", "Health Kit", "Google Fit"],
      links: [
        "https://github.com/yourname/fitness-tracker",
        "https://apps.apple.com/app/fitness-tracker"
      ],
      images: [
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
      ],
      isEndToEnd: false
    },
    {
      id: "3",
      name: "Task Management",
      description: "Collaborative task management tool with real-time sync, team workspaces, and intuitive drag-and-drop interface. Perfect for agile teams.",
      technologies: ["Flutter", "Dart", "Supabase", "Riverpod", "Animations", "Local Storage"],
      links: [
        "https://github.com/yourname/task-app",
        "https://apps.apple.com/app/task-management",
        "https://play.google.com/store/apps/details?id=taskapp"
      ],
      images: [
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop"
      ],
      isEndToEnd: true
    },
    {
      id: "4",
      name: "Food Delivery",
      description: "Complete food delivery solution with restaurant listings, real-time order tracking, payment integration, and driver app. Smooth animations throughout.",
      technologies: ["Flutter", "Dart", "Firebase", "Google Maps", "Stripe", "BLoC", "Push Notifications", "Animations"],
      links: [
        "https://github.com/yourname/food-delivery",
        "https://play.google.com/store/apps/details?id=fooddelivery"
      ],
      images: [
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop"
      ],
      isEndToEnd: true
    },
    {
      id: "5",
      name: "Social Media App",
      description: "Modern social media platform with stories, reels, real-time chat, and content discovery. Built with focus on performance and smooth scrolling.",
      technologies: ["Flutter", "Dart", "Firebase", "WebSocket", "GetX", "Video Player", "Image Picker", "Caching"],
      links: [
        "https://github.com/yourname/social-app"
      ],
      images: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop"
      ],
      isEndToEnd: false
    },
    {
      id: "6",
      name: "Banking App",
      description: "Secure digital banking application with biometric authentication, transaction history, money transfers, and bill payments. Focus on security and UX.",
      technologies: ["Flutter", "Dart", "Clean Architecture", "BLoC", "Biometrics", "Encryption", "Local Auth", "Charts"],
      links: [
        "https://github.com/yourname/banking-app",
        "https://apps.apple.com/app/banking-app",
        "https://play.google.com/store/apps/details?id=bankingapp"
      ],
      images: [
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
      ],
      isEndToEnd: true
    }
  ],
  skills: [
    // Mobile Development
    { id: "1", name: "Flutter", category: "Mobile" },
    { id: "2", name: "Dart", category: "Mobile" },
    { id: "3", name: "Android", category: "Mobile" },
    { id: "4", name: "iOS", category: "Mobile" },
    
    // State Management
    { id: "5", name: "BLoC", category: "State Management" },
    { id: "6", name: "Riverpod", category: "State Management" },
    { id: "7", name: "Provider", category: "State Management" },
    { id: "8", name: "GetX", category: "State Management" },
    
    // Backend & APIs
    { id: "9", name: "Firebase", category: "Backend" },
    { id: "10", name: "REST APIs", category: "Backend" },
    { id: "11", name: "GraphQL", category: "Backend" },
    { id: "12", name: "Supabase", category: "Backend" },
    
    // Tools & Others
    { id: "13", name: "Git", category: "Tools" },
    { id: "14", name: "CI/CD", category: "Tools" },
    { id: "15", name: "Clean Architecture", category: "Architecture" },
    { id: "16", name: "MVVM", category: "Architecture" },
    { id: "17", name: "Unit Testing", category: "Testing" },
    { id: "18", name: "Integration Testing", category: "Testing" },
    { id: "19", name: "Figma", category: "Design" },
    { id: "20", name: "Agile/Scrum", category: "Methodology" }
  ]
};
