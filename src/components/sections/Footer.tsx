"use client";

import { contactInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container-minimal pb-24">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
        <div>
          © {currentYear} Mugisha Prosper.
        </div>
        
        <div className="flex gap-8">
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors border-none">GitHub</a>
          <a href={contactInfo.gitlab} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors border-none">GitLab</a>
        </div>
      </div>
    </footer>
  );
}
