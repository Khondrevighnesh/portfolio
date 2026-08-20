import spotifyImg from "../assets/projects/spotify.png";
import bookstoreImg from "../assets/projects/bookstore.png";
import ecommerceImg from "../assets/projects/ecommerce.png";
import expenseImg from "../assets/projects/expense.png";
import pixabayImg from "../assets/projects/pixabay.jpg";

export const projectCategories = ["All", "Full Stack", "Frontend", "API & Tools"];

export const projects = [
  {
    id: "expense-tracker",
    title: "Full Stack Expense Tracker",
    category: "Full Stack",
    badge: "Featured MERN Project",
    tagline: "Enterprise-grade financial tracker with analytics & multi-role budgets",
    description:
      "A complete full-stack expense management platform that helps users track daily expenses, manage budgets, analyze spending patterns, and generate financial reports. It includes role-based authentication, analytics dashboards, and secure expense approvals for efficient financial management.",
    image: expenseImg,
    tech: ["React", "Node.js", "MongoDB", "Express", "Redux Toolkit", "Tailwind CSS"],
    features: [
      "JWT Authentication & Role-Based Access Control",
      "Interactive Chart.js Spending Analytics",
      "Expense CRUD Operations with Receipt Tagging",
      "Monthly Budget Threshold Alerts",
      "Multi-category Spending Breakdowns",
      "Export Reports to CSV/PDF",
      "Secure Approval Workflows for Teams",
      "Mobile-optimized Responsive UI",
    ],
    architecture: "MERN Stack architecture with RESTful API endpoints, MongoDB aggregation pipelines for instant statistical calculations, and Redux Toolkit state slice for predictable store sync.",
    metrics: "Sub-100ms API response time, 100% test coverage on authentication endpoints.",
    github: "https://spend-wise-eight-pied.vercel.app",
    live: "https://spend-wise-eight-pied.vercel.app",
  },
  {
    id: "spotify-clone",
    title: "Spotify Clone",
    category: "Full Stack",
    badge: "Music Streaming",
    tagline: "High-fidelity audio streaming experience with playlist control & custom audio player",
    description:
      "A Spotify-inspired full-stack music streaming platform with playlist management, music controls, role-based user management, and a modern admin dashboard for content administration. Built with scalable backend architecture and responsive frontend design.",
    image: spotifyImg,
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Web Audio API"],
    features: [
      "JWT User & Admin Authentication",
      "Custom Audio Engine with Seek, Queue & Volume",
      "Dynamic Playlist Creation & Song Reordering",
      "Genre & Artist Filtering Engine",
      "Admin Dashboard for Track & Album Uploads",
      "Persistent Playback State across routes",
      "Glassmorphic Spotify Dark Aesthetic",
    ],
    architecture: "Node/Express backend with streaming buffer support, MongoDB collections for tracks, albums, and playlists, and HTML5 Web Audio API wrapper in React.",
    metrics: "Continuous audio playback with zero stutter, reactive UI transitions under 60fps.",
    github: "https://github.com/Khondrevighnesh",
    live: "https://github.com/Khondrevighnesh",
  },
  {
    id: "bookstore-mern",
    title: "Book Store MERN App",
    category: "Full Stack",
    badge: "E-Commerce / Inventory",
    tagline: "Interactive digital bookstore with inventory management & Firebase auth",
    description:
      "A full-stack MERN bookstore application for browsing, managing, and organizing books with secure authentication and a dedicated admin dashboard for inventory control. Includes book CRUD operations, category management, and responsive user interfaces.",
    image: bookstoreImg,
    tech: ["React", "Node.js", "MongoDB", "Express", "Firebase Auth", "Tailwind CSS"],
    features: [
      "Firebase OAuth & Email Authentication",
      "Full Inventory CRUD Operations for Books",
      "Category Filtering & Instant Text Search",
      "Dedicated Admin Inventory & Stock Matrix",
      "Shopping Cart & Order Simulation",
      "Responsive Glassmorphic UI with Micro-interactions",
    ],
    architecture: "Decoupled backend API with Express router, Mongoose ODM schemas with validation rules, and Firebase client SDK for rapid user verification.",
    metrics: "Instant catalog search with debounced indexing, seamless responsive layout.",
    github: "https://github.com/Khondrevighnesh",
    live: "https://bookstore-2i1v.vercel.app/",
  },
  {
    id: "ecommerce-app",
    title: "React E-Commerce App",
    category: "Frontend",
    badge: "Online Storefront",
    tagline: "High-conversion modern shopping experience with Redux state & checkout flows",
    description:
      "A modern e-commerce platform with product browsing, cart functionality, order flow, and a complete admin dashboard for product and order management. Designed for smooth shopping experiences with responsive layouts and scalable state management.",
    image: ecommerceImg,
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    features: [
      "Product Catalog with Multi-attribute Filters",
      "Persistent Cart & Quantity Management",
      "Multi-step Checkout Flow & Order Summary",
      "Admin Product Management & Stock Sync",
      "Order Tracking & Invoice Simulation",
      "Optimized Image Lazy Loading & Skeleton Placeholders",
    ],
    architecture: "Client-side state synchronization using Redux Toolkit with localStorage caching, integrated with REST API for backend persistence.",
    metrics: "95+ Google Lighthouse performance score, 0 cumulative layout shift.",
    github: "https://github.com/Khondrevighnesh",
    live: "https://github.com/Khondrevighnesh",
  },
  {
    id: "pixabay-clone",
    title: "Pixabay Pro Photo Gallery",
    category: "API & Tools",
    badge: "Media Engine",
    tagline: "Instant high-resolution photo explorer powered by REST API and masonry grids",
    description:
      "An image search platform inspired by Pixabay that allows users to search and browse millions of photos and illustrations in real time using external APIs. Designed with responsive layouts and optimized for quick search performance.",
    image: pixabayImg,
    tech: ["React", "REST API", "Tailwind CSS", "Framer Motion", "Lodash Debounce"],
    features: [
      "Real-time Search with Debounced API Queries",
      "Category Tag Filter Chips & Modal Previews",
      "Infinite Scroll Masonry Image Gallery",
      "High-Resolution Photo Downloads & Metadata",
      "Lightweight, Ultra-Fast Loading Interface",
    ],
    architecture: "Optimized asynchronous fetch pipelines with abort controllers, responsive CSS grid/masonry, and instant image preloading.",
    metrics: "Lightning-fast image rendering, zero unnecessary API over-fetching.",
    github: "https://github.com/Khondrevighnesh",
    live: "https://github.com/Khondrevighnesh",
  },
];