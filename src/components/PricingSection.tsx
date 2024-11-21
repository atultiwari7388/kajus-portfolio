export default function PricingSection() {
  return (
    <section className="py-20 bg-base-100 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(66,108,245,0.1),transparent_48%)]" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_20%,rgba(245,66,224,0.1),transparent_48%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
            Development Services
          </h2>
          <p className="text-base-content/70 text-lg md:text-xl max-w-3xl mx-auto">
            Choose the perfect tech stack and plan for your project needs
          </p>
        </div>

        {/* Flutter Development */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Cross Platform Mobile Development with Flutter
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-base-200/80 to-base-200/40 backdrop-blur-xl border-2 border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-blue-500 mb-2">Basic</h3>
                <div className="text-4xl font-bold mb-4">$2,999</div>
                <p className="text-base-content/70">Perfect for MVPs</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Basic UI/UX Design",
                  "5 Core Screens",
                  "Firebase Authentication",
                  "Basic Cloud Storage",
                  "Push Notifications",
                  "1 Month Support",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-blue-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 font-semibold transition-all">
                Get Started
              </button>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-base-200/80 to-base-200/40 backdrop-blur-xl border-2 border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-400/20 scale-105">
              <div className="text-center mb-8">
                <div className="text-cyan-400 text-sm font-bold mb-2">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                  Advanced
                </h3>
                <div className="text-4xl font-bold mb-4">$5,999</div>
                <p className="text-base-content/70">For growing apps</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Premium UI/UX Design",
                  "15+ Custom Screens",
                  "Social Authentication",
                  "Cloud Functions",
                  "Real-time Database",
                  "Payment Integration",
                  "Maps Integration",
                  "3 Months Support",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl bg-cyan-400 text-base-100 font-semibold hover:bg-cyan-400/90 transition-all">
                Get Started
              </button>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-base-200/80 to-base-200/40 backdrop-blur-xl border-2 border-blue-600/20 hover:border-blue-600/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-600/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  Enterprise
                </h3>
                <div className="text-4xl font-bold mb-4">Custom</div>
                <p className="text-base-content/70">For complex applications</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Custom UI/UX Design",
                  "Unlimited Screens",
                  "Advanced Security",
                  "Custom Backend",
                  "Analytics Dashboard",
                  "CI/CD Pipeline",
                  "Performance Optimization",
                  "6 Months Support",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-blue-600">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 text-blue-600 font-semibold transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* React/Next.js Development */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Modern Web Development with React/Next.js
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-base-200/80 to-base-200/40 backdrop-blur-xl border-2 border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-purple-500 mb-2">
                  Starter
                </h3>
                <div className="text-4xl font-bold mb-4">$3,999</div>
                <p className="text-base-content/70">For small businesses</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Next.js 13 App Router",
                  "5 Core Pages",
                  "Firebase Auth",
                  "Responsive Design",
                  "Basic SEO",
                  "1 Month Support",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-purple-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-500 font-semibold transition-all">
                Get Started
              </button>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-base-200/80 to-base-200/40 backdrop-blur-xl border-2 border-pink-500/20 hover:border-pink-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/20 scale-105">
              <div className="text-center mb-8">
                <div className="text-pink-500 text-sm font-bold mb-2">
                  RECOMMENDED
                </div>
                <h3 className="text-2xl font-bold text-pink-500 mb-2">
                  Professional
                </h3>
                <div className="text-4xl font-bold mb-4">$7,999</div>
                <p className="text-base-content/70">For growing businesses</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Next.js 13 with TypeScript",
                  "15+ Custom Pages",
                  "Social Auth",
                  "Firestore Database",
                  "Admin Dashboard",
                  "Payment Integration",
                  "Advanced Animations",
                  "3 Months Support",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-pink-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl bg-pink-500 text-base-100 font-semibold hover:bg-pink-500/90 transition-all">
                Get Started
              </button>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-base-200/80 to-base-200/40 backdrop-blur-xl border-2 border-purple-600/20 hover:border-purple-600/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-600/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-purple-600 mb-2">
                  Enterprise
                </h3>
                <div className="text-4xl font-bold mb-4">Custom</div>
                <p className="text-base-content/70">For large organizations</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Custom Architecture",
                  "Unlimited Pages",
                  "Custom Backend",
                  "Performance Optimization",
                  "Security Hardening",
                  "CI/CD Setup",
                  "Load Testing",
                  "6 Months Support",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-purple-600">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl bg-purple-600/10 hover:bg-purple-600/20 text-purple-600 font-semibold transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* MERN Stack Development */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
            Full Stack Development with MERN Stack
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-base-200/80 to-base-200/40 backdrop-blur-xl border-2 border-green-500/20 hover:border-green-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-green-500 mb-2">
                  Basic
                </h3>
                <div className="text-4xl font-bold mb-4">$4,999</div>
                <p className="text-base-content/70">For startups</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "MongoDB Setup",
                  "Express.js API",
                  "React Frontend",
                  "Basic Authentication",
                  "5 Core Features",
                  "1 Month Support",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl bg-green-500/10 hover:bg-green-500/20 text-green-500 font-semibold transition-all">
                Get Started
              </button>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-base-200/80 to-base-200/40 backdrop-blur-xl border-2 border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/20 scale-105">
              <div className="text-center mb-8">
                <div className="text-emerald-500 text-sm font-bold mb-2">
                  POPULAR CHOICE
                </div>
                <h3 className="text-2xl font-bold text-emerald-500 mb-2">
                  Advanced
                </h3>
                <div className="text-4xl font-bold mb-4">$8,999</div>
                <p className="text-base-content/70">For scaling businesses</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Advanced Database Design",
                  "RESTful API",
                  "Redux State Management",
                  "JWT Authentication",
                  "Admin Dashboard",
                  "File Upload",
                  "Email Integration",
                  "3 Months Support",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl bg-emerald-500 text-base-100 font-semibold hover:bg-emerald-500/90 transition-all">
                Get Started
              </button>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-base-200/80 to-base-200/40 backdrop-blur-xl border-2 border-green-600/20 hover:border-green-600/50 transition-all duration-500 hover:shadow-xl hover:shadow-green-600/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  Enterprise
                </h3>
                <div className="text-4xl font-bold mb-4">Custom</div>
                <p className="text-base-content/70">
                  For large scale applications
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Microservices Architecture",
                  "GraphQL Integration",
                  "Real-time Features",
                  "Load Balancing",
                  "Advanced Security",
                  "DevOps Setup",
                  "Performance Monitoring",
                  "6 Months Support",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl bg-green-600/10 hover:bg-green-600/20 text-green-600 font-semibold transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
