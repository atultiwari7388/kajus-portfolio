import { motion } from "framer-motion";

export default function ResumeExperience({
  handleDownloadCV,
}: {
  handleDownloadCV: () => void;
}) {
  return (
    <section id="resume" className="py-20 bg-base-100 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [0.9, 1.1, 0.9],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-20 w-96 h-96 rounded-full border-4 border-dashed border-primary/20 blur-sm"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1.1, 0.9, 1.1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-20 w-[32rem] h-[32rem] rounded-full border-4 border-dashed border-secondary/20 blur-sm"
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Resume & Experience
          </h2>
          <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
            A snapshot of my professional journey and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/5 via-base-100/50 to-secondary/5 border border-primary/10 backdrop-blur-lg shadow-xl group-hover:shadow-2xl group-hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20"
                >
                  <i className="devicon-flutter-plain text-3xl text-primary"></i>
                </motion.div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Experience
                </h3>
              </div>
              <ul className="space-y-4 text-base-content/80">
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 transition-colors duration-300 hover:text-primary"
                >
                  <span className="text-primary">→</span>
                  2+ years in Flutter Development
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 transition-colors duration-300 hover:text-primary"
                >
                  <span className="text-primary">→</span>
                  Full-stack Firebase expertise
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 transition-colors duration-300 hover:text-primary"
                >
                  <span className="text-primary">→</span>
                  Modern app architecture
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 transition-colors duration-300 hover:text-primary"
                >
                  <span className="text-primary">→</span>
                  React JS & Next JS
                </motion.li>
              </ul>
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-primary/5 via-base-100/50 to-secondary/5 border border-primary/10 backdrop-blur-lg shadow-xl group-hover:shadow-2xl group-hover:border-secondary/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-4 rounded-2xl bg-secondary/10 group-hover:bg-secondary/20"
                >
                  <i className="fas fa-graduation-cap text-3xl text-secondary"></i>
                </motion.div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Education
                </h3>
              </div>
              <div className="space-y-6 text-base-content/80">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="transition-colors duration-300 hover:text-secondary"
                >
                  <h4 className="text-xl font-semibold mb-2">
                    Master&apos;s in Computer Science
                  </h4>
                  <p className="text-base-content/70">
                    Specializing in Software Engineering
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="transition-colors duration-300 hover:text-secondary"
                >
                  <p className="text-lg font-medium">Research Focus</p>
                  <p className="text-base-content/70">
                    Mobile Development & Modern Technologies
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Download CV Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-primary/5 via-base-100/50 to-secondary/5 border border-primary/10 backdrop-blur-lg shadow-xl group-hover:shadow-2xl group-hover:border-primary/30 transition-all duration-300">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-secondary p-1 group-hover:shadow-lg"
              >
                <div className="w-full h-full rounded-full bg-base-100 flex items-center justify-center">
                  <motion.i
                    whileHover={{ scale: 1.2 }}
                    className="fas fa-file-download text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  ></motion.i>
                </div>
              </motion.div>
              <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Get My Resume
              </h3>
              <p className="text-base-content/70 text-center mb-8">
                Download my detailed CV to learn more about my experience and
                skills
              </p>
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-3"
              >
                Download CV
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-xl"
                >
                  ↓
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
