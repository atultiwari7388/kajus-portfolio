export default function TimeLine() {
  const timelineData = [
    {
      year: "2024",
      title: "Full Stack Developer Journey",
      description:
        "Began exploring MERN stack development after working with React & Next.js. Built Rabbit Service project with Firebase.",
      icon: "🚀",
      color: "bg-blue-500",
    },
    {
      year: "2023",
      title: "Flutter Developer at Mylext Infotech",
      description:
        "Secured position as Junior Flutter Developer, worked on multiple client projects, code refactoring and feature development",
      icon: "💼",
      color: "bg-purple-500",
    },
    {
      year: "2022",
      title: "Growth & Learning Phase",
      description:
        "Pursued MCA at JS University Sikhobad while interviewing across major tech hubs - Bangalore, Indore, Chennai, Hyderabad, Delhi and Mohali",
      icon: "📚",
      color: "bg-green-500",
    },
    {
      year: "2021",
      title: "First Job at Awiskar Technology",
      description:
        "Started career journey in Vizag (City of Destiny) at a startup. Despite challenges, gained valuable experience working with supportive colleagues",
      icon: "💻",
      color: "bg-amber-500",
    },
    {
      year: "2020",
      title: "Met Someone Special",
      description:
        "First time I saw her smile and I remember I don't know her name but I call her green mask pink bag. Named her Devsena for her strong attitude that I admire. She became my inspiration and motivation to grow.",
      icon: "💝",
      color: "bg-pink-500",
    },
    {
      year: "2021",
      title: "Computer Science Graduate",
      description:
        "Completed Bachelor's degree, laying foundation for software development career",
      icon: "🎓",
      color: "bg-teal-500",
    },
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Journey
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Key milestones in my professional and personal growth
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } mb-12 last:mb-0`}
            >
              {/* Timeline content */}
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-3 justify-end">
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-xl font-bold text-gray-800 dark:text-white">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="w-2/12 flex justify-center">
                <div
                  className={`w-6 h-6 rounded-full ${item.color} shadow-md relative z-10`}
                >
                  <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
                </div>
              </div>

              {/* Empty space for alignment */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
