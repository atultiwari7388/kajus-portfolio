import { motion } from "framer-motion";

export default function ToolsTechnology() {
  return (
    <section className="py-20 bg-base-100 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(66,108,245,0.1),transparent_48%)]" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_20%,rgba(245,66,224,0.1),transparent_48%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4"
          >
            My Arsenal
          </motion.span>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
            Tools & Technologies
          </h2>
          <p className="text-base-content/70 text-xl max-w-3xl mx-auto">
            Leveraging modern technologies to build powerful digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="group p-8 rounded-3xl bg-gradient-to-br from-base-200 to-base-300 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="text-3xl font-bold text-primary">Frontend</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "React", icon: "⚛️" },
                { name: "Next.js", icon: "▲" },
                { name: "Flutter", icon: "🎯" },
                { name: "Tailwind", icon: "🎨" },
                { name: "TypeScript", icon: "📘" },
                { name: "JavaScript", icon: "📘" },
                { name: "Framer Motion", icon: "🎬" },
              ].map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-base-100/50 backdrop-blur-sm hover:bg-base-100 transition-all duration-300"
                >
                  <span className="text-xl">{tech.icon}</span>
                  <span className="text-sm font-semibold">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="group p-8 rounded-3xl bg-gradient-to-br from-base-200 to-base-300 border border-secondary/10 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-3xl font-bold text-secondary">Backend</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Node.js", icon: "🟢" },
                { name: "Express", icon: "🚂" },
                { name: "MongoDB", icon: "🍃" },
                { name: "Firebase", icon: "🔥" },
                { name: "REST API", icon: "🔌" },
              ].map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-base-100/50 backdrop-blur-sm hover:bg-base-100 transition-all duration-300"
                >
                  <span className="text-xl">{tech.icon}</span>
                  <span className="text-sm font-semibold">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Deployment */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
            className="group p-8 rounded-3xl bg-gradient-to-br from-base-200 to-base-300 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Tools
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Git", icon: "📚" },
                { name: "Vercel", icon: "▲" },
                { name: "VS Code", icon: "💻" },
                { name: "Figma", icon: "🎨" },
              ].map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-base-100/50 backdrop-blur-sm hover:bg-base-100 transition-all duration-300"
                >
                  <span className="text-xl">{tech.icon}</span>
                  <span className="text-sm font-semibold">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
