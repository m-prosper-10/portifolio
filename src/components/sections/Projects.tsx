"use client";

import { projects } from "@/lib/data";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="container-minimal !py-0">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground/30">
          Projects
        </h2>

        <ol className="space-y-4 text-xl sm:text-2xl leading-relaxed">
          {projects.map((project, index) => (
            <li key={project.name} className="flex flex-wrap items-baseline gap-3">
              <span className="text-muted-foreground/40 text-sm sm:text-base font-bold tracking-[0.3em] uppercase">
                {String(index + 1).padStart(2, "0")}
              </span>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium hover:underline decoration-1 underline-offset-8 transition-colors"
                >
                  {project.name}
                </a>
              ) : (
                <span className="text-foreground font-medium">{project.name}</span>
              )}
            </li>
          ))}
        </ol>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Visit my{" "}
          <a
            href="https://github.com/m-prosper-10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-medium hover:underline decoration-1 underline-offset-8 transition-colors"
          >
            GitHub collection of projects
          </a>
          .
        </p>
      </motion.div>
    </section>
  );
}
