"use client";

import { contactInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container-minimal pt-20 pb-3">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-[12px] font-bold uppercase text-muted-foreground">
        <div className="flex items-center gap-4">
          <span>© {currentYear}</span>
          <span>Mugisha Prosper</span>
        </div>
        
        <div className="flex gap-8">
          <a 
            href={contactInfo.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-foreground/50 transition-colors"
          >
            GitHub
          </a>
          <a 
            href={contactInfo.gitlab} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-foreground/50 transition-colors"
          >
            GitLab
          </a>
          <a 
            href={`mailto:${contactInfo.email}`}
            className="hover:text-foreground/50 transition-colors"
          >
            Mail
          </a>
        </div>
      </div>
    </footer>
  );
}
