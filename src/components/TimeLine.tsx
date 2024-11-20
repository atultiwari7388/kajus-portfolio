import { motion } from "framer-motion";

export default function TimeLine() {
  const timelineData = [
    {
      year: "2024",
      title: "Full Stack Developer Journey",
      description:
        "Began exploring MERN stack development after working with React & Next.js. Built Rabbit Service project with Firebase.",
      icon: "🚀",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      year: "2023",
      title: "Flutter Developer at Mylext Infotech",
      description:
        "Secured position as Junior Flutter Developer, worked on multiple client projects, code refactoring and feature development",
      icon: "💼",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      year: "2022",
      title: "Growth & Learning Phase",
      description:
        "Pursued MCA at JS University Sikhobad while interviewing across major tech hubs - Bangalore, Indore, Chennai, Hyderabad, Delhi and Mohali",
      icon: "📚",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      year: "2021",
      title: "First Job at Awiskar Technology",
      description:
        "Started career journey in Vizag (City of Destiny) at a startup. Despite challenges, gained valuable experience working with supportive colleagues",
      icon: "💻",
      gradient: "from-amber-500 to-orange-400",
    },
    {
      year: "2019",
      title: "Found My Comfort Zone, Understanding & Inspiration",
      description:
        "First time I saw her smile and fell in love. Named her Devsena for her strong attitude that I admire. She became my inspiration and motivation to grow.",
      icon: "💝",
      gradient: "from-pink-500 to-rose-400",
    },
    {
      year: "2021",
      title: "Computer Science Graduate",
      description:
        "Completed Bachelor's degree, laying foundation for software development career",
      icon: "🎓",
      gradient: "from-teal-500 to-emerald-400",
    },
  ];

  return (
    <section className="py-32 bg-base-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-7xl font-black mb-8 bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent"
          >
            My Journey
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base-content/70 text-2xl max-w-3xl mx-auto font-light"
          >
            A timeline of my professional growth and key milestones
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-secondary to-primary"
          />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              className={`flex items-center mb-20 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                }`}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    rotate: [0, 1, -1, 0],
                  }}
                  transition={{
                    rotate: {
                      repeat: Infinity,
                      duration: 0.5,
                    },
                  }}
                  className={`p-8 rounded-2xl bg-base-200/90 backdrop-blur-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 relative overflow-hidden group`}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to right, ${
                        item.gradient.split(" ")[1]
                      }, ${item.gradient.split(" ")[3]})`,
                    }}
                  />
                  <div className="flex items-center gap-4 mb-4 justify-end">
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-5xl"
                    >
                      {item.icon}
                    </motion.span>
                    <span className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-base-content/70 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>

              {/* Center dot */}
              <div className="w-2/12 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.4 }}
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg relative"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full bg-primary/30"
                  />
                </motion.div>
              </div>

              {/* Empty space for alignment */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
