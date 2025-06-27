export default function ProfessionalExperience() {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Journey
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My career growth and expertise in mobile development, problem
            solving, and continuous learning
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title:
                "Flutter Developer at Mylext Infotech (Feb 2023 - Present)",
              description:
                "Specialized in implementing complex REST APIs, Firebase integration, Cloud Functions, Google Maps, and Push Notifications. Built scalable mobile applications with real-time features and location-based services.",
              icon: "📱",
              highlight: "Mobile Development",
              color: "bg-blue-600",
            },
            {
              title: "Independent Problem Solver",
              description:
                "Self-reliant developer capable of resolving complex technical challenges independently using resources like Stack Overflow, ChatGPT, and documentation. Strong debugging and troubleshooting skills with a solution-oriented mindset.",
              icon: "🔍",
              highlight: "Problem Solving",
              color: "bg-purple-600",
            },
            {
              title: "Technical Expertise",
              description:
                "Proficient in state management, custom animations, payment gateway integration, social auth, and deployment automation. Experienced in optimizing app performance and implementing clean architecture patterns.",
              icon: "⚡",
              highlight: "Advanced Skills",
              color: "bg-amber-600",
            },
            {
              title: "Modern Web Development Journey",
              description:
                "Currently mastering Next.js 13, React 18, and Framer Motion for creating stunning web experiences. Focused on server components, app router, and advanced animations to build performant and engaging applications.",
              icon: "🚀",
              highlight: "Learning Next.js & React",
              color: "bg-green-600",
            },
            {
              title: "Full Stack Development",
              description:
                "Expanding expertise in MERN stack (MongoDB, Express.js, React, Node.js) development. Building full-stack applications with modern features like real-time updates, authentication, and cloud deployment.",
              icon: "🔋",
              highlight: "MERN Stack",
              color: "bg-red-600",
            },
            {
              title: "Health & Wellness Focus",
              description:
                "Maintaining a healthy work-life balance through regular outdoor activities. Passionate about cricket, running, and gym workouts. Believe in the strong connection between physical fitness and mental clarity for optimal productivity.",
              icon: "🏃",
              highlight: "Active Lifestyle",
              color: "bg-teal-600",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`h-2 ${item.color}`}></div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {item.description}
                </p>

                <span
                  className={`inline-block px-4 py-2 ${item.color} text-white rounded-full text-sm font-medium`}
                >
                  {item.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
