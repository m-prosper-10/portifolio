import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
