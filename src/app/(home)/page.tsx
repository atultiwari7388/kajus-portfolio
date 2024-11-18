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
import { useEffect } from "react";

export default function Home() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/my_resume.pdf";
    link.download = "my_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="scroll-smooth">
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
      <Skills />
      <ProjectsComp />
      <AchievementsComp />
      <Contact />
      <ResumeExperience handleDownloadCV={handleDownloadCV} />
      <FollowMe />
      <Footer />
    </main>
  );
}
