"use client";

import { Github, Gitlab, Mail } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Hero() {
  return (
    <section id="hero" className="container-minimal pt-24 pb-16 relative">
      <div className="absolute top-8 right-6">
        <ThemeToggle />
      </div>
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter leading-tight">
          I&apos;m Mugisha Prosper
        </h1>

        <div className="p-20 flex justify-center items-center">
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I design and ship AI‑powered products, scalable backend systems, and
            modern web experiences that feel fast, polished, and reliable.
          </p>
        </div>

        <div className="flex items-center gap-5 pt-8">
          <a
            href="https://github.com/m-prosper-10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors flex flex-row items-center justify-center gap-2"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
            Github
          </a>
          <a
            href="https://gitlab.com/MugishaProsper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors flex flex-row items-center justify-center gap-2"
            aria-label="GitLab"
          >
            <Gitlab className="w-5 h-5" />
            Gitlab
          </a>
          <a
            href="mailto:nelsonprox92@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors flex flex-row items-center justify-center gap-2"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
