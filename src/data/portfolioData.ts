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
    description: "Flutter Developer with 5+ years of experience in Clean Architecture, BLoC, and advanced practices like CI/CD, Flutter Desktop (Windows/macOS), and Firebase Distribution. Built my projects with scalable, maintainable code. Quick to learn new tech independently, with a passion for creating high-quality, production-ready app"
  },
  cvUrl: "https://drive.google.com/uc?export=download&id=1egn3jbA1awqWaPWCirXaJlSccTfkvjav",
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
      linkOrPhone: "https://www.linkedin.com/in/mazen2610"
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
      linkOrPhone: "https://github.com/mazen261096"
    }
  ],
  experience: [
    {
      id: "exp-1",
      companyName: "Soul and Body",
      logoUrl: "https://drive.google.com/thumbnail?id=180m-PCXZkEis6fxpHjR0B2bKC3-xfvPF&sz=w200",
      role: "Senior Flutter Developer",
      description: "Senior Flutter Developer delivering production SaaS apps end-to-end (design → APIs → stores). Built and scaled clinic & marketplace products with real-world deployment constraints. Ownership of architecture, releases, testing, and delivery.",
      startDate: "2024-11-01",
      endDate: "Present"
    },
    {
      id: "exp-2",
      companyName: "Depo Web",
      logoUrl: "https://drive.google.com/thumbnail?id=1hgOZwh5DTb4zaKtiVv00oAk1_yrMWvV5&sz=w200",
      role: "Mid-Level Flutter Developer",
      description: "Developed Talabat-like food delivery app using BLoC & Clean Architecture. Implemented optimized APIs, real-time order tracking, and improved UI/UX performance across multiple screen sizes.",
      startDate: "2024-04-01",
      endDate: "2024-10-31"
    },
    {
      id: "exp-3",
      companyName: "Elgamal Cars",
      logoUrl: "https://drive.google.com/thumbnail?id=12ppC5vNVzzp3bMRGC_N5OFmexYWNrzYt&sz=w200",
      role: "Founder & Software Developer",
      description: "Built a desktop car inventory system with advanced filtering & pricing logic, Excel integration, automated PDF generation and social-media / client communication integration.",
      startDate: "2023-04-01",
      endDate: "2024-03-31"
    },
    {
      id: "exp-4",
      companyName: "Future of Egypt (Army Forces)",
      logoUrl: "https://drive.google.com/thumbnail?id=1kAq54XFMr3sA1HnX7ypzU2vsNoCzssnz&sz=w200",
      role: "Junior Flutter Developer",
      description: "Developed a secure real-time communication app (WhatsApp-like). Built responsive, high-performance UI across devices and integrated Firebase & .NET APIs for realtime backend.",
      startDate: "2022-03-01",
      endDate: "2023-03-31"
    },
    {
      id: "exp-5",
      companyName: "Sevenstili Designs (Freelance)",
      logoUrl: "https://drive.google.com/thumbnail?id=1paLKuhBpNMseyq8sERC-d0wbEvAwm3Oy&sz=w200",
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
        "https://drive.google.com/thumbnail?id=1Iu42qRHaApsd8cajEe6R2HpAZVl2GONi&sz=w1200",
        "https://drive.google.com/thumbnail?id=1w444xnAnzlLk_rgZg9ERiiQS3B00wEkj&sz=w1200",
        "https://drive.google.com/thumbnail?id=1JZ96jE_rZtMhhfy9TBqM6rJHrPOitOq0&sz=w1200"
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
      description: "Full-featured marketplace for buying & selling across categories. Features: advanced filtering, real-time tracking, vendor ratings, chat and performant responsive UI. Live on both stores.",
      technologies: ["Flutter", "Dart", "MVVM", "Cubit", "FCM", "REST (Dio)", "Realtime", "Filtering System"],
      links: [
        "https://play.google.com/store/apps/details?id=com.soulnbody.masssooq",
        "https://apps.apple.com/eg/app/id6749491273"
      ],
      images: [
        "https://drive.google.com/thumbnail?id=11SWAxhBj1WwxhfQL27DmK-RlOv1rmusu&sz=w1200",
        "https://drive.google.com/thumbnail?id=1bCSZ3qbqjG9tPSr0NAL3w9KwYsQpCoXU&sz=w1200",
        "https://drive.google.com/thumbnail?id=1HZiAyyXDZECBxsIfw9jh9RMryxsDSm_U&sz=w1200"
      ],
      isEndToEnd: true
    },
    {
      id: "proj-soom",
      name: "Soom – Marketplace App (White-Label)",
      description: "White-label variant of the Mass Sooq marketplace with a distinct brand identity. Same powerful features — advanced filtering, real-time tracking, vendor ratings and chat — under a different brand. Live on both stores.",
      technologies: ["Flutter", "Dart", "MVVM", "Cubit", "FCM", "REST (Dio)", "Realtime", "White-Label Architecture"],
      links: [
        "https://play.google.com/store/apps/details?id=com.soulnbody.soom",
        "https://apps.apple.com/us/app/id6753927269"
      ],
      images: [
        "https://drive.google.com/thumbnail?id=13zG-qJKv3IyHN7F1opoa0VAUgC0Z3Uyt&sz=w1200",
        "https://drive.google.com/thumbnail?id=1J1kh_7JVTTc5-B1uHai_xmmAJ7MDFN8B&sz=w1200",
        "https://drive.google.com/thumbnail?id=1fnH6y5vRNH04V8tIwCTnaMogzjjLzTfG&sz=w1200"
      ],
      isEndToEnd: true
    },
    {
      id: "proj-delivendor",
      name: "Delivendor – Delivery Base Product",
      description: "A white-label delivery platform built as a base product for DepoWeb. Features real-time order tracking, vendor management, advanced filtering, route optimization with Google Maps, payment integration and full e-commerce flows. Designed as a scalable foundation for multiple delivery verticals.",
      technologies: ["Flutter", "Dart", "BLoC", "Clean Architecture", "REST API", "Google Maps", "Stripe", "Push Notifications", "Animations"],
      links: [],
      images: [
        "https://drive.google.com/thumbnail?id=13hvBJlDGSyk5xmk9H8abWJKDa3oCuCEH&sz=w1200",
        "https://drive.google.com/thumbnail?id=1gBRoKWfz0xJACB_w9X3qte1XqqghyU23&sz=w1200",
        "https://drive.google.com/thumbnail?id=1nPHy_hnai0TNGdzManjbRKh3ZLzRx6Np&sz=w1200"
      ],
      isEndToEnd: false
    },
    {
      id: "proj-elgamal-cars",
      name: "Elgamal Cars – Desktop Inventory App",
      description: "Desktop app (Windows/macOS) for car inventory management with advanced filtering, dynamic pricing algorithm, Excel import/export and automated PDF reports. Integrated social sharing for client communication.",
      technologies: ["Flutter (Desktop)", "Dart", "Cubit", "Excel Integration", "PDF Generation", "Desktop Packaging"],
      links: [],
      images: [
        "https://drive.google.com/thumbnail?id=1ZE_iCBS5G979cnQ8teAgwxd3k2dGMO7D&sz=w1200",
        "https://drive.google.com/thumbnail?id=1OcvYRki1s5PQM9WH_4Q5G3U_V9wPOnDe&sz=w1200",
        "https://drive.google.com/thumbnail?id=1eNuHb4-GuO_p_PUIzV5qfvoeKJznnXU9&sz=w1200",
        "https://drive.google.com/thumbnail?id=1JyKWaQeJ-T6e732bn9yubNxbUOl-6Qtf&sz=w1200"
      ],
      isEndToEnd: true
    },
    {
      id: "proj-sevenstili",
      name: "Sevenstili Designs – Financial Management App",
      description: "Financial management app: multi-wallets, deposits/withdrawals, transaction logs, invoices, real-time notifications and role-based access control. Built with Firebase realtime features and PDF exports.",
      technologies: ["Flutter", "Dart", "Firebase (Auth, Firestore, FCM)", "Cubit", "PDF Generation", "Realtime Notifications", "Role-Based Access"],
      links: [],
      images: [
        "https://drive.google.com/thumbnail?id=1hy8DVTGqifJvJ8pRisR4Lo6DL4qRV1zU&sz=w1200",
        "https://drive.google.com/thumbnail?id=1gYstgSj8y9XMNskSpM7gAaviqOVN-q93&sz=w1200",
        "https://drive.google.com/thumbnail?id=1P9CecdL_wOTrDVChdPpDTnRrhnkUk5iw&sz=w1200",
        "https://drive.google.com/thumbnail?id=1RQaOXNu0hfA9b8xDvbbzjPCH7Kxh6CwL&sz=w1200"
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
