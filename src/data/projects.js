import punestayImg from "../assets/projects/punestay.jpg";
import expenseImg from "../assets/projects/expense.png";
import spotifyImg from "../assets/projects/spotify.png";
import bookstoreImg from "../assets/projects/bookstore.png";
import ecommerceImg from "../assets/projects/ecommerce.png";
import pixabayImg from "../assets/projects/pixabay.jpg";

export const projectCategories = ["All", "Full Stack", "Frontend", "API & Tools"];

export const projects = [
  {
    id: "punestay",
    title: "PuneStay — Full-Stack Housing & Flatmate Platform",
    category: "Full Stack",
    badge: "Featured Next.js 15 Project",
    tagline: "Zero-brokerage housing discovery & flatmate-matching platform for Pune tech corridors",
    description:
      "A modern full-stack housing discovery and flatmate-matching platform built for Pune’s tech hubs and university corridors (Hinjawadi, Baner, Wakad, Viman Nagar). It bridges the gap between property owners, students, and working professionals with zero brokerage, verified direct contact, interactive map directions, and an urgent zero-photo flatmate noticeboard.",
    image: punestayImg,
    tech: [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Auth.js (NextAuth v5)",
      "AWS S3",
      "Tailwind CSS",
      "OpenStreetMap",
      "Upstash Redis",
      "Neon Serverless",
      "Zod",
      "GitHub Actions",
    ],
    features: [
      "Edge Authentication & RBAC with NextAuth v5 & bcrypt (Seekers, Property Admins, Super Admins)",
      "Discovery & Search Catalog with dynamic filters for Hinjawadi, Baner, Wakad, Viman Nagar",
      "Interactive Free OpenStreetMap integration with coordinates & 1-click turn-by-turn navigation",
      "60-Second Zero-Photo Flatmate Noticeboard for urgent room openings",
      "Dietary & Lifestyle Roommate Matching (Veg/Non-Veg, Working Pro, Non-Smoker)",
      "Direct WhatsApp & Phone Connect with Anti-Scraping Contact Masking",
      "Property Admin Dashboard with Multi-Image AWS S3 Uploads & Live Lead Tracking",
      "Super Admin Governance Queue, Verification Overrides & Automated Security Audit Trail",
      "Upstash Redis Sliding-Window Rate Limiting & Neon Serverless Connection Pooling",
      "Automated CI/CD with GitHub Actions & Zero-Downtime Vercel Edge Deployments",
    ],
    modules: [
      {
        title: "Discovery & Search Catalog",
        badge: "Search Engine",
        description:
          "Filter across Pune neighborhoods (Hinjawadi, Baner, Wakad, Viman Nagar), price ranges, property types (PG, Apartment, Shared Flat, Independent Room), and furnishing options.",
        highlight:
          "100% free OpenStreetMap embedded on every property page with coordinates and 1-click turn-by-turn navigation.",
      },
      {
        title: "Zero-Photo Flatmate Finder (Noticeboard)",
        badge: "Urgent Matching",
        description:
          "60-Second Post Flow allows tenants with an empty room or bed to post an urgent opening without the friction of uploading photos.",
        highlight:
          "Captures dietary & lifestyle preferences (veg/non-veg, working professional, non-smoker, student-friendly), rent shares, move-in timelines, and 1-click WhatsApp connect with anti-scraping masking.",
      },
      {
        title: "Property Admin Dashboard",
        badge: "Owner Portal",
        description:
          "Direct property creation, editing, and listing management with multi-image direct upload pipelines to AWS S3.",
        highlight:
          "Live lead tracking and inquiry management dashboard for prospective tenants.",
      },
      {
        title: "Super Admin Governance & Moderation",
        badge: "Security & Control",
        description:
          "1-Click approve or reject queue for incoming property admin registrations and listings.",
        highlight:
          "Platform overrides, account suspensions, and automated security audit logs with edge middleware gating.",
      },
    ],
    designSystem: {
      name: "Earthy Modernism (inspired by Google Stitch AI)",
      typography: "Google Fonts Sora (Display & Headings) + Inter (Body & Inputs)",
      colors: [
        { name: "Warm Terracotta", hex: "#a3381f" },
        { name: "Deep Forest Green", hex: "#466550" },
        { name: "Warm Off-White Surfaces", hex: "#faf9f6" },
      ],
      responsiveness: "Mobile-first responsive layouts with sticky interaction bars for mobile viewports.",
    },
    techStackBreakdown: [
      {
        layer: "Frontend",
        stack: "Next.js 15 (App Router, Server & Client Components), React 19, Tailwind CSS, Material Symbols, Lucide Icons",
      },
      {
        layer: "Backend & APIs",
        stack: "Next.js Server Actions, Edge Route Handlers, Zod schema validation, TypeScript (Strict Mode)",
      },
      {
        layer: "Database & ORM",
        stack: "PostgreSQL (Neon Serverless with Connection Pooling), Prisma ORM (22 models/tables, indexes, relations)",
      },
      {
        layer: "Authentication",
        stack: "Auth.js (NextAuth v5) Credentials Provider, bcrypt hashing, Edge Middleware session gating",
      },
      {
        layer: "Storage & Cloud",
        stack: "AWS S3 SDK (@aws-sdk/client-s3) for direct image hosting and asset management",
      },
      {
        layer: "Maps & Geo",
        stack: "OpenStreetMap (OSM) dynamic embeds (zero API cost, zero key dependency)",
      },
      {
        layer: "Security & Rate Limiting",
        stack: "Upstash Redis sliding-window rate limiters, contact masking against web scrapers",
      },
      {
        layer: "DevOps & CI/CD",
        stack: "GitHub Actions (automated linting, typechecks, schema migration diffs), Vercel Edge hosting",
      },
    ],
    engineeringHighlights: [
      {
        question: "Why Next.js 15 Server Actions over traditional REST APIs?",
        answer:
          "Eliminates boilerplate API route maintenance; allows end-to-end TypeScript type safety between the form submission and the database.",
      },
      {
        question: "How did you prevent connection exhaustion on serverless PostgreSQL?",
        answer:
          "Implemented a PrismaClient global singleton and connected to Neon’s pooled connection endpoint (-pooler.neon.tech), preventing database crashes during traffic spikes.",
      },
      {
        question: "How did you solve the spam problem in flatmate noticeboards?",
        answer:
          "Implemented sliding-window rate limiters on inquiries and posts using @upstash/ratelimit, and shielded phone numbers behind session-authenticated clicks.",
      },
      {
        question: "Why replace Google Maps with OpenStreetMap?",
        answer:
          "Eliminated costly Google Maps API billing hurdles, delivering a 100% free, reliable embedded map solution with dynamic coordinates and directions.",
      },
    ],
    resumeBullets: [
      "Architected and developed a full-stack housing portal for students and working professionals in Pune featuring property discovery, multi-tiered role access, and a zero-photo urgent flatmate finder.",
      "Engineered robust Edge Authentication & RBAC with NextAuth v5 and bcrypt, enforcing role-based routing (Seekers, Property Admins, and Super Admins) and protecting against unauthorized access via Next.js Edge Middleware.",
      "Integrated AWS S3 & OpenStreetMap: Built secure media pipelines with @aws-sdk/client-s3 for property image uploads and embedded zero-cost, API-key-free OpenStreetMap for interactive geolocation and directions.",
      "Implemented Anti-Abuse & Performance Optimizations: Configured sliding-window rate limiting (Upstash Redis), phone number anti-scraping shields, and Prisma connection pooling on Neon Serverless PostgreSQL.",
      "Configured End-to-End CI/CD: Built automated GitHub Actions workflows for automated typechecking, linting, migration drift detection, and automated zero-downtime deployments to Vercel.",
    ],
    architecture:
      "Next.js 15 App Router architecture with Server Actions and Edge Route Handlers for type-safe mutations, Prisma ORM with connection pooling on Neon Serverless PostgreSQL, Edge Middleware session gating with Auth.js, and S3 direct upload pipelines.",
    metrics:
      "Sub-100ms Edge authentication, 100% free OSM mapping (0 API billing), Upstash Redis rate-limited against scrapers, zero-brokerage verified listings.",
    github: "https://github.com/Khondrevighnesh",
    live: "https://github.com/Khondrevighnesh",
  },
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
    resumeBullets: [
      "Engineered an enterprise-grade financial management platform with React, Express, Node.js, and MongoDB handling multi-user expense tracking and budget allocations.",
      "Implemented JWT role-based authentication and secure approval workflows for departmental budgets.",
      "Constructed interactive Chart.js spending analytics pipelines with MongoDB aggregation matrices.",
    ],
    architecture:
      "MERN Stack architecture with RESTful API endpoints, MongoDB aggregation pipelines for instant statistical calculations, and Redux Toolkit state slice for predictable store sync.",
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
    resumeBullets: [
      "Developed a full-stack Spotify music streaming platform with React, Node.js, Express, MongoDB, and HTML5 Web Audio API.",
      "Engineered persistent global audio playback engine with seek, queue, volume, and seamless route transitions.",
      "Built dedicated admin dashboard for music uploads, album metadata management, and role-based access control.",
    ],
    architecture:
      "Node/Express backend with streaming buffer support, MongoDB collections for tracks, albums, and playlists, and HTML5 Web Audio API wrapper in React.",
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
    resumeBullets: [
      "Architected full-stack bookstore platform with React, Node.js, Express, MongoDB, and Firebase Authentication.",
      "Created an inventory management dashboard with live stock updates, category taxonomies, and debounced search.",
      "Integrated Firebase OAuth for instant sign-in and responsive shopping cart state management.",
    ],
    architecture:
      "Decoupled backend API with Express router, Mongoose ODM schemas with validation rules, and Firebase client SDK for rapid user verification.",
    metrics: "Instant catalog search with debounced indexing, seamless responsive layout.",
    github: "https://github.com/Khondrevighnesh",
    live: "https://bookstore-2i1v.vercel.app/",
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
    resumeBullets: [
      "Built real-time media explorer utilizing asynchronous REST API fetching with AbortController cancellation.",
      "Created infinite scroll masonry layout with optimized photo preloading and debounced query execution.",
    ],
    architecture:
      "Optimized asynchronous fetch pipelines with abort controllers, responsive CSS grid/masonry, and instant image preloading.",
    metrics: "Lightning-fast image rendering, zero unnecessary API over-fetching.",
    github: "https://github.com/Khondrevighnesh",
    live: "https://github.com/Khondrevighnesh",
  },
];