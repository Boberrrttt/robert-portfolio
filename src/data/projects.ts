export type Project = {
  image: string
  title: string
  description: string
  summary: string
  stack?: string[]
  url?: string
  category: "web" | "mobile"
  outcome?: string
  problem?: string
  approach?: string
}

export const featuredProject: Project = {
  image: "/assets/parkease-img.png",
  title: "Parkease",
  description: "A Parking Reservation Application using Flutter. This project was a finalist during the Xinyx Design Thinking Competition",
  summary: "Parkease helps students reserve campus parking spots instead of circling lots. Built as a cross-platform Flutter app with real-time availability and a streamlined booking flow.",
  outcome: "Finalist — Xinyx Design Thinking Competition",
  problem: "Campus parking was hard to manage — students needed a simple way to reserve spots instead of circling lots.",
  approach: "Built a Flutter app for parking reservations with a clean booking flow and real-time availability.",
  stack: ["Flutter", "Dart", "Firebase"],
  category: "mobile",
}

export const webProjects: Project[] = [
  {
    image: "/assets/eventure.png",
    title: "Eventure",
    description: "Campus event platform — flexible creation, registration, and organizer dashboards without spreadsheets.",
    summary: "Eventure is an event management platform built with React and Node.js. Organizers can create events, manage registrations, and track activity through a dynamic dashboard — replacing manual spreadsheets for campus events.",
    stack: ["React", "Node.js"],
    category: "web",
  },
  {
    image: "/assets/Screenshot 2025-06-08 193309.png",
    title: "Forest Monitoring",
    description: "ESP32-CAM system for real-time forest sound and video feedback — microprocessors final project.",
    summary: "Final project for the Microprocessors course. An ESP32-CAM captures live video and audio from forest environments, streaming feedback in real time for environmental monitoring and alert use cases.",
    stack: ["ESP32-CAM", "C++", "Arduino"],
    category: "web",
  },
  {
    image: "/assets/Screenshot 2025-06-08 193650.png",
    title: "Predictive Maintenance",
    description: "AI model predicts machine failure early — React frontend, Flask backend, trained on sensor data.",
    summary: "Built with React and Flask, this app uses a trained machine learning model to predict the likelihood of machine failure based on sensor data — helping reduce unplanned downtime before equipment breaks down.",
    stack: ["React", "Flask", "Python"],
    category: "web",
  },
  {
    image: "/assets/Screenshot 2025-06-08 194133.png",
    title: "Thesis Routing System",
    description: "Secure thesis evaluation workflow for advisers and panel reviewers across the department.",
    summary: "Streamlines thesis paper evaluation for academic advisers and panel reviewers. Provides secure role-based access so each reviewer can assess submissions without losing track of routing or evaluation status.",
    stack: ["React", "Node.js"],
    category: "web",
  },
  {
    image: "/assets/Screenshot 2025-06-08 194451.png",
    title: "WIS_CE",
    description: "Warehouse inventory with real-time tracking and automated stock management.",
    summary: "A customized inventory management solution for warehouse operations. Tracks stock levels in real time and automates restock alerts — reducing manual counting and improving order fulfillment accuracy.",
    stack: ["React", "Node.js", "MongoDB"],
    category: "web",
  },
  {
    image: "/assets/Screenshot 2025-06-09 220227.png",
    title: "CpExpress",
    description: "Community platform for USTP Computer Engineering students — expression and collaboration in one place.",
    summary: "A social platform for USTP Computer Engineering students to share ideas, collaborate on projects, and stay connected within the department — a dedicated space for expression beyond generic social media.",
    stack: ["React", "Node.js"],
    url: "https://express.icpepse-ustp.org/",
    category: "web",
  },
  {
    image: "/assets/Screenshot 2025-06-10 120233.png",
    title: "Valcardi",
    description: "Anonymous Valentine's love letter platform with secure delivery and a minimal interface.",
    summary: "An anonymous Valentine's Day love letter platform where users send messages without revealing their identity. Focused on secure delivery and a clean, distraction-free interface for a seasonal campus experience.",
    stack: ["React", "Next.js"],
    url: "https://valcardi.vercel.app/",
    category: "web",
  },
]

export const mobileProjects: Project[] = [
  {
    image: "/assets/attendance-tracker.png",
    title: "ICpEP Attendance Tracker",
    description: "Real-time attendance for USTP CPE students with automated check-ins and reporting.",
    summary: "Real-time attendance tracking for USTP Computer Engineering students. Supports automated check-ins and generates reports for faculty — replacing paper sign-in sheets with a mobile-first workflow.",
    stack: ["Flutter", "Firebase"],
    category: "mobile",
  },
  {
    image: "/assets/timpla.jpg",
    title: "Timpla App",
    description: "Mealkit ordering with browse, filter, live pricing, and smooth checkout — React Native and Node.js.",
    summary: "A mealkit ordering app built with React Native and Node.js. Users browse and filter meal kits, see real-time price calculations, and complete checkout in a smooth end-to-end mobile experience.",
    stack: ["React Native", "Node.js"],
    category: "mobile",
  },
]

export const allProjects: Project[] = [...webProjects, ...mobileProjects]
