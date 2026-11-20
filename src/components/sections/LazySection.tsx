"use client";

import { useEffect, useRef, useState } from "react";

type SectionName = "services" | "projects" | "process" | "contact";

export default function LazySection({
  section,
}: {
  section: SectionName;
})  {
  const ref = useRef<HTMLDivElement>(null);
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const loadSection = async () => {
      switch (section) {
        case "services":
          const Services = (await import("./Services")).default;
          setComponent(() => Services);
          break;

        case "projects":
          const Projects = (await import("./Projects")).default;
          setComponent(() => Projects);
          break;

        case "process":
          const Process = (await import("./Process")).default;
          setComponent(() => Process);
          break;

        case "contact":
          const Contact = (await import("./Contact")).default;
          setComponent(() => Contact);
          break;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadSection();
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [section]);

  return (
    <div ref={ref} className="min-h-[50px]">
      {Component && <Component />}
    </div>
  );
}