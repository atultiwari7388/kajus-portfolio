import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-base-100 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-20 w-72 h-72 rounded-full border-4 border-dashed border-primary/20"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full border-4 border-dashed border-secondary/20"
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
            My Skills
          </h2>
          <p className="text-base-content/70 text-lg">
            Technologies and skills I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8 bg-base-200/50 p-8 rounded-3xl backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-xl hover:shadow-primary/20"
          >
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {[
                { name: "React/Next.js", level: "90%" },
                { name: "Flutter", level: "90%" },
                { name: "Node.js", level: "65%" },
                { name: "TypeScript", level: "60%" },
                { name: "JavaScript", level: "65%" },
                { name: "Firebase", level: "85%" },
                { name: "Tailwind CSS", level: "80%" },
                { name: "MongoDB", level: "60%" },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-lg group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-base-content/70 font-medium">
                      {skill.level}
                    </span>
                  </div>
                  <div className="h-3 bg-base-300 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8 bg-base-200/50 p-8 rounded-3xl backdrop-blur-sm border border-secondary/10 hover:border-secondary/30 transition-all duration-300 shadow-xl hover:shadow-secondary/20"
          >
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                "Problem Solving",
                "Communication",
                "Team Leadership",
                "Project Management",
                "Adaptability",
                "Critical Thinking",
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-base-100 to-base-200 shadow-lg hover:shadow-primary/20 transition-all duration-300 border border-primary/10 hover:border-primary/30 group"
                >
                  <span className="font-bold text-lg group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
