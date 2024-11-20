import { motion } from "framer-motion";

export default function ResumeExperience({
  handleDownloadCV,
}: {
  handleDownloadCV: () => void;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="resume"
      className="py-16 md:py-32 bg-base-100 relative overflow-hidden"
    >
      {/* Animated code tags background */}
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{
          y: [-20, 20],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-10 md:right-20 text-6xl md:text-8xl font-mono text-primary/20"
      >
        {"</>"}
      </motion.div>

      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{
          y: [20, -20],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-10 md:left-20 text-6xl md:text-8xl font-mono text-secondary/20"
      >
        {"<>"}
      </motion.div>

      {/* React logo animation */}
      <motion.div
        animate={{
          rotate: 360,
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 -right-20 md:-right-40 w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] text-accent/10"
      >
        <i className="fab fa-react text-[20rem] md:text-[30rem]"></i>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-5xl md:text-8xl font-black mb-4 md:mb-8 bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent drop-shadow-2xl">
            Resume & Experience
          </h2>
          <p className="text-base-content/70 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
            A journey through my professional expertise and accomplishments
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12"
        >
          {/* Experience Column */}
          <motion.div variants={itemVariants}>
            <div className="group h-full p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-base-200/80 to-base-200/40 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-primary/20">
              <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-10">
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5">
                  <i className="devicon-flutter-plain text-3xl md:text-5xl text-primary"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Experience
                </h3>
              </div>
              <ul className="space-y-4 md:space-y-6 text-base md:text-lg">
                {[
                  "3+ years in Flutter Development",
                  "Full-stack Firebase expertise",
                  "Modern app architecture",
                  "React & Next.js mastery",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 md:gap-4 group p-2 md:p-3 rounded-xl hover:bg-primary/5"
                  >
                    <motion.span
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-primary text-xl md:text-2xl group-hover:translate-x-2 transition-transform"
                    >
                      →
                    </motion.span>
                    <span className="group-hover:translate-x-2 transition-transform group-hover:text-primary">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div variants={itemVariants}>
            <div className="group h-full p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-base-200/80 to-base-200/40 backdrop-blur-xl border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-500 shadow-xl hover:shadow-secondary/20">
              <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-10">
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5">
                  <i className="fas fa-graduation-cap text-3xl md:text-5xl text-secondary"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Education
                </h3>
              </div>
              <div className="space-y-6 md:space-y-8">
                <div className="group p-3 md:p-4 rounded-xl transition-all duration-300 hover:bg-secondary/5">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-secondary text-xl md:text-2xl mb-2"
                  >
                    →
                  </motion.div>
                  <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-secondary">
                    Master&apos;s in Computer Science
                  </h4>
                  <p className="text-base-content/70 text-base md:text-lg">
                    Specializing in Software Engineering & Modern Technologies
                  </p>
                </div>
                <div className="group p-3 md:p-4 rounded-xl transition-all duration-300 hover:bg-secondary/5">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-secondary text-xl md:text-2xl mb-2"
                  >
                    →
                  </motion.div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-secondary">
                    Research Focus
                  </h4>
                  <p className="text-base-content/70 text-base md:text-lg">
                    Advanced Mobile Development & Emerging Technologies
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Download CV Column */}
          <motion.div variants={itemVariants}>
            <div className="group h-full p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-base-200/80 to-base-200/40 backdrop-blur-xl border-2 border-accent/20 hover:border-accent/50 transition-all duration-500 shadow-xl hover:shadow-accent/20">
              <div className="w-28 h-28 md:w-40 md:h-40 mx-auto mb-6 md:mb-10 rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-br from-primary via-purple-500 to-secondary p-2">
                <div className="w-full h-full rounded-[1.3rem] md:rounded-[1.7rem] bg-base-100 flex items-center justify-center">
                  <motion.i
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="fas fa-file-download text-4xl md:text-6xl bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent"
                  ></motion.i>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
                Download Resume
              </h3>
              <p className="text-base-content/70 text-base md:text-lg text-center mb-6 md:mb-10">
                Get my detailed CV to explore my complete journey and expertise
              </p>
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 md:py-6 px-6 md:px-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary via-purple-500 to-secondary text-white font-bold text-lg md:text-xl shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-3 md:gap-4 group"
              >
                Download CV
                <motion.span
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-xl md:text-2xl"
                >
                  ↓
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
