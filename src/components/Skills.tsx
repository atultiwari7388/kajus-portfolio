import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-base-100 relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute top-20 right-20 w-[40rem] h-[40rem] rounded-full border-8 border-dashed border-primary/20 blur-md" />
      <div className="absolute bottom-20 -left-20 w-[30rem] h-[30rem] rounded-full border-8 border-dashed border-secondary/20 blur-md" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent drop-shadow-lg">
            My Skills
          </h2>
          <p className="text-base-content/70 text-2xl max-w-4xl mx-auto leading-relaxed font-light">
            Technologies and expertise I&apos;ve mastered throughout my journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div className="space-y-8 bg-gradient-to-br from-base-200/50 via-base-200/30 to-base-200/50 p-10 rounded-3xl backdrop-blur-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl">
            <h3 className="text-4xl font-bold mb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Technical Skills
            </h3>
            <div className="space-y-8">
              {[
                { name: "React/Next.js", level: "70%" },
                { name: "Flutter", level: "90%" },
                { name: "Node.js", level: "65%" },
                { name: "TypeScript", level: "60%" },
                { name: "JavaScript", level: "65%" },
                { name: "Firebase", level: "85%" },
                { name: "Tailwind CSS", level: "80%" },
                { name: "MongoDB", level: "60%" },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="group hover:translate-x-2 transition-all duration-300"
                >
                  <div className="flex justify-between mb-3">
                    <span className="font-bold text-xl group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-base-content/70 font-medium">
                      {skill.level}
                    </span>
                  </div>
                  <div className="h-3 bg-base-300 rounded-full overflow-hidden shadow-inner">
                    <div
                      style={{ width: skill.level }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-8 bg-gradient-to-br from-base-200/50 via-base-200/30 to-base-200/50 p-10 rounded-3xl backdrop-blur-xl border-2 border-secondary/10 hover:border-secondary/30 transition-all duration-500 shadow-lg hover:shadow-xl">
            <h3 className="text-4xl font-bold mb-10 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: "Problem Solving", icon: "🎯" },
                { name: "Communication", icon: "💬" },
                { name: "Team Leadership", icon: "👥" },
                { name: "Project Management", icon: "📊" },
                { name: "Adaptability", icon: "🔄" },
                { name: "Critical Thinking", icon: "🧠" },
                { name: "Individual Project Handling", icon: "🎨" },
                { name: "Code Refactoring", icon: "♻️" },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="p-6 rounded-2xl bg-gradient-to-br from-base-100/50 to-base-200/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary/10 hover:border-primary/30 group hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <span className="font-bold text-lg group-hover:text-primary transition-colors duration-200">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
