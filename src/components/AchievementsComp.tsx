import { motion } from "framer-motion";

export default function AchievementsComp() {
  return (
    <section
      id="achievements"
      className="py-20 bg-base-100 relative overflow-hidden"
    >
      {/* Simplified background elements */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full border-4 border-dashed border-primary/20 blur-sm" />
      <div className="absolute bottom-20 left-20 w-[32rem] h-[32rem] rounded-full border-4 border-dashed border-secondary/20 blur-sm" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <p className="text-base-content/70 text-lg">
            Recognition and milestones in my journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Firebase Certification */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-br from-base-100 to-base-200 shadow-lg hover:shadow-primary/20 border border-primary/10 hover:border-primary/30 group transition-all duration-300 hover:-translate-y-2"
          >
            <div className="mb-4 relative overflow-hidden rounded-xl">
              <div className="w-16 h-16 mx-auto text-4xl flex items-center justify-center bg-primary/20 rounded-full">
                🔥
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Firebase Certification
            </h3>
            <p className="text-base-content/70 mb-4">
              Advanced Firebase Development & Architecture
            </p>
            <a
              href="#"
              className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300"
            >
              View Certificate
              <span className="ml-2">→</span>
            </a>
          </motion.div>

          {/* React Advanced */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-br from-base-100 to-base-200 shadow-lg hover:shadow-secondary/20 border border-secondary/10 hover:border-secondary/30 group transition-all duration-300 hover:-translate-y-2"
          >
            <div className="mb-4 relative overflow-hidden rounded-xl">
              <div className="w-16 h-16 mx-auto text-4xl flex items-center justify-center bg-secondary/20 rounded-full">
                ⚛️
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              React Advanced
            </h3>
            <p className="text-base-content/70 mb-4">
              Advanced React Patterns & Best Practices
            </p>
            <a
              href="#"
              className="inline-flex items-center text-secondary hover:text-primary transition-colors duration-300"
            >
              View Certificate
              <span className="ml-2">→</span>
            </a>
          </motion.div>

          {/* Flutter Winner */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-br from-base-100 to-base-200 shadow-lg hover:shadow-primary/20 border border-primary/10 hover:border-primary/30 group transition-all duration-300 hover:-translate-y-2"
          >
            <div className="mb-4 relative overflow-hidden rounded-xl">
              <div className="w-16 h-16 mx-auto text-4xl flex items-center justify-center bg-primary/20 rounded-full">
                🏆
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Flutter
            </h3>
            <p className="text-base-content/70 mb-4">
              Flutter Developer Intern at Awiskartech
            </p>
            <a
              href="#"
              className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300"
            >
              View Project
              <span className="ml-2">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
