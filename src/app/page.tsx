import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
