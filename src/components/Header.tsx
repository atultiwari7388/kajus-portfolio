import { motion } from "framer-motion";
import { SwitchTheme } from "./SwitchTheme";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 mx-2 mt-2 rounded-xl border border-base-300 flex items-center justify-between px-4 py-4 bg-base-100/80 backdrop-blur-sm shadow-lg"
    >
      <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:from-secondary hover:to-primary transition-all duration-500">
          Atul Tiwari
        </h3>
      </motion.div>

      <div className="hidden md:flex items-center">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <motion.li whileHover={{ scale: 1.1 }}>
            <button
              onClick={() => scrollToSection("home")}
              className="btn btn-ghost rounded-lg"
            >
              Home
            </button>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <button
              onClick={() => scrollToSection("about")}
              className="btn btn-ghost rounded-lg"
            >
              About
            </button>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <button
              onClick={() => scrollToSection("projects")}
              className="btn btn-ghost rounded-lg"
            >
              Projects
            </button>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn btn-ghost rounded-lg"
            >
              Contact
            </button>
          </motion.li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <SwitchTheme />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn rounded-lg relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-80"></div>
          <span
            onClick={() => scrollToSection("contact")}
            className="relative text-white"
          >
            Contact Me
          </span>
        </motion.button>
      </div>
    </motion.nav>
  );
}
