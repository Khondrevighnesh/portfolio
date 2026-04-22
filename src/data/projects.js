import spotifyImg from "../assets/projects/spotify.png";
import bookstoreImg from "../assets/projects/bookstore.png";
import ecommerceImg from "../assets/projects/ecommerce.png";
import expenseImg from "../assets/projects/expense.png";

export const projects = [
  {
    title: "Full Stack Expense Tracker",
    description:
      "A complete full-stack expense management platform that helps users track daily expenses, manage budgets, analyze spending patterns, and generate financial reports. It includes role-based authentication, analytics dashboards, and secure expense approvals for efficient financial management.",
    image: expenseImg,
    tech: ["React", "Node.js", "MongoDB", "Express", "Redux", "Tailwind"],
    features: [
      "JWT authentication",
      "Role-based access",
      "Expense CRUD operations",
      "Budget management",
      "Category analytics",
      "Monthly reports",
      "Expense approvals",
      "Responsive dashboard",
    ],
    github: "https://github.com/Khondrevighnesh/SpendWise",
    live: "#",
  },

  {
    title: "Spotify Clone",
    description:
      "A Spotify-inspired full-stack music streaming platform with playlist management, music controls, role-based user management, and a modern admin dashboard for content administration. Built with scalable backend architecture and responsive frontend design.",
    image: spotifyImg,
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    features: [
      "User authentication",
      "Playlist management",
      "Music player controls",
      "Song categories",
      "Admin dashboard",
      "Content management",
      "Responsive UI design",
    ],
    github: "https://github.com/Khondrevighnesh",
    live: "#",
  },

  {
    title: "Book Store MERN App",
    description:
      "A full-stack MERN bookstore application for browsing, managing, and organizing books with secure authentication and a dedicated admin dashboard for inventory control. Includes book CRUD operations, category management, and responsive user interfaces.",
    image: bookstoreImg,
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    features: [
      "Firebase authentication",
      "Book CRUD operations",
      "Category management",
      "Admin dashboard",
      "Inventory management",
      "Responsive dashboard",
    ],
    github: "https://github.com/Khondrevighnesh",
    live: "#",
  },

  {
    title: "React E-Commerce App",
    description:
      "A modern e-commerce platform with product browsing, cart functionality, order flow, and a complete admin dashboard for product and order management. Designed for smooth shopping experiences with responsive layouts and scalable state management.",
    image: ecommerceImg,
    tech: ["React", "Redux", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
    features: [
      "Product listing",
      "Shopping cart",
      "Checkout flow",
      "Admin dashboard",
      "Product management",
      "Order management",
      "Redux state management",
    ],
    github: "https://github.com/Khondrevighnesh",
    live: "#",
  },

  {
    title: "React Pixabay Clone",
    description:
      "An image search platform inspired by Pixabay that allows users to search and browse images in real time using external APIs. Designed with responsive layouts and optimized for quick search performance.",
    image: null,
    tech: ["React", "API", "Tailwind CSS"],
    features: [
      "Real-time search",
      "API integration",
      "Responsive image gallery",
      "Fast loading interface",
    ],
    github: "https://github.com/Khondrevighnesh",
    live: "#",
  },
];