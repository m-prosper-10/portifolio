"use client";

import { contactInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container-minimal border-t border-border py-12">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-muted-foreground uppercase tracking-widest">
        <div>
          © {currentYear} Mugisha Prosper.
        </div>
        
        <div className="flex gap-6">
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors hover:no-underline">GitHub</a>
          <a href={contactInfo.gitlab} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors hover:no-underline">GitLab</a>
          <a href={`mailto:${contactInfo.email}`} className="hover:text-foreground transition-colors hover:no-underline">Email</a>
        </div>
      </div>
    </footer>
  );
}
