export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "basha-eshete-pension",
    title: "Basha Eshete Pension",
    category: "Full Stack Web Application",
    description:
      "A complete pension management system with a public website and private management platform for daily business operations.",
    image: "/projects/basha-eshete-pension/cover.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Framer Motion",
    ],
    features: [
      "Management dashboard",
      "Room management",
      "Customer management",
      "Sales management",
      "Reports",
      "Authentication",
      "Public website",
      "Internal management system",
    ],
    liveUrl: "https://bashaeshetepension.com",
    githubUrl: "https://github.com/mulukendaniel1/Bashaeshetepension",
  },

  {
    slug: "amanuel-ababu-export",
    title: "Amanuel Ababu Goat Meat Export",
    category: "Business Website",
    description:
      "A premium business website for an Ethiopian goat meat export company.",
    image: "/projects/amanuel-ababu-export/cover.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
    ],
    features: [
      "Product showcase",
      "Business information",
      "Contact system",
      "Responsive design",
      "Modern animations",
      "Product presentation",
    ],
    liveUrl: "https://amanuelababuexport.com",
  },

  {
    slug: "lucky-bingo",
    title: "Lucky Bingo Ethiopia",
    category: "Telegram Mini App",
    description:
      "A Telegram-based bingo platform with authentication, wallet functionality and real-time gameplay.",
    image: "/projects/lucky-bingo/cover.jpg",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
    ],
    features: [
      "Telegram integration",
      "User authentication",
      "Wallet system",
      "Real-time gameplay",
      "Admin management",
      "Bingo games",
    ],
    githubUrl: "https://github.com/mulukendaniel1/Lucky-Bingo-Ethiopia",
  },
];