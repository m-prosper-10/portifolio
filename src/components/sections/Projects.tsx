"use client";

import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="container-minimal">
      <div className="space-y-2">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Projects
        </h2>
        <div className="space-y-2">
          {projects.map((project) => (
            <a
              key={project._id}
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row gap-1">
                <span className="font-medium">{project.projectName}</span>
                <span className="text-muted-foreground">&rarr;</span>
                <span className="text-muted-foreground">
                  {project.projectDescription}
                </span>
              </div>
            </a>
          ))}
        </div>

        <a
          href="https://github.com/m-prosper-10"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors pt-2"
        >
          See all on GitHub →
        </a>
      </div>
    </section>
  );
}
