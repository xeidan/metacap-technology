"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const projects = [
  {
    id: "01",
    slug: "rebox",
    name: "REBOX",
    description:
      "A platform for device discovery, verification, and commerce. Built to make buying and selling devices more informed.",
    status: "PRODUCT IN DEVELOPMENT",
    image: "/images/projects/rebox.png",
    alt: "REBOX device intelligence and marketplace product interface",
  },
  {
    id: "02",
    slug: "earnrave",
    name: "EARNRAVE",
    description:
      "A trading platform combining market insights, trade journaling, and AI tools to help traders make better decisions.",
    status: "PRODUCT IN DEVELOPMENT",
    image: "/images/projects/earnrave.png",
    alt: "EarnRave trading platform interface",
  },
  {
    id: "03",
    slug: "dngt",
    name: "DNGT",
    description:
      "A digital asset ecosystem focused on token distribution, community participation, and access.",
    status: "ECOSYSTEM DEVELOPMENT",
    image: "/images/projects/dngt.png",
    alt: "DNGT digital asset ecosystem project",
  },
];

export default function Projects() {
  return (
    <section
      id="selected"
      className="bg-[#171815] py-16 text-[#f5f4ef] md:py-20"
    >
      <div className="page-container">
        {/* Section header */}
        <Reveal>
          <header className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <span className="mb-5 block font-mono text-[9px] tracking-[1.1px] text-[#85877d]">
                04 / SELECTED WORK
              </span>

              <h2 className="font-display text-[clamp(3.2rem,7.2vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.075em]">
                Ideas, made{" "}
                <em className="font-serif font-normal text-[#c3f36b]">
                  real.
                </em>
              </h2>
            </div>

            <p className="max-w-[330px] font-sans text-[13px] leading-[1.8] text-[#a0a398] md:col-span-4 md:ml-auto md:pb-1 md:text-[14px]">
              We build our own products and turn ideas into working technology.
            </p>
          </header>
        </Reveal>

        {/* Projects */}
        <div className="mt-12 space-y-5 md:mt-16 md:space-y-7">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 100}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block"
                aria-label={`Explore ${project.name}`}
              >
                <article className="grid grid-cols-1 overflow-hidden border border-white/10 bg-[#20221e] transition-colors duration-500 group-hover:border-white/20 md:grid-cols-2">
                {/* Visual */}
                <div className="relative min-h-[280px] overflow-hidden bg-[#242620] md:min-h-0">
                <Image
                    src={project.image}
                    alt={project.alt}
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 transition-opacity duration-500 group-hover:from-black/20" />

                {/* Category */}
                <span className="absolute left-5 top-5 font-mono text-[9px] tracking-[0.8px] text-white/90 md:left-6 md:top-6">
                    {project.category}
                </span>

                {/* Project number */}
                <span className="absolute bottom-5 right-5 font-mono text-[9px] tracking-[0.8px] text-white/80 md:bottom-6 md:right-6">
                    PROJECT / {project.id}
                </span>
                </div>

                  {/* Project information */}
                  <div className="flex flex-col justify-between p-5 sm:p-6 md:p-7 lg:p-9">
                    {/* Meta */}
                    <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3 font-mono text-[8px] tracking-[0.7px] text-[#85877d] md:text-[9px]">
                      <span>{project.id} / METACAP PRODUCT</span>
                      <span className="text-right">{project.category}</span>
                    </div>

                    {/* Main copy */}
                    <div className="py-8 md:py-10 lg:py-12">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] font-medium leading-[0.9] tracking-[-0.075em] transition-colors duration-300 group-hover:text-[#c3f36b]">
                          {project.name}
                        </h3>

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#c3f36b] group-hover:bg-[#c3f36b]">
                          <ArrowUpRight
                            size={17}
                            strokeWidth={1.4}
                            className="text-[#c3f36b] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#171815]"
                          />
                        </div>
                      </div>

                      <p className="mt-4 max-w-[400px] font-sans text-[13px] leading-[1.8] text-[#a0a398] md:mt-5 md:text-[14px] md:leading-7">
                        {project.description}
                      </p>
                    </div>

                    {/* Bottom */}
                    <div className="flex flex-col gap-4 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                      <span className="flex items-center gap-2 font-mono text-[8px] tracking-[0.7px] text-[#a0a398] md:text-[9px]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#c3f36b]" />
                        {project.status}
                      </span>

                      <span className="inline-flex items-center gap-2 font-mono text-[8px] tracking-[0.7px] text-[#f5f4ef] transition-colors duration-300 group-hover:text-[#c3f36b] md:text-[9px]">
                        EXPLORE PROJECT
                        <ArrowUpRight
                          size={13}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Footer */}
        <Reveal>
          <footer className="mt-8 flex flex-col gap-2.5 border-t border-white/10 pt-4 font-mono text-[8px] tracking-[0.9px] text-[#85877d] sm:flex-row sm:items-center sm:justify-between md:mt-12">
            <span>INDEPENDENTLY BUILT BY METACAP</span>
            <span>DESIGN · ENGINEERING · PRODUCT</span>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}