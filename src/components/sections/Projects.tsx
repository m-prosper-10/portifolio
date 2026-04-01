"use client";

import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="container-minimal pt-8">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Projects</h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project._id} className="group">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 border-none hover:border-none"
                >
                  <span className="font-semibold text-lg min-w-fit decoration-none border-b border-transparent group-hover:border-foreground transition-colors">
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
