export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Core technologies and skills I specialize in
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
              <span className="text-blue-600">📱</span>
              Mobile & Web Development
            </h3>

            <div className="space-y-6">
              {[
                { name: "Flutter", level: 90 },
                { name: "Dart", level: 85 },
                { name: "Next.js", level: 75 },
                { name: "Firebase", level: 80 },
                { name: "GetX State Management", level: 85 },
                { name: "Tailwind CSS", level: 70 },
                { name: "API Integration", level: 80 },
                { name: "Google Maps", level: 75 },
              ].map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
              <span className="text-purple-600">🌟</span>
              Professional Skills
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Problem Solving", icon: "🧩" },
                { name: "Clean Code", icon: "✨" },
                { name: "UI/UX Design", icon: "🎨" },
                { name: "API Design", icon: "🔌" },
                { name: "Debugging", icon: "🐛" },
                { name: "Performance", icon: "⚡" },
                { name: "Testing", icon: "🧪" },
                { name: "Documentation", icon: "📝" },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors flex items-center gap-3"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
            <span className="text-green-600">🛠️</span>
            Tools & Technologies
          </h3>

          <div className="flex flex-wrap gap-4">
            {[
              "Firebase Auth",
              "Cloud Firestore",
              "Cloud Functions",
              "Push Notifications",
              "Google Maps API",
              "REST APIs",
              "Git/GitHub",
              "VS Code",
              "Android Studio",
              "Figma",
              "Postman",
              "Jira",
              "Agile Methodologies",
            ].map((tool) => (
              <div
                key={tool}
                className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
