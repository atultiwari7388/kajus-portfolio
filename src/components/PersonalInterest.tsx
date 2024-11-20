import { motion } from "framer-motion";

export default function PersonalInterest() {
  const personalInterests = [
    {
      icon: "🏃",
      title: "Holistic Wellness",
      description:
        "Dedicated to physical and mental strength through daily workouts, meditation, and positive mindset",
      gradient: "from-green-400 to-emerald-600",
    },
    {
      icon: "🧘",
      title: "Spiritual Growth",
      description:
        "Practicing gratitude, daily prayers, and spreading positivity while avoiding negativity",
      gradient: "from-blue-400 to-indigo-600",
    },
    {
      icon: "🌿",
      title: "Nature Explorer",
      description:
        "Finding peace and inspiration through nature walks, hiking, and connecting with the environment",
      gradient: "from-purple-400 to-pink-600",
    },
    {
      icon: "💪",
      title: "Personal Development",
      description:
        "Focused on becoming mentally stronger, making better decisions, and maintaining honesty and integrity",
      gradient: "from-red-400 to-orange-600",
    },
    {
      icon: "❤️",
      title: "Spreading Love",
      description:
        "Committed to sharing love, kindness and positive energy with everyone around me",
      gradient: "from-pink-400 to-rose-600",
    },
    {
      icon: "🎯",
      title: "Mindful Living",
      description:
        "Practicing digital detox, avoiding social media distractions, and living more consciously",
      gradient: "from-amber-400 to-orange-600",
    },
  ];
  return (
    <section className="py-32 bg-base-100 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-7xl font-black mb-8 bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
            Passions & Interests
          </h2>
          <p className="text-base-content/80 text-2xl max-w-4xl mx-auto leading-relaxed font-light">
            When I&apos;m not crafting code, here&apos;s what fuels my
            creativity and keeps me balanced
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {personalInterests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: [0, 2, -2, 0],
                  transition: {
                    duration: 0.3,
                    rotate: {
                      repeat: Infinity,
                      duration: 0.5,
                    },
                  },
                }}
                className="p-10 rounded-3xl bg-base-200/90 backdrop-blur-xl border-2 border-primary/20 transition-all duration-300 hover:shadow-xl relative z-10 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to right, ${
                      interest.gradient.split(" ")[1]
                    }, ${interest.gradient.split(" ")[3]})`,
                  }}
                />
                <div className="text-7xl mb-8 transform group-hover:scale-110 transition-transform duration-300">
                  {interest.icon}
                </div>
                <h3
                  className={`text-2xl font-bold bg-gradient-to-r ${interest.gradient} bg-clip-text text-transparent mb-6`}
                >
                  {interest.title}
                </h3>
                <p className="text-base-content/70 leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
