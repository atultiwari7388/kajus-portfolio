export default function PersonalInterest() {
  const personalInterests = [
    {
      icon: "🏃",
      title: "Holistic Wellness",
      description:
        "Dedicated to physical and mental strength through daily workouts, meditation, and positive mindset",
      color: "bg-green-500",
    },
    {
      icon: "🧘",
      title: "Spiritual Growth",
      description:
        "Practicing gratitude, daily prayers, and spreading positivity while avoiding negativity",
      color: "bg-blue-500",
    },
    {
      icon: "🌿",
      title: "Nature Explorer",
      description:
        "Finding peace and inspiration through nature walks, hiking, and connecting with the environment",
      color: "bg-purple-500",
    },
    {
      icon: "💪",
      title: "Personal Development",
      description:
        "Focused on becoming mentally stronger, making better decisions, and maintaining honesty and integrity",
      color: "bg-red-500",
    },
    {
      icon: "❤️",
      title: "Spreading Love",
      description:
        "Committed to sharing love, kindness and positive energy with everyone around me",
      color: "bg-pink-500",
    },
    {
      icon: "🎯",
      title: "Mindful Living",
      description:
        "Practicing digital detox, avoiding social media distractions, and living more consciously",
      color: "bg-amber-500",
    },
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Passions & Interests
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            What fuels my creativity and keeps me balanced beyond coding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalInterests.map((interest, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`h-2 ${interest.color}`}></div>
              <div className="p-8">
                <div className="text-5xl mb-6">{interest.icon}</div>
                <h3
                  className={`text-2xl font-bold text-gray-800 dark:text-white mb-4`}
                >
                  {interest.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
