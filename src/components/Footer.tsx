import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-base-100 to-base-200 border-t border-primary/10 relative overflow-hidden py-16">
      {/* Animated background elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [0.9, 1.1, 0.9],
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
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-20 w-[32rem] h-[32rem] rounded-full border-4 border-dashed border-secondary/20 blur-sm"
      />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block text-4xl font-extrabold font-serif italic tracking-wider bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-4 drop-shadow-lg transform hover:rotate-3 transition-transform"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                WebkitTextStroke: "1px rgba(255,255,255,0.1)",
              }}
            >
              kaju
            </motion.div>
            <p className="text-base-content/70 max-w-sm">
              Crafting digital experiences with passion and precision.
              Let&apos;s build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-4">
              <motion.a
                whileHover={{ x: 5, color: "hsl(var(--p))" }}
                href="#home"
                className="transition-all duration-300 hover:text-primary flex items-center justify-center md:justify-start gap-2"
              >
                <span className="text-primary">→</span> Home
              </motion.a>
              <motion.a
                whileHover={{ x: 5, color: "hsl(var(--p))" }}
                href="#projects"
                className="transition-all duration-300 hover:text-primary flex items-center justify-center md:justify-start gap-2"
              >
                <span className="text-primary">→</span> Projects
              </motion.a>
              <motion.a
                whileHover={{ x: 5, color: "hsl(var(--p))" }}
                href="#contact"
                className="transition-all duration-300 hover:text-primary flex items-center justify-center md:justify-start gap-2"
              >
                <span className="text-primary">→</span> Contact
              </motion.a>
              <motion.a
                whileHover={{ x: 5, color: "hsl(var(--p))" }}
                href="#about"
                className="transition-all duration-300 hover:text-primary flex items-center justify-center md:justify-start gap-2"
              >
                <span className="text-primary">→</span> About
              </motion.a>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Stay Updated
            </h3>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="input border-primary/20 bg-base-200/50 backdrop-blur-lg focus:border-primary transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/10">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-base-content/70 font-medium"
          >
            © {new Date().getFullYear()} Kaju. All rights reserved.
          </motion.div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="#"
              className="text-base-content/70 hover:text-primary transition-all duration-300"
            >
              Terms
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="#"
              className="text-base-content/70 hover:text-primary transition-all duration-300"
            >
              Privacy
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="#"
              className="text-base-content/70 hover:text-primary transition-all duration-300"
            >
              Cookies
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
