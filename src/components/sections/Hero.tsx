"use client";

import ThemeToggle from "@/components/ThemeToggle";

export default function Hero() {
  return (
    <section id="hero" className="container-minimal pt-8 pb-8 relative">
      <div className="absolute top-8 right-6">
        <ThemeToggle />
      </div>
      <div className="space-y-8 max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter leading-tight">
          Mugisha Prosper
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed">
          AI Engineer and Full-Stack Developer designing scalable systems and 
          modern web experiences that feel fast, polished, and reliable.
        </p>

        <div className="flex items-center gap-6 pt-4 text-sm font-medium">
          <a
            href="https://github.com/m-prosper-10"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-foreground transition-colors"
            aria-label="GitHub"
          >
            Github
          </a>
          <a
            href="https://gitlab.com/MugishaProsper"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-foreground transition-colors"
            aria-label="GitLab"
          >
            Gitlab
          </a>
          <a
            href="mailto:nelsonprox92@gmail.com"
            className="hover:border-foreground transition-colors"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
