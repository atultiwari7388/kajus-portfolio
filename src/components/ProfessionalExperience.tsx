import { motion } from "framer-motion";

export default function ProfessionalExperience() {
  return (
    <section className="py-32 bg-base-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-20 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-20 right-20 w-[35rem] h-[35rem] rounded-full bg-gradient-to-bl from-secondary/5 to-transparent blur-3xl" />

      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1)_0%,transparent_50%)]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent drop-shadow-lg">
            Professional Journey
          </h2>
          <p className="text-base-content/70 text-2xl max-w-4xl mx-auto leading-relaxed font-light">
            A showcase of my professional growth, continuous learning, and
            passion for health, fitness and sports alongside modern web and
            mobile development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Connecting arrows */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${((i % 3) + 1) * 33.33 - 16}%`,
                  top: `${Math.floor(i / 3) * 50 + 25}%`,
                }}
                animate={{
                  x: [0, 20, 0],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                <div className="w-8 h-8 border-2 border-primary rotate-45 border-b-0 border-l-0" />
              </motion.div>
            ))}
          </motion.div>

          {[
            {
              title:
                "Flutter Developer at Mylext Infotech (Feb 2023 - Present)",
              description:
                "Specialized in implementing complex REST APIs, Firebase integration, Cloud Functions, Google Maps, and Push Notifications. Built scalable mobile applications with real-time features and location-based services.",
              icon: "📱",
              highlight: "Mobile Development",
              gradient: "from-blue-500 to-cyan-400",
            },
            {
              title: "Independent Problem Solver",
              description:
                "Self-reliant developer capable of resolving complex technical challenges independently using resources like Stack Overflow, ChatGPT, and documentation. Strong debugging and troubleshooting skills with a solution-oriented mindset.",
              icon: "🔍",
              highlight: "Problem Solving",
              gradient: "from-purple-500 to-pink-400",
            },
            {
              title: "Technical Expertise",
              description:
                "Proficient in state management, custom animations, payment gateway integration, social auth, and deployment automation. Experienced in optimizing app performance and implementing clean architecture patterns.",
              icon: "⚡",
              highlight: "Advanced Skills",
              gradient: "from-amber-500 to-orange-400",
            },
            {
              title: "Modern Web Development Journey",
              description:
                "Currently mastering Next.js 13, React 18, and Framer Motion for creating stunning web experiences. Focused on server components, app router, and advanced animations to build performant and engaging applications.",
              icon: "🚀",
              highlight: "Learning Next.js & React",
              gradient: "from-green-500 to-emerald-400",
            },
            {
              title: "Full Stack Development",
              description:
                "Expanding expertise in MERN stack (MongoDB, Express.js, React, Node.js) development. Building full-stack applications with modern features like real-time updates, authentication, and cloud deployment.",
              icon: "🔋",
              highlight: "MERN Stack",
              gradient: "from-rose-500 to-red-400",
            },
            {
              title: "Health & Wellness Focus",
              description:
                "Maintaining a healthy work-life balance through regular outdoor activities. Passionate about cricket, running, and gym workouts. Believe in the strong connection between physical fitness and mental clarity for optimal productivity.",
              icon: "🏃",
              highlight: "Active Lifestyle",
              gradient: "from-teal-500 to-cyan-400",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative z-10"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-base-200/80 via-base-200/60 to-base-200/80 backdrop-blur-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:shadow-primary/5">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <h3 className="text-2xl font-bold text-base-content group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base-content/80 mb-6 leading-relaxed relative z-10">
                  {item.description}
                </p>
                <div
                  className={`inline-block px-6 py-2 bg-gradient-to-r ${item.gradient} rounded-full text-white text-sm font-medium shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative z-10`}
                >
                  {item.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
