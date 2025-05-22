/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

export default function AboutComponent() {
  return (
    <section id="about" className="py-28 bg-base-100 relative overflow-hidden">
      {/* Floating tech bubbles background */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 200,
            opacity: 0.1,
            scale: 0.5,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "reverse",
          }}
          className={`absolute rounded-full filter blur-md ${
            i % 3 === 0
              ? "bg-primary/10"
              : i % 3 === 1
              ? "bg-secondary/10"
              : "bg-accent/10"
          }`}
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
          }}
        />
      ))}

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20 relative"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-5xl"
            >
              ✨
            </motion.div>
            <motion.span
              className="text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-4 py-2 rounded-full inline-block"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(var(--primary-rgb), 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Get to know me
            </motion.span>
            <motion.h2
              className="text-6xl font-bold mt-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            >
              About Me
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="prose prose-xl dark:prose-invert max-w-none"
              >
                <p className="text-2xl leading-relaxed text-gray-600 dark:text-gray-300 font-medium">
                  <span className="text-primary font-bold">Hello there!</span>{" "}
                  I&apos;m a passionate{" "}
                  <span className="text-secondary font-bold">
                    Full Stack Developer
                  </span>{" "}
                  with over 2 years of experience crafting beautiful mobile
                  applications with Flutter.
                </p>
                <p className="text-2xl leading-relaxed text-gray-600 dark:text-gray-300 font-medium">
                  Recently, I&apos;ve expanded my expertise into the{" "}
                  <span className="text-accent font-bold">MERN stack</span>,
                  combining my mobile development skills with powerful web
                  technologies to build complete digital experiences.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.h3
                  className="text-2xl font-bold text-primary flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.span
                    animate={{
                      rotate: [0, 10, -10, 0],
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "mirror",
                    }}
                    className="text-3xl"
                  >
                    🚀
                  </motion.span>
                  My Tech Arsenal
                </motion.h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    {
                      name: "Flutter",
                      emoji: "📱",
                      color: "from-blue-500 to-sky-400",
                    },
                    {
                      name: "Firebase",
                      emoji: "🔥",
                      color: "from-amber-500 to-yellow-400",
                    },
                    {
                      name: "MongoDB",
                      emoji: "🍃",
                      color: "from-green-500 to-emerald-400",
                    },
                    {
                      name: "Express.js",
                      emoji: "⚡",
                      color: "from-gray-500 to-gray-400",
                    },
                    {
                      name: "React",
                      emoji: "⚛️",
                      color: "from-cyan-500 to-blue-400",
                    },
                    {
                      name: "Node.js",
                      emoji: "🟢",
                      color: "from-lime-500 to-green-400",
                    },
                    {
                      name: "Next.js",
                      emoji: "⏭️",
                      color:
                        "from-black to-gray-700 dark:from-white dark:to-gray-300",
                    },
                    {
                      name: "TypeScript",
                      emoji: "📝",
                      color: "from-blue-600 to-blue-400",
                    },
                    {
                      name: "Tailwind",
                      emoji: "🎨",
                      color: "from-cyan-400 to-sky-500",
                    },
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)",
                      }}
                      className={`bg-gradient-to-r ${skill.color} text-white rounded-xl p-3 font-semibold flex items-center gap-2 shadow-lg cursor-pointer border border-white/10 backdrop-blur-sm`}
                    >
                      <span className="text-xl">{skill.emoji}</span>
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative h-full flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative w-full max-w-md aspect-square rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/30 transition-all duration-500"
              >
                <motion.div
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(var(--primary-rgb), 0.2), transparent)",
                      "linear-gradient(45deg, rgba(var(--secondary-rgb), 0.2), transparent)",
                      "linear-gradient(45deg, rgba(var(--accent-rgb), 0.2), transparent)",
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-0 z-10 mix-blend-overlay"
                />
                <motion.div
                  animate={{
                    background: [
                      "conic-gradient(from 0deg, transparent, rgba(var(--primary-rgb), 0.1), transparent)",
                      "conic-gradient(from 90deg, transparent, rgba(var(--secondary-rgb), 0.1), transparent)",
                      "conic-gradient(from 180deg, transparent, rgba(var(--accent-rgb), 0.1), transparent)",
                    ],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-0 z-0"
                />
                <img
                  src="/3rd.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover relative z-0 transform hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Experience badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 w-36 h-36 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl rotate-12 flex items-center justify-center shadow-2xl z-20"
              >
                <motion.div
                  animate={{
                    rotate: [-12, -8, -12],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-center text-white p-4"
                >
                  <span className="text-4xl font-bold block">2+</span>
                  <p className="text-sm font-medium">
                    Years of Flutter
                    <br />
                    Experience
                  </p>
                </motion.div>
              </motion.div>

              {/* Floating tech icons */}
              <motion.div
                className="absolute -left-10 top-1/4 w-24 h-24 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/10"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-5xl"
                >
                  📱
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -right-10 bottom-1/4 w-20 h-20 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg border border-white/10"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-4xl"
                >
                  🌐
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
