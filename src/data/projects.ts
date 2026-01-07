import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  techStack: string[];
  features: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Mountain Dweller - Network Marketing Company",
    description: "A complete multi-vendor e-commerce solution with real-time inventory, payment processing, and admin analytics dashboard.",
    problem: "Client needed a scalable marketplace to handle 10,000+ daily transactions with seamless vendor management.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "AWS S3"],
    features: [
      "Multi-vendor marketplace with individual dashboards",
      "Real-time inventory sync across channels",
      "Stripe payment integration with subscriptions",
      "Advanced product filtering and search",
      "Order tracking and automated notifications"
    ],
    image: project1,
    liveUrl: "https://mountaindweller.online/",
    githubUrl: "https://github.com/Abdul123x",
    category: "E-Commerce"
  },
  {
    id: "2",
    title: "ARTRADERS – Distribution Management System",
    description: "A full-scale distribution management system designed to manage products, warehouses, retailers, orders, and deliveries from a single centralized platform.",
    problem: "The client was handling inventory, orders, and distributor records manually, causing stock mismatches, delayed deliveries, and zero visibility across warehouses.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Redis", "JWT"],
    features: [
      "Multi-warehouse inventory management",
      "Distributor, retailer, and supplier modules",
      "Order creation, tracking, and delivery status updates",
      "Low-stock alerts and automated restock reports",
      "Role-based access for admin, warehouse, and sales staff"
    ],
    image: project2,
    liveUrl: "https://artraders-kasur.shop/auth",
    githubUrl: "https://github.com/Abdul123x",
    category: "Distribution System"
  },

  {
    id: "3",
    title: "ShopSphere – Full-Stack E-Commerce Platform",
    description: "A production-ready e-commerce platform enabling customers to browse products, place orders, and make secure online payments, with a complete admin panel for business operations.",
    problem: "The business was relying on social media and manual order handling, leading to lost orders, payment confusion, and zero centralized product or customer management.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Cloudinary", "JWT"],
    features: [
      "Customer storefront with product search and filters",
      "Secure Stripe payment gateway integration",
      "Shopping cart, checkout, and order history",
      "Admin dashboard for products, orders, users, and revenue tracking",
      "Image upload, stock management, and order status updates"
    ],
    image: project3,
    liveUrl: "https://ecommerce-store-frontend-nine.vercel.app/",
    githubUrl: "https://github.com/Abdul123x",
    category: "E-Commerce"
  },
  {
    id: "4",
    title: "QuickBite – Online Food Ordering Website",
    description: "A responsive food ordering website that allows customers to browse menus, customize items, and place delivery orders through a lightweight order submission system.",
    problem: "The restaurant was taking orders manually on calls and WhatsApp, causing missed orders, wrong items, and no structured menu or pricing system.",
    techStack: ["React", "Tailwind CSS", "Firebase", "Stripe"],
    features: [
      "Dynamic menu with categories and item customization",
      "Cart system with quantity and price calculation",
      "Online order placement with customer details",
      "Stripe checkout for advance payments",
      "Mobile-first UI optimized for fast ordering"
    ],
    image: project4,
    liveUrl: "https://tomato23.netlify.app/",
    githubUrl: "https://github.com/Abdul123x",
    category: "Food Delivery"
  },

  // {
  //   id: "5",
  //   title: "ContentGenius AI Writer",
  //   description: "AI-powered content generation tool for marketers with SEO optimization and multi-platform publishing.",
  //   problem: "Marketing agency needed to scale content production 5x without increasing headcount.",
  //   techStack: ["React", "Python", "FastAPI", "PostgreSQL", "OpenAI", "Vercel"],
  //   features: [
  //     "AI article and blog generation",
  //     "SEO scoring and optimization",
  //     "Multi-language support",
  //     "Direct publishing to WordPress/Medium",
  //     "Content calendar and scheduling"
  //   ],
  //   image: "/projects/ai-tool.jpg",
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   category: "AI/ML"
  // },
  // {
  //   id: "6",
  //   title: "OpsManager Business Suite",
  //   description: "All-in-one business management system with CRM, invoicing, inventory, and team management modules.",
  //   problem: "SMB client needed to consolidate 5 different tools into one unified platform to reduce costs.",
  //   techStack: ["React", "Node.js", "Express", "PostgreSQL", "PDF-lib", "Twilio"],
  //   features: [
  //     "Customer relationship management",
  //     "Automated invoicing and payments",
  //     "Inventory and order management",
  //     "Employee time tracking",
  //     "Custom reporting and exports"
  //   ],
  //   image: "/projects/business.jpg",
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   category: "Business"
  // }
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc.",
    content: "Working with this developer was a game-changer for our startup. He delivered a complex e-commerce platform ahead of schedule and handled every technical challenge with expertise. Our sales increased 40% within the first month of launch.",
    avatar: "/avatars/sarah.jpg"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Product Manager, DataFlow",
    content: "Exceptional communication and technical skills. He understood our requirements perfectly and built a dashboard that exceeded expectations. The code quality is outstanding—clean, well-documented, and easy to maintain.",
    avatar: "/avatars/michael.jpg"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Founder, HR Solutions",
    content: "I've worked with many developers, but few match his level of professionalism and reliability. He not only built our job portal but also provided valuable insights that improved our entire hiring workflow.",
    avatar: "/avatars/emily.jpg"
  },
  {
    id: "4",
    name: "David Thompson",
    role: "CTO, CloudServe",
    content: "Hired him for a critical migration project and he delivered flawlessly. His deep understanding of both frontend and backend made the entire process seamless. Highly recommend for any complex full-stack work.",
    avatar: "/avatars/david.jpg"
  }
];

export const skills = {
  frontend: [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Redux / Zustand", level: 85 },
    { name: "React Query", level: 88 },
  ],
  backend: [
    { name: "Node.js / Express", level: 95 },
    { name: "REST APIs", level: 95 },
    { name: "GraphQL", level: 80 },
    { name: "Authentication / JWT", level: 92 },
    { name: "WebSockets", level: 85 },
  ],
  database: [
    { name: "MongoDB", level: 92 },
    { name: "PostgreSQL", level: 88 },
    { name: "Redis", level: 80 },
    { name: "Prisma / Mongoose", level: 90 },
  ],
  devops: [
    { name: "Git / GitHub", level: 95 },
    { name: "Docker", level: 82 },
    { name: "AWS / Vercel", level: 85 },
    { name: "CI/CD Pipelines", level: 80 },
  ],
};

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your business goals, target users, and technical requirements through detailed consultation."
  },
  {
    step: "02",
    title: "Planning",
    description: "Creating technical specifications, architecture diagrams, and project timeline with clear milestones."
  },
  {
    step: "03",
    title: "Development",
    description: "Building your solution with clean, scalable code and regular progress updates throughout the process."
  },
  {
    step: "04",
    title: "Testing",
    description: "Rigorous testing including unit tests, integration tests, and user acceptance testing."
  },
  {
    step: "05",
    title: "Deployment",
    description: "Launching your application with proper CI/CD setup, monitoring, and performance optimization."
  },
  {
    step: "06",
    title: "Support",
    description: "Ongoing maintenance, bug fixes, and feature enhancements to keep your application running smoothly."
  }
];
