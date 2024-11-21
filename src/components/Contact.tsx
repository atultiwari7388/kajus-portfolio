import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-base-100 relative overflow-hidden"
    >
      {/* Simple background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let&apos;s Create Together
          </h2>
          <p className="text-base-content/70 text-xl max-w-3xl mx-auto">
            Whether you have a project in mind or just want to explore
            possibilities, I&apos;m here to help turn your ideas into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Info Cards */}
          <div className="col-span-1 space-y-6">
            {/* Email Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-base-200 hover:bg-base-300 transition-colors border border-primary/10 hover:border-primary/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                  📧
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">Email</h3>
                  <a
                    href="mailto:atult8556@gmail.com"
                    className="text-base-content/70 hover:text-primary transition-colors"
                  >
                    atult8556@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-base-200 hover:bg-base-300 transition-colors border border-secondary/10 hover:border-secondary/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-2xl">
                  📱
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary">
                    Phone
                  </h3>
                  <a
                    href="tel:+918960290289"
                    className="text-base-content/70 hover:text-secondary transition-colors"
                  >
                    +91 8960290289
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-base-200 hover:bg-base-300 transition-colors border border-primary/10 hover:border-primary/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Location
                  </h3>
                  <p className="text-base-content/70">Chandigarh, India</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Work With Me Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-2 p-8 rounded-3xl bg-base-200 border border-primary/10 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Work With Me
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-xl bg-base-100 border-2 border-primary/10 focus:border-primary/30 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 rounded-xl bg-base-100 border-2 border-primary/10 focus:border-primary/30 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Service Type
                </label>
                <select className="w-full p-3 rounded-xl bg-base-100 border-2 border-primary/10 focus:border-primary/30 focus:outline-none transition-colors">
                  <option value="">Select a service</option>
                  <option value="web">Web Development</option>
                  <option value="web">MERN Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="fullstack">Full Stack Development</option>
                  <option value="consulting">Flutter with Firebase</option>
                  <option value="consulting">React with Firebase</option>
                  <option value="consulting">Nextjs with Firebase</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Budget Range
                </label>
                <select className="w-full p-3 rounded-xl bg-base-100 border-2 border-primary/10 focus:border-primary/30 focus:outline-none transition-colors">
                  <option value="">Select budget range</option>
                  <option value="small">$100 - $500</option>
                  <option value="medium">$500 - $1000</option>
                  <option value="large">$2000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Timeline
                </label>
                <select className="w-full p-3 rounded-xl bg-base-100 border-2 border-primary/10 focus:border-primary/30 focus:outline-none transition-colors">
                  <option value="">Select timeline</option>
                  <option value="urgent">Less than 1 month</option>
                  <option value="normal">1-3 months</option>
                  <option value="relaxed">3+ months</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full p-3 rounded-xl bg-base-100 border-2 border-primary/10 focus:border-primary/30 focus:outline-none resize-none transition-colors"
                  placeholder="Tell me about your project requirements and goals..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Send Proposal
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
