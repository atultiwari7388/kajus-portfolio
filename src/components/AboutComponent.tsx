/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

export default function AboutComponent() {
  return (
    <section id="about" className="py-20 bg-base-100 relative overflow-hidden">
      {/* Animated arrows in background */}
      <motion.div
        animate={{
          x: [-100, 100],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 left-0 text-primary/10 text-9xl rotate-45"
      >
        ➜ ➜ ➜
      </motion.div>

      <motion.div
        animate={{
          x: [100, -100],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 right-0 text-secondary/10 text-9xl -rotate-45"
      >
        ➜ ➜ ➜
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-4xl"
            >
              ⬇️
            </motion.div>
            <span className="text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-4 py-2 rounded-full">
              Get to know me
            </span>
            <h2 className="text-5xl font-bold mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="prose prose-lg dark:prose-invert"
              >
                <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                  Hey! I&apos;m a Full Stack Developer with over 2 years of
                  experience in Flutter development. Recently, I&apos;ve
                  expanded my expertise into MERN stack development, which
                  I&apos;ve been actively pursuing for the past 3 months.
                </p>
                <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                  My journey started with mobile development using Flutter,
                  where I&apos;ve built numerous production-ready applications.
                  Now, I&apos;m passionate about combining my mobile expertise
                  with web development using the MERN stack to create
                  comprehensive full-stack solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: [0, 20, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🛠️
                  </motion.span>
                  Tech Stack I Love
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Flutter",
                    "Firebase",
                    "MongoDB",
                    "Express.js",
                    "React",
                    "Node.js",
                    "Next.js",
                    "TypeScript",
                  ].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        backgroundColor: ["#4338ca", "#3b82f6", "#06b6d4"],
                      }}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer backdrop-blur-sm border border-indigo-400/30"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 transition-all duration-300 relative"
              >
                <motion.div
                  animate={{
                    background: [
                      "linear-gradient(to top, rgba(var(--primary-rgb), 0.3), transparent)",
                      "linear-gradient(to top, rgba(var(--secondary-rgb), 0.3), transparent)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-0 z-10"
                />
                <img
                  src="/3rd.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-2xl rotate-12 flex items-center justify-center shadow-xl"
              >
                <motion.div
                  animate={{ rotate: [-12, -8, -12] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-center text-white"
                >
                  <span className="text-3xl font-bold">2+</span>
                  <p className="text-sm">
                    Years in
                    <br />
                    Flutter
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
