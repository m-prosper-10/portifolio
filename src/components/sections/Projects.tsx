"use client";

import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="container-minimal border-t border-border pt-16">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Projects</h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project._id} className="group">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 hover:no-underline"
                >
                  <span className="font-semibold text-lg min-w-fit decoration-muted-foreground/30 underline underline-offset-4 group-hover:decoration-foreground transition-colors">
                    {project.projectName}
                  </span>
                  <span className="hidden sm:inline text-muted-foreground/50">—</span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                    {project.projectDescription}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8">
          <a
            href="https://gitlab.com/MugishaProsper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:no-underline opacity-60 hover:opacity-100 transition-opacity"
          >
            See all projects on GitLab &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
