"use client";

import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="container-minimal pt-4">
      <div className="">
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project._id} className="group">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4"
                >
                  <span className="font-semibold min-w-fit">
                    {project.projectName}
                  </span>
                  <span className="hidden sm:inline text-muted-foreground/30">—</span>
                  <span className="text-muted-foreground transition-colors leading-relaxed">
                    {project.projectDescription}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <a
            href="https://github.com/m-prosper-10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            See all on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
