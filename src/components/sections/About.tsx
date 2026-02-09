"use client";

export default function About() {
  const skills = [
    { category: "AI & ML", items: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision"] },
    { category: "Backend", items: ["Node.js", "Python", "FastAPI", "SpringBoot", "Golang"] },
    { category: "MLOps", items: ["MLflow", "TensorBoard", "Weights & Biases", "Hugging Face"] }
  ];

  return (
    <section id="about" className="container-minimal border-t border-border pt-16">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">About</h2>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              I'm a full-stack developer and AI engineer with over 5 years of experience 
              building intelligent applications that solve real-world problems. My work 
              spans from machine learning models to scalable backend systems.
            </p>
            <p>
              I specialize in creating seamless integrations between AI technologies and 
              modern web applications, with a focus on performance, scalability, and user 
              experience.
            </p>
            <p>
              Currently based in Kigali, Rwanda, I work with clients worldwide to bring 
              their ideas to life through clean code and innovative solutions.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-3">
                <div className="text-sm font-semibold opacity-80">
                  {skillGroup.category}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
