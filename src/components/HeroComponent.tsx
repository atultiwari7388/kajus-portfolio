/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function HeroComponent({
  handleDownloadCV,
}: {
  handleDownloadCV: () => void;
}) {
  const [skillIndex, setSkillIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const skills = [
    "Full Stack Developer",
    "Mobile App Developer",
    "Web Developer",
    "UI/UX Designer",
    "Cloud Expert",
    "API Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  useEffect(() => {
    const text = skills[skillIndex];
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setSkillIndex((prev) => (prev + 1) % skills.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [skillIndex]);

  return (
    <>
      <section
        id="home"
        className="min-h-screen pt-32 px-4 md:px-8 lg:px-16 bg-base-100 relative overflow-hidden"
      >
        <div className="container mx-auto">
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
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm"
              >
                <h2 className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {displayText}
                  <span className="animate-blink">|</span>
                </h2>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-6xl md:text-8xl font-black leading-tight"
              >
                <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
                  Atul Tiwari
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-8"
              >
                <div className="w-32 h-3 rounded-full bg-gradient-to-r from-primary via-purple-500 to-secondary"></div>
                <p className="text-xl md:text-2xl font-medium text-base-content/80">
                  Crafting digital experiences from India
                </p>
              </motion.div>

              <div className="flex gap-4 flex-wrap">
                {/* Download CV Button */}
                <motion.button
                  onClick={handleDownloadCV}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="btn btn-primary btn-lg rounded-full px-10 relative group hover:shadow-xl hover:shadow-primary/30"
                >
                  <span className="absolute inset-0 rounded-full bg-primary opacity-30 group-hover:animate-ping"></span>
                  <span className="relative flex items-center gap-3 text-lg">
                    Download CV
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 animate-bounce"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </span>
                </motion.button>

                {/* Let's Build Together Button */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="btn btn-outline btn-secondary btn-lg rounded-full px-10 group hover:shadow-xl"
                >
                  <span className="relative flex items-center gap-3 text-lg">
                    Let&apos;s Build Together
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </motion.a>
              </div>
            </motion.div>

            {/* Center Image with glowing border effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="relative flex justify-center"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Animated glowing corners */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-full opacity-75 blur-lg"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [0.98, 1.02, 0.98],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative w-full h-full rounded-full overflow-hidden bg-base-100 p-2">
                  <img
                    src="/3rd.jpg"
                    alt="Atul Tiwari"
                    className="w-full h-full rounded-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Enhanced Social Links */}
              <motion.ul
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -right-20 top-1/2 -translate-y-1/2 flex flex-col gap-8 md:flex hidden"
              >
                {[
                  {
                    href: "https://github.com/atultiwari7388",
                    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                  },
                  {
                    href: "https://x.com/AtulTiw64466639",
                    path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                  },
                  {
                    href: "https://api.whatsapp.com/send/?phone=%2B918960290289&text&type=phone_number&app_absent=0",
                    path: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z",
                  },
                ].map((social, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.2, x: -10 }}
                    className="group"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-primary group-hover:text-secondary transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={social.path} />
                      </svg>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
