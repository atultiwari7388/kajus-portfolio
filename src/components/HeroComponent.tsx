/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import {
  FiDownload,
  FiArrowRight,
  FiGithub,
  FiTwitter,
  FiMessageSquare,
} from "react-icons/fi";

export default function HeroComponent({
  handleDownloadCV,
}: {
  handleDownloadCV: () => void;
}) {
  const [skillIndex, setSkillIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const skills = [
    "Flutter Developer",
    "Next.js Developer",
    "Firebase Expert",
    "Mobile App Developer",
    "UI/UX Designer",
    "API Integration",
    "GetX State Management",
    "Cloud Functions",
  ];

  useEffect(() => {
    const text = skills[skillIndex];
    let currentIndex = isDeleting ? text.length : 0;

    const typingInterval = setInterval(() => {
      if (!isDeleting && currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
        if (currentIndex > text.length) {
          setTimeout(() => setIsDeleting(true), 1500);
          clearInterval(typingInterval);
        }
      } else if (isDeleting && currentIndex >= 0) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex--;
        if (currentIndex < 0) {
          setIsDeleting(false);
          setSkillIndex((prev) => (prev + 1) % skills.length);
          setTypingSpeed(100 + Math.random() * 100);
          clearInterval(typingInterval);
        }
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [skillIndex, isDeleting]);

  const floatingShapes = [
    {
      size: "w-16 h-16",
      position: "top-20 left-10",
      color: "from-blue-500/20 to-cyan-500/20",
      delay: 0,
    },
    {
      size: "w-24 h-24",
      position: "bottom-1/4 right-20",
      color: "from-purple-500/20 to-indigo-500/20",
      delay: 0.2,
    },
    {
      size: "w-32 h-32",
      position: "top-1/3 right-1/4",
      color: "from-amber-500/20 to-orange-500/20",
      delay: 0.4,
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen pt-32 px-4 md:px-8 lg:px-16 bg-base-100 relative overflow-hidden"
    >
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1, 0.8],
            y: [0, -50, 0],
            x: [0, index % 2 === 0 ? 30 : -30, 0],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
          className={`absolute ${shape.size} ${shape.position} rounded-full bg-gradient-to-r ${shape.color} blur-xl`}
        />
      ))}

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="space-y-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                {displayText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="ml-1"
                >
                  |
                </motion.span>
              </h2>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-6xl md:text-8xl font-black leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Atul Tiwari
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-8"
            >
              <div className="w-32 h-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-pulse"></div>
              <p className="text-xl md:text-2xl font-medium text-base-content/80">
                Building <span className="text-blue-500 font-bold">mobile</span>{" "}
                & <span className="text-purple-500 font-bold">web</span>{" "}
                solutions
              </p>
            </motion.div>

            <div className="flex gap-4 flex-wrap">
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="btn btn-primary btn-lg rounded-full px-10 relative group overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 border-none"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                <span className="relative flex items-center gap-3 text-lg z-10">
                  <FiDownload className="h-6 w-6 animate-bounce" />
                  Download CV
                </span>
              </motion.button>

              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="btn btn-outline btn-lg rounded-full px-10 group relative overflow-hidden border-purple-500 text-purple-500 hover:border-purple-600 hover:bg-transparent"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                <span className="relative flex items-center gap-3 text-lg z-10 hover:text-white">
                  Let&apos;s Collaborate
                  <FiArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex flex-wrap gap-6 pt-6"
            >
              <div className="stat bg-base-200/50 rounded-box p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-500">2.5+</div>
                <div className="text-sm opacity-70">Years Experience</div>
              </div>
              <div className="stat bg-base-200/50 rounded-box p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-500">15+</div>
                <div className="text-sm opacity-70">Apps Built</div>
              </div>
              <div className="stat bg-base-200/50 rounded-box p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-cyan-500">100%</div>
                <div className="text-sm opacity-70">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl opacity-70"
                animate={{
                  opacity: [0.6, 0.8, 0.6],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden bg-base-100 p-1.5"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring" }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1 animate-spin-slow [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]" />
                <div className="relative w-full h-full rounded-full overflow-hidden bg-base-100 p-1">
                  <img
                    src="/3rd.jpg"
                    alt="Atul Tiwari"
                    className="w-full h-full rounded-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>

              {/* Tech badges around the image */}
              {[
                {
                  name: "Flutter",
                  top: "top-0",
                  left: "left-1/4",
                  color: "bg-blue-500/10 text-blue-500",
                  delay: 0.2,
                },
                {
                  name: "Firebase",
                  top: "top-1/4",
                  left: "right-0",
                  color: "bg-amber-500/10 text-amber-500",
                  delay: 0.4,
                },
                {
                  name: "Next.js",
                  top: "bottom-1/4",
                  left: "right-0",
                  color: "bg-purple-500/10 text-purple-500",
                  delay: 0.6,
                },
                {
                  name: "GetX",
                  top: "bottom-0",
                  left: "left-1/3",
                  color: "bg-green-500/10 text-green-500",
                  delay: 0.8,
                },
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: tech.delay, type: "spring" }}
                  className={`absolute ${tech.top} ${tech.left} -translate-x-1/2 -translate-y-1/2 ${tech.color} backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-base-300/30`}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <span className="font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -right-20 top-1/2 -translate-y-1/2 flex flex-col gap-8 hidden md:flex"
            >
              {[
                {
                  href: "https://github.com/atultiwari7388",
                  icon: <FiGithub className="h-6 w-6" />,
                  color: "from-gray-900/10 to-gray-900/20",
                  hoverColor: "from-gray-900/20 to-gray-900/30",
                },
                {
                  href: "https://x.com/AtulTiw64466639",
                  icon: <FiTwitter className="h-6 w-6" />,
                  color: "from-blue-400/10 to-blue-500/20",
                  hoverColor: "from-blue-400/20 to-blue-500/30",
                },
                {
                  href: "https://api.whatsapp.com/send/?phone=%2B918960290289&text&type=phone_number&app_absent=0",
                  icon: <FiMessageSquare className="h-6 w-6" />,
                  color: "from-green-500/10 to-green-600/20",
                  hoverColor: "from-green-500/20 to-green-600/30",
                },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, x: -10 }}
                  className="group"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-r ${social.color} hover:${social.hoverColor} transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/30 border border-base-300/30`}
                  >
                    {social.icon}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="text-sm text-base-content/50 mb-2">Scroll Down</div>
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 rounded-full border-2 border-blue-500/50 flex justify-center p-1"
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-blue-500"
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
