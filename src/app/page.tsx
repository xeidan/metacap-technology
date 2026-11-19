import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import LazySection from "@/components/sections/LazySection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <LazySection section="services" />
        <LazySection section="projects" />
        <LazySection section="process" />
        <LazySection section="contact" />
      </main>

      <Footer />
    </>
  );
}