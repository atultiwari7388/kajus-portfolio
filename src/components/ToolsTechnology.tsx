export default function ToolsTechnology() {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-600 font-medium mb-4">
            My Tech Stack
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tools & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The powerful technologies I use to build exceptional digital
            experiences
          </p>
        </div>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Frontend Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 group">
            <div className="h-3 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl">
                  ⚛️
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Frontend
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    name: "Flutter",
                    icon: "📱",
                    color:
                      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
                  },
                  {
                    name: "Next.js",
                    icon: "▲",
                    color:
                      "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
                  },
                  {
                    name: "React",
                    icon: "⚛️",
                    color:
                      "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400",
                  },
                  {
                    name: "Tailwind",
                    icon: "🎨",
                    color:
                      "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400",
                  },
                  {
                    name: "TypeScript",
                    icon: "📘",
                    color:
                      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
                  },
                  {
                    name: "GetX",
                    icon: "✨",
                    color:
                      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
                  },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className={`flex items-center gap-2 p-2 rounded-lg ${tech.color} transition-all duration-200 hover:scale-[1.03]`}
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 group">
            <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 text-2xl">
                  🚀
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Backend
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    name: "Firebase",
                    icon: "🔥",
                    color:
                      "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
                  },
                  {
                    name: "Cloud Functions",
                    icon: "☁️",
                    color:
                      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
                  },
                  {
                    name: "REST APIs",
                    icon: "🔌",
                    color:
                      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
                  },
                  {
                    name: "Google Maps",
                    icon: "🗺️",
                    color:
                      "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
                  },
                  {
                    name: "Push Notifications",
                    icon: "🔔",
                    color:
                      "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
                  },
                  {
                    name: "Node.js",
                    icon: "🟢",
                    color:
                      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
                  },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className={`flex items-center gap-2 p-2 rounded-lg ${tech.color} transition-all duration-200 hover:scale-[1.03]`}
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 group">
            <div className="h-3 bg-gradient-to-r from-green-500 to-teal-500"></div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 text-2xl">
                  🛠️
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Tools
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    name: "VS Code",
                    icon: "💻",
                    color:
                      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
                  },
                  {
                    name: "Git/GitHub",
                    icon: "📚",
                    color:
                      "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
                  },
                  {
                    name: "Figma",
                    icon: "🎨",
                    color:
                      "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
                  },
                  {
                    name: "Postman",
                    icon: "📡",
                    color:
                      "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
                  },
                  {
                    name: "Android Studio",
                    icon: "🤖",
                    color:
                      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
                  },
                  {
                    name: "Jira",
                    icon: "📊",
                    color:
                      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
                  },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className={`flex items-center gap-2 p-2 rounded-lg ${tech.color} transition-all duration-200 hover:scale-[1.03]`}
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto p-8">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-yellow-500">🌟</span>
            Specialized Skills
          </h3>

          <div className="flex flex-wrap gap-4">
            {[
              "State Management (GetX, Provider)",
              "UI/UX Design",
              "API Integration",
              "Firebase Services",
              "Google Maps Integration",
              "Push Notifications",
              "Payment Gateways",
              "Performance Optimization",
              "Clean Architecture",
              "Debugging",
            ].map((skill) => (
              <div
                key={skill}
                className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
