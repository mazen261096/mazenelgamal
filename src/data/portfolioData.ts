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
    name: "Mazen Elgamal",
    profession: "Flutter Developer",
    profileImage: "/profile-photo.jpg",
    description: "Flutter Developer with 3+ years experience building scalable, production-ready apps using Clean Architecture, BLoC/Cubit, MVVM and modern CI/CD pipelines. Experienced with mobile (Android/iOS) and desktop (Windows/macOS) targets, Firebase, Supabase and end-to-end project delivery. Quick learner, strong ownership of releases, testing and app architecture."
  },
  cvUrl: "/Mazen-Elgamal-CV.pdf",
  contactInfo: [
    {
      id: "1",
      name: "Email",
      logoUrl: "email",
      linkOrPhone: "mailto:Mazen261096@gmail.com"
    },
    {
      id: "2",
      name: "LinkedIn",
      logoUrl: "linkedin",
      linkOrPhone: "https://linkedin.com/in/your-linkedin"
    },
    {
      id: "3",
      name: "Phone",
      logoUrl: "phone",
      linkOrPhone: "+20 1288833353"
    },
    {
      id: "4",
      name: "GitHub",
      logoUrl: "github",
      linkOrPhone: "https://github.com/your-github"
    }
  ],
  experience: [
    {
      id: "exp-1",
      companyName: "Soul and Body",
      logoUrl: "/logos/soul-and-body.png",
      role: "Senior Flutter Developer",
      description: "Senior Flutter Developer delivering production SaaS apps end-to-end (design → APIs → stores). Built and scaled clinic & marketplace products with real-world deployment constraints. Ownership of architecture, releases, testing, and delivery.",
      startDate: "2024-11-01",
      endDate: "Present"
    },
    {
      id: "exp-2",
      companyName: "Depo Web",
      logoUrl: "/logos/depo-web.png",
      role: "Mid-Level Flutter Developer",
      description: "Developed Talabat-like food delivery app using BLoC & Clean Architecture. Implemented optimized APIs, real-time order tracking, and improved UI/UX performance across multiple screen sizes.",
      startDate: "2024-04-01",
      endDate: "2024-10-31"
    },
    {
      id: "exp-3",
      companyName: "Elgamal Cars",
      logoUrl: "/logos/elgamal-cars.png",
      role: "Founder & Software Developer",
      description: "Built a desktop car inventory system with advanced filtering & pricing logic, Excel integration, automated PDF generation and social-media / client communication integration.",
      startDate: "2023-04-01",
      endDate: "2024-03-31"
    },
    {
      id: "exp-4",
      companyName: "Future of Egypt (Army Forces)",
      logoUrl: "/logos/army-forces.png",
      role: "Junior Flutter Developer",
      description: "Developed a secure real-time communication app (WhatsApp-like). Built responsive, high-performance UI across devices and integrated Firebase & .NET APIs for realtime backend.",
      startDate: "2022-03-01",
      endDate: "2023-03-31"
    },
    {
      id: "exp-5",
      companyName: "Sevenstili Designs (Freelance)",
      logoUrl: "/logos/sevenstili.png",
      role: "Flutter Developer (Freelance)",
      description: "Developed a financial management mobile app with real-time transactions. Integrated Firebase Auth, Notifications, Realtime updates and multi-role access control for sensitive financial data.",
      startDate: "2021-10-01",
      endDate: "2022-02-28"
    }
  ],
  projects: [
    {
      id: "proj-curiouszee",
      name: "CuriousZee – Anonymous Social Platform",
      description: "A full-stack social platform for anonymous Q&A, map-based content discovery, private messaging and real-time interactions. Built end-to-end from scratch: Flutter mobile app, responsive web app, Supabase backend, real-time systems (MQTT), cloud infrastructure with cost optimization. Live on Google Play, iOS under review.",
      technologies: ["Flutter", "Dart", "Supabase", "MQTT", "Firebase FCM", "Cloudflare R2", "Oracle VM", "System Design", "REST APIs", "BLoC/Cubit"],
      links: [
        "https://play.google.com/store/apps/details?id=com.curiouszee.curiouszee",
        "https://www.curiouszee.com"
      ],
      images: [
        "https://drive.google.com/thumbnail?id=1gMBLhoEV8NhmoqOexbvBucLpfQe1c0pL&sz=w1200",
        "https://drive.google.com/thumbnail?id=1ThYuHdjO1WFg0u4OjcPyQEj_lE75urnr&sz=w1200",
        "https://drive.google.com/thumbnail?id=1LkZ3Ed5kFxrZTEA4VZ9DKPaGjSdw3hjY&sz=w1200"
      ],
      isEndToEnd: true
    },
    {
      id: "proj-mwakibun",
      name: "Mwakibun Doctor – Clinic Management SaaS",
      description: "Doctor-facing SaaS app for clinic management: schedules, room & bed bookings, patient records, prescriptions and attachments. Designed for multi-department clinics with real-time booking workflows.",
      technologies: ["Flutter", "Dart", "MVVM", "Cubit", "REST (Dio)", "Firebase (Auth, Firestore, FCM)", "Realtime", "PDF Generation", "Cloud Storage"],
      links: [
        "https://play.google.com/store/apps/details?id=com.mwakibun.mwakibun",
        "https://testflight.apple.com/join/XAN2RmS4"
      ],
      images: [
        "https://drive.google.com/thumbnail?id=1AxQCpbF8TnTr09c3AxqSbRtIuVOpnUmt&sz=w1200",
        "https://drive.google.com/thumbnail?id=15n7ro_tRSolQ2cgFqeQirVbVQfyHY0NB&sz=w1200",
        "https://drive.google.com/thumbnail?id=1PQ5kG5h6kcsBMMkmTlX1iW_v3Vmc0ABL&sz=w1200",
        "https://drive.google.com/thumbnail?id=1NHW03utjIMI7YcWx6ACkdTgBjr7awaRZ&sz=w1200"
      ],
      isEndToEnd: true
    },
    {
      id: "proj-mwakibun-patient",
      name: "Mwakibun Patient – Patient Booking App",
      description: "Patient-facing companion app for the Mwakibun platform: browse clinics, book appointments, view prescriptions, track medical history and receive real-time notifications for upcoming visits.",
      technologies: ["Flutter", "Dart", "MVVM", "Cubit", "REST (Dio)", "Firebase (Auth, FCM)", "Realtime", "Cloud Storage"],
      links: [
        "https://play.google.com/store/apps/details?id=com.mwakibun.mwakibun_patient"
      ],
      images: [
        "https://drive.google.com/thumbnail?id=1Qhcs13yS5Go6M3_hvu0S720WDgslmeEq&sz=w1200",
        "https://drive.google.com/thumbnail?id=1ucvVSH8yp_bLuv0tMZnZFOH1N8-CtXlo&sz=w1200",
        "https://drive.google.com/thumbnail?id=1h-UpOmCqdldYH7pliMoYUrf6NYKJe2RB&sz=w1200",
        "https://drive.google.com/thumbnail?id=12JdA52zeLS2r-qLFDDH12XkSAFPhfBZG&sz=w1200"
      ],
      isEndToEnd: true
    },
    {
      id: "proj-sbhr",
      name: "SB Hr – Employee Attendance & HR App",
      description: "Cross-platform HR app for attendance, leave requests, break tracking and working-hours calculation. I handled iOS support and external TestFlight deployment for company-wide testing.",
      technologies: ["Flutter", "Dart", "REST API", "Firebase", "CI/CD (TestFlight)", "MVVM", "Cubit"],
      links: [
        "https://play.google.com/store/apps/details?id=com.geo.sb_hr",
        "https://testflight.apple.com/join/6jA1nsmm"
      ],
      images: [
        "https://drive.google.com/thumbnail?id=1cqrQhfo3zz7jDDKzNdlOj0mmj94eiv5i&sz=w1200",
        "https://drive.google.com/thumbnail?id=1FYNSbsM70QC7UsJii9nSJnQtN6x7BYc3&sz=w1200",
        "https://drive.google.com/thumbnail?id=1JokzZR3TBX0TaTNQ7kS31ZzW38pe2hIG&sz=w1200"
      ],
      isEndToEnd: false
    },
    {
      id: "proj-masssooq",
      name: "Mass Sooq – Marketplace Mobile App",
      description: "OpenSooq-like marketplace for buying & selling across categories. Features: advanced filtering, real-time tracking, vendor ratings and performant responsive UI.",
      technologies: ["Flutter", "Dart", "MVVM", "Cubit", "FCM", "REST (Dio)", "Realtime", "Filtering System"],
      links: [
        "https://yourdomain.com/mass-sooq",
        "https://github.com/yourname/mass-sooq"
      ],
      images: [
        "/images/masssooq-1.png",
        "/images/masssooq-2.png"
      ],
      isEndToEnd: true
    },
    {
      id: "proj-delivendor",
      name: "Delivendor – Food & Grocery Delivery App",
      description: "Mobile app for food & grocery ordering with advanced filtering, real-time order tracking, vendor ratings and full e-commerce flows.",
      technologies: ["Flutter", "Dart", "BLoC", "Clean Architecture", "REST API", "Google Maps", "Stripe", "Push Notifications", "Animations"],
      links: [
        "https://yourdomain.com/delivendor",
        "https://github.com/yourname/delivendor"
      ],
      images: [
        "/images/delivendor-1.png",
        "/images/delivendor-2.png"
      ],
      isEndToEnd: false
    },
    {
      id: "proj-elgamal-cars",
      name: "Elgamal Cars – Desktop Inventory App",
      description: "Desktop app (Windows/macOS) for car inventory management with advanced filtering, dynamic pricing algorithm, Excel import/export and automated PDF reports. Integrated social sharing for client communication.",
      technologies: ["Flutter (Desktop)", "Dart", "Cubit", "Excel Integration", "PDF Generation", "Desktop Packaging"],
      links: [
        "https://yourdomain.com/elgamal-cars"
      ],
      images: [
        "/images/elgamal-1.png",
        "/images/elgamal-2.png"
      ],
      isEndToEnd: true
    },
    {
      id: "proj-sevenstili",
      name: "Sevenstili Designs – Financial Management App",
      description: "Financial management app: multi-wallets, deposits/withdrawals, transaction logs, invoices, real-time notifications and role-based access control. Built with Firebase realtime features and PDF exports.",
      technologies: ["Flutter", "Dart", "Firebase (Auth, Firestore, FCM)", "Cubit", "PDF Generation", "Realtime Notifications", "Role-Based Access"],
      links: [
        "https://yourdomain.com/sevenstili",
        "https://github.com/yourname/sevenstili"
      ],
      images: [
        "/images/sevenstili-1.png",
        "/images/sevenstili-2.png"
      ],
      isEndToEnd: true
    }
  ],
  skills: [
    // Platforms
    { id: "s-1", name: "Flutter", category: "Platforms" },
    { id: "s-2", name: "Dart", category: "Platforms" },
    { id: "s-3", name: "Android", category: "Platforms" },
    { id: "s-4", name: "iOS", category: "Platforms" },
    { id: "s-5", name: "Windows & macOS (Desktop)", category: "Platforms" },

    // Architecture & Patterns
    { id: "s-6", name: "Clean Architecture", category: "Architecture & Patterns" },
    { id: "s-7", name: "MVVM", category: "Architecture & Patterns" },
    { id: "s-8", name: "SOLID Principles", category: "Architecture & Patterns" },
    { id: "s-9", name: "BLoC / Cubit", category: "Architecture & Patterns" },
    { id: "s-10", name: "Riverpod", category: "Architecture & Patterns" },

    // Backend & APIs
    { id: "s-11", name: "REST APIs (Dio)", category: "Backend & Integrations" },
    { id: "s-12", name: "Firebase (Auth, Firestore, FCM)", category: "Backend & Integrations" },
    { id: "s-13", name: "Supabase", category: "Backend & Integrations" },
    { id: "s-14", name: "Google Maps", category: "Backend & Integrations" },
    { id: "s-15", name: "Stripe Payments", category: "Backend & Integrations" },

    // DevOps & Tools
    { id: "s-16", name: "CI/CD (GitHub Actions, Fastlane)", category: "DevOps & Tools" },
    { id: "s-17", name: "Firebase App Distribution & TestFlight", category: "DevOps & Tools" },
    { id: "s-18", name: "Unit & Integration Testing", category: "DevOps & Tools" },
    { id: "s-19", name: "Figma", category: "DevOps & Tools" },
    { id: "s-20", name: "Agile / Jira", category: "DevOps & Tools" }
  ]
};
