"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Project data array remains the same
// Project data array
const projects = [
  {
    id: 1,
    title: "WindayRoot - Smart Home Automation",
    description:
      "A cutting-edge IoT platform enabling users to control their entire home ecosystem through an intuitive mobile interface. Features include smart device integration, energy monitoring, and AI-powered automation routines.",
    icon: "🏠",
    tags: ["Flutter", "Provider", "Firebase", "IoT", "Machine Learning"],
    gradient: "from-primary to-secondary",
    borderColor: "primary",
  },
  {
    id: 2,
    title: "NearTake - Revolutionary Food Delivery",
    description:
      "A seamless food delivery ecosystem connecting users, restaurants, and delivery partners. Features real-time order tracking, AI-powered delivery optimization, and integrated payment solutions.",
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
    id: 3,
    title: "TruthTaker - Digital News Platform",
    description:
      "A modern news platform revolutionizing local journalism with AI-powered content curation, real-time analytics, and interactive community surveys. Supports multi-city content management.",
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
    id: 4,
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
    id: 5,
    title: "FoodOTG - Cloud Kitchen Platform",
    description:
      "A comprehensive cloud kitchen management system with integrated order processing, kitchen display systems, and delivery logistics. Supports multiple brands under one roof.",
    icon: "👨‍🍳",
    tags: ["Flutter", "Firebase", "Cloud Functions", "Real-time Analytics"],
    gradient: "from-secondary to-accent",
    borderColor: "secondary",
  },
  {
    id: 6,
    title: "QuickMart - Instant Grocery Delivery",
    description:
      "A lightning-fast grocery delivery platform promising delivery within 15 minutes. Features inventory management, dark store operations, and predictive stocking algorithms.",
    icon: "🛒",
    tags: ["Flutter", "Firebase", "Cloud Functions", "Machine Learning"],
    gradient: "from-accent to-primary",
    borderColor: "accent",
  },
  {
    id: 7,
    title: "RabbitServices - Fleet Management",
    description:
      "A comprehensive fleet management solution for truck maintenance and repairs. Includes real-time vehicle diagnostics, mechanic dispatch, and preventive maintenance scheduling.",
    icon: "🚛",
    tags: [
      "Flutter",
      "Firebase",
      "Next.js",
      "Cloud Functions",
      "IoT Integration",
    ],
    gradient: "from-primary to-secondary",
    borderColor: "primary",
  },
  {
    id: 8,
    title: "TechBazaar - E-Commerce Platform",
    description:
      "A feature-rich electronics marketplace with AR product visualization, price comparison, and personalized recommendations powered by AI.",
    icon: "🛍️",
    tags: ["Next.js", "Firebase", "Stripe", "AR Integration"],
    gradient: "from-secondary to-accent",
    borderColor: "secondary",
  },
  {
    id: 9,
    title: "OneShop - Hyperlocal Delivery",
    description:
      "An ultra-fast delivery platform connecting local stores with customers. Features real-time inventory sync, smart delivery routing, and automated dispatch system.",
    icon: "⚡",
    tags: ["React", "Node", "Express", "MongoDB", "Redis"],
    gradient: "from-accent to-primary",
    borderColor: "accent",
  },
  {
    id: 10,
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
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  return (
    <section
      id="projects"
      className="py-32 bg-base-100 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-[40rem] h-[40rem] rounded-full border-8 border-dashed border-primary/20 blur-md animate-pulse" />
      <div className="absolute bottom-10 left-10 w-[30rem] h-[30rem] rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 blur-3xl animate-float" />
      <div className="absolute top-1/3 left-1/4 w-[20rem] h-[20rem] rounded-full bg-primary/5 blur-xl animate-float-slow" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent drop-shadow-lg tracking-tight">
            Project Showcase
          </h2>
          <p className="text-base-content/70 text-xl max-w-4xl mx-auto leading-relaxed font-light">
            Explore my portfolio of innovative solutions across mobile, web, AI,
            and IoT technologies
          </p>
        </motion.div>

        {/* Enhanced Project Timeline */}
        <div className="max-w-[80%] mx-auto relative">
          {/* Animated timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent">
            {projects.slice(0, visibleProjects).map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="absolute w-5 h-5 bg-gradient-to-br from-primary to-secondary rounded-full -left-2.5 flex items-center justify-center"
                style={{ top: `${(index * 100) / (visibleProjects - 1)}%` }}
              >
                <div className="w-3 h-3 bg-white rounded-full" />
              </motion.div>
            ))}
          </div>

          {/* Projects */}
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`flex items-center gap-8 mb-24 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Enhanced Project Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className={`w-[calc(100%-3rem)] p-8 bg-gradient-to-br from-base-200/70 via-base-200/40 to-base-200/70 rounded-3xl backdrop-blur-xl border border-${project.borderColor}/20 hover:border-${project.borderColor}/50 transition-all duration-300 shadow-xl hover:shadow-2xl group relative overflow-hidden`}
              >
                {/* Animated background highlight */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex items-start gap-6">
                  <motion.div
                    animate={{
                      rotate:
                        hoveredProject === project.id ? [0, 10, -10, 0] : 0,
                      scale: hoveredProject === project.id ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl p-4 bg-gradient-to-br from-base-300 to-base-200 rounded-xl shadow-md"
                  >
                    {project.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3
                      className={`text-3xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-3`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-base-content/80 text-lg leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mt-5">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          whileHover={{ scale: 1.05 }}
                          className={`px-4 py-1.5 text-sm font-medium bg-${project.borderColor}/10 border border-${project.borderColor}/20 rounded-full backdrop-blur-sm hover:bg-${project.borderColor}/20 transition-all`}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Animated Arrow */}
              <motion.div
                animate={{
                  x:
                    hoveredProject === project.id
                      ? index % 2 === 0
                        ? -10
                        : 10
                      : 0,
                  scale: hoveredProject === project.id ? 1.5 : 1,
                }}
                className={`text-4xl ${
                  index % 2 === 0 ? "rotate-180" : ""
                } text-${project.borderColor}`}
              >
                →
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Load More Button */}
        {visibleProjects < projects.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <motion.button
              onClick={loadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Show More Projects
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  ↓
                </motion.span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Add these keyframes to your global CSS */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
