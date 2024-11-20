"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  return (
    <section
      id="projects"
      className="py-32 bg-base-100 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-[40rem] h-[40rem] rounded-full border-8 border-dashed border-primary/20 blur-md" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent drop-shadow-lg">
            Project Gallery
          </h2>
          <p className="text-base-content/70 text-2xl max-w-4xl mx-auto leading-relaxed font-light">
            Dive into my diverse portfolio showcasing innovative solutions
            across mobile, web, AI, and IoT technologies
          </p>
        </motion.div>

        {/* Project Timeline */}
        <div className="max-w-[60%] mx-auto relative">
          {/* Timeline dots */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-base-300">
            {projects.slice(0, visibleProjects).map((_, index) => (
              <div
                key={index}
                className="absolute w-4 h-4 bg-primary rounded-full -left-1.5"
                style={{ top: `${(index * 100) / (visibleProjects - 1)}%` }}
              />
            ))}
          </div>

          {/* Projects */}
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className={`flex items-center gap-8 mb-20 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Project Card */}
              <div
                className={`w-[calc(100%-2rem)] p-8 bg-gradient-to-br from-base-200/50 via-base-200/30 to-base-200/50 rounded-2xl backdrop-blur-xl border-2 border-${project.borderColor}/10 hover:border-${project.borderColor}/40 transition-all duration-300 shadow-lg hover:shadow-xl group`}
              >
                <div className="flex items-center gap-6">
                  <span className="text-5xl">{project.icon}</span>
                  <div>
                    <h3
                      className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-base-content/70 mt-2">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 text-sm bg-${project.borderColor}/20 rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div
                className={`text-2xl ${index % 2 === 0 ? "rotate-180" : ""}`}
              >
                →
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <button
            onClick={loadMore}
            className="mx-auto mt-12 block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Show More Projects
          </button>
        )}
      </div>
    </section>
  );
}
