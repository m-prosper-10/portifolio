"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="container-minimal !py-0">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground/30">
          Source
        </h2>
        
        <div className="group">
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
            I maintain a collection of open-source projects and experiments on my 
            <a 
              href="https://github.com/m-prosper-10" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground font-bold hover:underline decoration-1 underline-offset-8 transition-all px-2"
            >
              GitHub
            </a>. 
            For professional inquiries or specific case studies, feel free to reach out.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
