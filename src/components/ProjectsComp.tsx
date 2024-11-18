import { motion } from "framer-motion";

export default function ProjectsComp() {
  return (
    <section
      id="projects"
      className="py-20 bg-base-100 relative overflow-hidden"
    >
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

      {/* Animated decorative elements */}
      <motion.div
        animate={{
          x: [-100, 100],
          y: [-50, 50],
          rotate: [0, 180],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-40 right-0 text-primary/10 text-9xl"
      >
        ⚡
      </motion.div>

      <motion.div
        animate={{
          x: [100, -100],
          y: [50, -50],
          rotate: [180, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-40 left-0 text-secondary/10 text-9xl"
      >
        💫
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-base-content/70 text-xl max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative mobile and web applications,
            showcasing cutting-edge technology solutions and creative
            problem-solving
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* WindayRoot App */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-base-200/50 via-base-200/30 to-base-200/50 p-8 rounded-3xl backdrop-blur-lg border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/20"
          >
            <div className="h-52 bg-gradient-to-br from-primary/20 via-purple-500/20 to-secondary/20 rounded-2xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500">
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full flex items-center justify-center text-6xl"
              >
                🌱
              </motion.div>
            </div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              WindayRoot App
            </h3>
            <p className="text-base-content/70 mb-6 text-lg">
              An innovative environmental monitoring and plant care application
              with smart notifications and community features.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-primary/20 rounded-full text-base font-medium backdrop-blur-sm">
                React Native
              </span>
              <span className="px-4 py-2 bg-primary/20 rounded-full text-base font-medium backdrop-blur-sm">
                Node.js
              </span>
              <span className="px-4 py-2 bg-primary/20 rounded-full text-base font-medium backdrop-blur-sm">
                MongoDB
              </span>
            </div>
          </motion.div>

          {/* NearTake Apps */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-base-200/50 via-base-200/30 to-base-200/50 p-8 rounded-3xl backdrop-blur-lg border-2 border-secondary/10 hover:border-secondary/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-secondary/20"
          >
            <div className="h-52 bg-gradient-to-br from-secondary/20 via-purple-500/20 to-primary/20 rounded-2xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500">
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full flex items-center justify-center text-6xl"
              >
                🚚
              </motion.div>
            </div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              NearTake Ecosystem
            </h3>
            <p className="text-base-content/70 mb-6 text-lg">
              A comprehensive delivery platform with separate apps for users,
              delivery partners, and managers.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-secondary/20 rounded-full text-base font-medium backdrop-blur-sm">
                Flutter
              </span>
              <span className="px-4 py-2 bg-secondary/20 rounded-full text-base font-medium backdrop-blur-sm">
                Firebase
              </span>
              <span className="px-4 py-2 bg-secondary/20 rounded-full text-base font-medium backdrop-blur-sm">
                Google Maps
              </span>
            </div>
          </motion.div>

          {/* Truth Taker Apps */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-base-200/50 via-base-200/30 to-base-200/50 p-8 rounded-3xl backdrop-blur-lg border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/20"
          >
            <div className="h-52 bg-gradient-to-br from-primary/20 via-purple-500/20 to-secondary/20 rounded-2xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500">
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full flex items-center justify-center text-6xl"
              >
                ⚖️
              </motion.div>
            </div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Truth Taker Suite
            </h3>
            <p className="text-base-content/70 mb-6 text-lg">
              A secure and efficient legal documentation system with multi-level
              administrative controls.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-primary/20 rounded-full text-base font-medium backdrop-blur-sm">
                React
              </span>
              <span className="px-4 py-2 bg-primary/20 rounded-full text-base font-medium backdrop-blur-sm">
                Node.js
              </span>
              <span className="px-4 py-2 bg-primary/20 rounded-full text-base font-medium backdrop-blur-sm">
                PostgreSQL
              </span>
            </div>
          </motion.div>

          {/* View More Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 lg:col-span-3 text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-lg gap-3 bg-gradient-to-r from-primary via-purple-500 to-secondary text-white border-none shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              <span className="text-lg">Explore All Projects</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl"
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
