import { ChevronRight, Download, Github, Instagram, LinkedinIcon } from "lucide-react";
import ShinyButton from "./ui/ShinyButton";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/TextGenerate";

const HeroSection = () => {
  return (
    <div className="text-black dark:text-white">
      <div className="h-screen w-full dark:bg-dark-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.06] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div
        className="pb-20 pt-36 sm:p-0 sm:min-h-screen flex flex-col items-center justify-center relative"
        id="#home"
      >
        <div className="flex flex-col justify-center items-center relative z-10 text-center">
          <TextGenerateEffect
            words="Code, Connect, Create."
            className="text-[40px] md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-snug tracking-wide text-black dark:text-white"
          />
          <p className="pt-5 pb-8 text-sm sm:text-base md:text-lg text-dark-200 dark:text-stone-200/70">
            Hi, 👋 I&apos;m Kiran, Full Stack Developer.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <ShinyButton icon={<ChevronRight />}>
              <Link href="#work">See My Work</Link>
            </ShinyButton>
            <a
              href="/resume/Kiran_s_Resume 22-01-2025.pdf"
              download
              className="flex items-center gap-2.5 group"
            >
              <Download className="text-black dark:text-primary" />
              <span className="group-hover:text-white/70 transition-colors duration-200 font-semibold">
                Download CV
              </span>
            </a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex gap-6 mt-8">
          <a 
              href="https://linkedin.com/in/kiran-t-shibu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-200 dark:text-stone-200/70 hover:text-primary dark:hover:text-primary transition-colors duration-200"
            >
              <LinkedinIcon size={24} />
            </a>
            <a 
              href="https://github.com/git-kirants" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-200 dark:text-stone-200/70 hover:text-primary dark:hover:text-primary transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://instagram.com/ig_kirants" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-200 dark:text-stone-200/70 hover:text-primary dark:hover:text-primary transition-colors duration-200"
            >
              <Instagram size={24} />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;