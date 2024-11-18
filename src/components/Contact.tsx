import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-base-100 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [0.9, 1.1, 0.9],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-20 w-96 h-96 rounded-full border-4 border-dashed border-primary/20 blur-sm"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1.1, 0.9, 1.1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-20 w-[32rem] h-[32rem] rounded-full border-4 border-dashed border-secondary/20 blur-sm"
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out.
            I&apos;m always excited to collaborate on interesting ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 space-y-6"
          >
            {/* Email Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-2xl">
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
              className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-2xl">
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
              className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl">
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
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-2 p-8 rounded-3xl bg-gradient-to-br from-primary/5 via-base-100/50 to-secondary/5 shadow-xl border border-primary/10 backdrop-blur-lg"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.01 }} className="group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 rounded-xl bg-base-100/50 border-2 border-primary/10 focus:border-primary/30 focus:outline-none backdrop-blur-sm group-hover:shadow-lg transition-all duration-300"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }} className="group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 rounded-xl bg-base-100/50 border-2 border-primary/10 focus:border-primary/30 focus:outline-none backdrop-blur-sm group-hover:shadow-lg transition-all duration-300"
                  />
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.01 }} className="group">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-4 rounded-xl bg-base-100/50 border-2 border-primary/10 focus:border-primary/30 focus:outline-none backdrop-blur-sm group-hover:shadow-lg transition-all duration-300"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.01 }} className="group">
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full p-4 rounded-xl bg-base-100/50 border-2 border-primary/10 focus:border-primary/30 focus:outline-none backdrop-blur-sm group-hover:shadow-lg transition-all duration-300 resize-none"
                ></textarea>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
