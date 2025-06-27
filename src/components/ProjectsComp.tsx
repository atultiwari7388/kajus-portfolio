"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Project data array
const projects = [
  {
    id: 1,
    title: "Journey Junction - Travel Social Platform",
    description:
      "A travel storytelling platform where users can share their journey experiences through blogs and stories. Includes social features like user profiles, follow system, and real-time updates across web and app.",
    icon: "🧳",
    tags: [
      "Next.js",
      "Flutter",
      "Firebase",
      "Cloud Functions",
      "Push Notifications",
    ],
    gradient: "from-primary to-secondary",
    borderColor: "primary",
  },
  {
    id: 2,
    title: "Rozgaar - Resume Upload Portal",
    description:
      "A basic yet functional job application platform where users can upload their resumes and admins can download them for recruitment purposes. Focused on simplicity and efficient resume management.",
    icon: "📄",
    tags: ["Next.js", "Firebase"],
    gradient: "from-secondary to-accent",
    borderColor: "secondary",
  },
  {
    id: 3,
    title: "Family Alert - Emergency Insurance Network",
    description:
      "A life-saving voice-call solution for accident victims. Users register, buy vehicle insurance, and create a 3-member emergency group. A QR code is generated and placed on the vehicle. In emergencies, anyone can scan the code to call group members directly.",
    icon: "🚨",
    tags: [
      "Next.js",
      "ZegoCloud",
      "Firebase",
      "Cloud Functions",
      "Push Notifications",
    ],
    gradient: "from-accent to-primary",
    borderColor: "accent",
  },

  {
    id: 4,
    title: "RabbitServices - Fleet Management",
    description:
      "A comprehensive fleet management solution for truck maintenance and repairs. Includes real-time vehicle diagnostics, mechanic dispatch, and preventive maintenance scheduling.",
    icon: "🚛",
    tags: [
      "Flutter",
      "Firebase",
      "Next.js",
      "Cloud Functions",
      "Push Notifications",
      "Getx",
    ],
    gradient: "from-primary to-secondary",
    borderColor: "primary",
  },
  {
    id: 5,
    title: "WindayRoot",
    description: "",
    icon: "🏠",
    tags: ["Flutter", "Provider", "Firebase"],
    gradient: "from-primary to-secondary",
    borderColor: "primary",
  },
  {
    id: 6,
    title: "NearTake - Revolutionary Food Delivery",
    description:
      "A seamless food delivery ecosystem connecting users, restaurants, and delivery partners. Features real-time order tracking, delivery optimization, and integrated payment solutions.",
    icon: "🍽️",
    tags: [
      "Flutter",
      "Getx",
      "REST APIs",
      "Push Notifications",
      "Google Maps",
      "Payment Gateway",
    ],
    gradient: "from-secondary to-accent",
    borderColor: "secondary",
  },
  {
    id: 7,
    title: "TruthTaker - Digital News Platform",
    description:
      "A modern news platform revolutionizing local journalism with content curation, real-time analytics, and interactive community surveys. Supports multi-city content management.",
    icon: "📰",
    tags: [
      "Flutter",
      "Firebase",
      "Push Notifications",
      "Cloud Functions",
      "Analytics",
    ],
    gradient: "from-accent to-primary",
    borderColor: "accent",
  },
  {
    id: 8,
    title: "PikDop - Urban Mobility Solution",
    description:
      "An all-in-one urban transportation platform offering ride-hailing, parcel delivery, and auto services. Features dynamic pricing, route optimization, and real-time vehicle tracking.",
    icon: "🚗",
    tags: [
      "Flutter",
      "Firebase",
      "Push Notifications",
      "Getx",
      "Maps Integration",
    ],
    gradient: "from-primary to-secondary",
    borderColor: "primary",
  },
  {
    id: 9,
    title: "FoodOTG - Cloud Kitchen Platform",
    description:
      "A comprehensive cloud kitchen management system with integrated order processing, kitchen display systems, and delivery logistics. Supports multiple brands under one roof.",
    icon: "👨‍🍳",
    tags: ["Flutter", "Firebase", "Cloud Functions", "Real-time Analytics"],
    gradient: "from-secondary to-accent",
    borderColor: "secondary",
  },
  {
    id: 10,
    title: "QuickMart - Instant Grocery Delivery",
    description:
      "A lightning-fast grocery delivery platform promising delivery within 15 minutes. Features inventory management, dark store operations, and predictive stocking algorithms.",
    icon: "🛒",
    tags: ["Flutter", "Firebase", "Cloud Functions"],
    gradient: "from-accent to-primary",
    borderColor: "accent",
  },

  {
    id: 11,
    title: "TechBazaar - E-Commerce Platform",
    description:
      "A feature-rich electronics marketplace with AR product visualization, price comparison, and personalized recommendations powered by AI.",
    icon: "🛍️",
    tags: ["Next.js", "Firebase", "Stripe"],
    gradient: "from-secondary to-accent",
    borderColor: "secondary",
  },
  {
    id: 12,
    title: "OneShop - Hyperlocal Delivery",
    description:
      "An ultra-fast delivery platform connecting local stores with customers. Features real-time inventory sync, smart delivery routing, and automated dispatch system.",
    icon: "⚡",
    tags: ["React", "Node", "Express", "MongoDB", "Redis"],
    gradient: "from-accent to-primary",
    borderColor: "accent",
  },
  {
    id: 13,
    title: "Awiskar - EdTech Revolution",
    description:
      "An innovative education platform featuring interactive video lessons, real-time progress tracking, and AI-powered personalized learning paths.",
    icon: "🎓",
    tags: ["Flutter", "Firebase", "Video Streaming", "Analytics"],
    gradient: "from-primary to-secondary",
    borderColor: "primary",
  },
];

export default function ProjectsComp() {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Flutter", "Next.js", "Firebase", "Full Stack"];

  const filteredProjects =
    activeCategory === "All"
      ? projects.slice(0, visibleProjects)
      : projects
          .filter((project) =>
            project.tags.some((tag) =>
              tag.toLowerCase().includes(activeCategory.toLowerCase())
            )
          )
          .slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <section id="projects" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-blue-600 uppercase">
            My Work
          </span>
          <h2 className="text-4xl font-bold mt-2 text-gray-900 dark:text-white">
            Project Portfolio
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Selected projects showcasing my expertise in Flutter and Next.js
            development
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleProjects(6);
              }}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Header */}
              <div className={`h-3 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-2">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/5 dark:from-black/10 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Show More Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
