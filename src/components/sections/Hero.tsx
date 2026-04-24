"use client";

import ThemeToggle from "@/components/ThemeToggle";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="container-minimal relative">
      <div className="absolute top-8 right-6">
        <ThemeToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-7xl font-bold text-cold">
            Mugisha Prosper
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-muted-foreground tracking-tight">
            AI Engineer. Full-Stack Architect.
          </p>
        </div>

        <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
          <a
            href="https://github.com/m-prosper-10"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Github
          </a>
          <a
            href="https://gitlab.com/MugishaProsper"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Gitlab
          </a>
          <a
            href="mailto:nelsonprox92@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </motion.div>
    </section>
  );
}
