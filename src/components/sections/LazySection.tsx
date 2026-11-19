"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Services = dynamic(() => import("@/components/sections/Services"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Process = dynamic(() => import("@/components/sections/Process"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

type SectionName = "services" | "projects" | "process" | "contact";

export default function LazySection({
  section,
}: {
  section: SectionName;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px",
        threshold: 0,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {loaded && section === "services" && <Services />}
      {loaded && section === "projects" && <Projects />}
      {loaded && section === "process" && <Process />}
      {loaded && section === "contact" && <Contact />}
    </div>
  );
}