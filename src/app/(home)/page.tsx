/* eslint-disable @next/next/no-img-element */
"use client";

import HeroComponent from "@/components/HeroComponent";
import { motion, useMotionValue, useSpring } from "framer-motion";
import AboutComponent from "@/components/AboutComponent";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import ProjectsComp from "@/components/ProjectsComp";
import AchievementsComp from "@/components/AchievementsComp";
import Contact from "@/components/Contact";
import ResumeExperience from "@/components/ResumeExperience";
import Footer from "@/components/Footer";
import FollowMe from "@/components/FollowMe";
import { useEffect, useState } from "react";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import PersonalInterest from "@/components/PersonalInterest";
import TimeLine from "@/components/TimeLine";
import ToolsTechnology from "@/components/ToolsTechnology";

export default function Home() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const moveCursor = (e: MouseEvent) => {
        cursorX.set(e.clientX - 16);
        cursorY.set(e.clientY - 16);
      };

      const handleScroll = () => {
        if (window.scrollY > 400) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }
      };

      window.addEventListener("mousemove", moveCursor);
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("mousemove", moveCursor);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [cursorX, cursorY]);

  const handleDownloadCV = () => {
    if (typeof window !== "undefined") {
      const link = document.createElement("a");
      link.href = "/my_resume.pdf";
      link.download = "my_resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const scrollToSection = (id: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="scroll-smooth">
      {/* Custom cursor */}
      <motion.div
        className="fixed w-8 h-8 bg-primary/30 rounded-full mix-blend-difference pointer-events-none z-50"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
      />
      <Header scrollToSection={scrollToSection} />
      <HeroComponent handleDownloadCV={handleDownloadCV} />
      <AboutComponent />
      <ProjectsComp />
      <Skills />
      <ProfessionalExperience />
      <AchievementsComp />
      <ToolsTechnology />
      <TimeLine />
      <ResumeExperience handleDownloadCV={handleDownloadCV} />
      <PersonalInterest />
      <Contact />
      <FollowMe />
      <Footer />
      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary rounded-full shadow-lg hover:bg-primary/80 transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </main>
  );
}
