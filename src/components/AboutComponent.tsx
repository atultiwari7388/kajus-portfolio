/* eslint-disable @next/next/no-img-element */
export default function AboutComponent() {
  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-blue-600 uppercase">
            Professional Profile
          </span>
          <h2 className="text-4xl font-bold mt-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Flutter & Next.js Developer
              </h3>

              <p className="text-lg text-gray-600 dark:text-gray-300">
                I specialize in building cross-platform mobile applications with
                Flutter and modern web applications with Next.js. With 2.5 years
                of professional experience, I&apos;ve delivered high-quality
                solutions for clients across various industries.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300">
                My expertise includes integrating Firebase services,
                implementing state management solutions, and creating responsive
                UIs that work seamlessly across all devices.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Technical Skills
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: "Flutter", color: "bg-blue-100 text-blue-800" },
                  { name: "Dart", color: "bg-blue-100 text-blue-800" },
                  { name: "Firebase", color: "bg-amber-100 text-amber-800" },
                  { name: "Next.js", color: "bg-gray-100 text-gray-800" },
                  { name: "React", color: "bg-cyan-100 text-cyan-800" },
                  { name: "TypeScript", color: "bg-blue-100 text-blue-800" },
                  { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-800" },
                  { name: "GetX", color: "bg-green-100 text-green-800" },
                  { name: "REST APIs", color: "bg-purple-100 text-purple-800" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className={`px-4 py-2 rounded-lg ${skill.color} font-medium text-center`}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/n_img_2.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl rotate-12 flex items-center justify-center shadow-lg z-10 text-white p-4">
              <div className="text-center">
                <span className="text-3xl font-bold block">2.5+</span>
                <p className="text-xs font-medium">
                  Years of Development Experience
                </p>
              </div>
            </div>

            <div className="absolute -left-6 top-1/4 w-20 h-20 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-700">
              <span className="text-3xl">📱</span>
            </div>

            <div className="absolute -right-6 bottom-1/4 w-16 h-16 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-700">
              <span className="text-2xl">🌐</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-200">
            My Development Approach
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-blue-600 text-3xl mb-4">🧠</div>
              <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">
                Problem Solving
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                I focus on understanding core problems before implementing
                solutions, ensuring efficient and maintainable code.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-blue-600 text-3xl mb-4">✨</div>
              <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">
                Clean Code
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                I write clean, modular code following best practices and design
                patterns for better maintainability.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-blue-600 text-3xl mb-4">🚀</div>
              <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">
                Performance
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                I optimize applications for performance and smooth user
                experiences across all devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
