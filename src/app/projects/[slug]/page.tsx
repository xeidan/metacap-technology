
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { notFound } from "next/navigation";

type Project = {
  number: string;
  name: string;
  category: string;
  status: string;
  headline: string;
  description: string;
  image: string;
  alt: string;
  website: string;
  websiteLabel: string;
  overview: string;
  problem: string;
  approach: string;
  features: {
    title: string;
    description: string;
  }[];
  technology: string[];
  next: string;
};

const projects: Record<string, Project> = {
  rebox: {
    number: "01",
    name: "REBOX",
    category: "DEVICE INTELLIGENCE",
    status: "PRODUCT IN DEVELOPMENT",
    headline: "Every device has a story.",
    description:
      "Building a smarter way to discover, verify, understand, and trade devices.",
    image: "/images/projects/rebox.png",
    alt: "REBOX device intelligence platform interface",
    website: "https://rebox.ng",
    websiteLabel: "rebox.ng",
    overview:
      "REBOX is a technology platform focused on bringing trust and intelligence to the device marketplace. We are building tools that make device information more accessible and device transactions more informed.",
    problem:
      "Buying and selling devices can be uncertain. Device identity, condition, specifications, and value are often difficult to verify, leaving both buyers and sellers exposed to misinformation.",
    approach:
      "REBOX combines device identification, verification, diagnostics, and market intelligence to create a more transparent device experience.",
    features: [
      {
        title: "Device identification",
        description:
          "Identify devices using technical identifiers and structured device information.",
      },
      {
        title: "Verification intelligence",
        description:
          "Make device information easier to validate and understand before a transaction.",
      },
      {
        title: "Device diagnostics",
        description:
          "Explore device information and diagnostic capabilities designed to support better decisions.",
      },
      {
        title: "Device marketplace",
        description:
          "Bring discovery, device information, and commerce closer together.",
      },
    ],
    technology: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
    ],
    next: "earnrave",
  },

  earnrave: {
    number: "02",
    name: "EARNRAVE",
    category: "TRADING TECHNOLOGY",
    status: "PRODUCT IN DEVELOPMENT",
    headline: "Trade with intention.",
    description:
      "A trading companion built to help traders analyse, track, learn, and improve.",
    image: "/images/projects/earnrave.png",
    alt: "EarnRave trading platform interface",
    website: "https://earnrave.com",
    websiteLabel: "earnrave.com",
    overview:
      "EarnRave is a trading technology platform bringing market insights, trade journaling, performance analytics, and AI-assisted tools into one experience. Its goal is to help traders develop a more structured and informed trading process.",
    problem:
      "Traders often lack a consistent system for recording decisions, analysing performance, learning from mistakes, and understanding their behaviour across trades.",
    approach:
      "EarnRave combines trading education, market insights, journaling, analytics, and intelligent assistance into a unified platform for continuous improvement.",
    features: [
      {
        title: "Trading journal",
        description:
          "Record trades, strategies, setups, and decisions in a structured trading journal.",
      },
      {
        title: "Market insights",
        description:
          "Follow market analysis, educational content, and trading ideas.",
      },
      {
        title: "AI trading assistant",
        description:
          "Explore AI-powered tools designed to support analysis and trading review.",
      },
      {
        title: "Performance tracking",
        description:
          "Review trading activity, recognise patterns, and evaluate performance.",
      },
    ],
    technology: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AI",
    ],
    next: "dngt",
  },

  dngt: {
    number: "03",
    name: "DNGT",
    category: "DIGITAL ASSET ECOSYSTEM",
    status: "ECOSYSTEM DEVELOPMENT",
    headline: "Participation in a new digital economy.",
    description:
      "Developing a digital asset ecosystem centred around access, distribution, and community participation.",
    image: "/images/projects/dngt.png",
    alt: "DNGT digital asset ecosystem interface",
    website: "https://dngt.io",
    websiteLabel: "dngt.io",
    overview:
      "DNGT is a digital asset ecosystem exploring token infrastructure, distribution, and community participation. The project combines blockchain technology with a framework designed for ecosystem access and growth.",
    problem:
      "Digital asset projects need more than a token. They require transparent infrastructure, clear distribution mechanisms, and meaningful ways for communities to participate.",
    approach:
      "DNGT is developing a token-based ecosystem supported by smart contracts and structured participation mechanisms.",
    features: [
      {
        title: "Token ecosystem",
        description:
          "A fixed-supply digital asset designed to underpin the ecosystem.",
      },
      {
        title: "Distribution framework",
        description:
          "Structured token distribution mechanisms built around defined participation criteria.",
      },
      {
        title: "Community participation",
        description:
          "Mechanisms designed to connect community participation with ecosystem development.",
      },
      {
        title: "Blockchain infrastructure",
        description:
          "Smart contract technology supporting token functionality and ecosystem operations.",
      },
    ],
    technology: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Solidity",
      "Foundry",
      "Reown",
    ],
    next: "rebox",
  },
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug];

  if (!project) notFound();

  const nextProject = projects[project.next];

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="overflow-hidden bg-[#f5f4ef] text-[#171815]">
        {/* PROJECT HERO */}
        <section className="pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="page-container">
            <Link
              href="/#selected"
              className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.8px] text-[#777970] transition-colors hover:text-[#171815]"
            >
              <ArrowLeft size={13} />
              BACK TO SELECTED WORK
            </Link>

            {/* PROJECT METADATA */}
            <div className="mt-12 flex items-center justify-between border-y border-[#dedfd7] py-4 md:mt-16">
              <span className="font-mono text-[9px] tracking-[0.8px] text-[#777970]">
                PROJECT / {project.number}
              </span>

              <span className="font-mono text-[9px] tracking-[0.8px] text-[#777970]">
                {project.category}
              </span>
            </div>

            {/* PROJECT IDENTITY + IMAGE */}
            <div className="grid grid-cols-1 gap-12 pt-10 md:grid-cols-12 md:items-center md:gap-10 md:pt-16">
              {/* LEFT: PROJECT IDENTITY */}
              <div className="md:col-span-6">
                <h1 className="font-display text-[clamp(3.8rem,9vw,8.5rem)] font-medium leading-[0.85] tracking-[-0.085em]">
                  {project.name}
                </h1>

                <h2 className="mt-8 max-w-[620px] font-display text-[clamp(2rem,4.2vw,4.5rem)] leading-[0.98] tracking-[-0.065em]">
                  {project.headline}
                </h2>

                <p className="mt-6 max-w-[480px] text-[13px] leading-7 text-[#555950] md:text-[14px] md:leading-8">
                  {project.description}
                </p>

                {/* STATUS */}
                <div className="mt-7 flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#41632f]" />

                  <span className="font-mono text-[9px] tracking-[0.7px] text-[#555950]">
                    {project.status}
                  </span>
                </div>

                {/* EXTERNAL WEBSITE */}
                    <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-fit max-w-full min-h-12 items-center gap-3 rounded-full bg-[#171815] px-8 py-5 font-mono text-[10px] tracking-[0.7px] text-[#f5f4ef] transition-colors hover:bg-[#41632f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#41632f]"
                    >
                    <span className="whitespace-nowrap text-[#f5f4ef]">
                        VISIT {project.websiteLabel.toUpperCase()}
                    </span>

                    <ExternalLink size={15} className="shrink-0 text-[#f5f4ef]" />
                    </a>
              </div>

              {/* RIGHT: PROJECT IMAGE */}
              <div className="md:col-span-6 md:pl-4">
                <div className="relative mx-auto w-full max-w-[600px] overflow-hidden border border-[#dedfd7] bg-white">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={1400}
                    height={1000}
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-auto w-full object-contain"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between font-mono text-[8px] tracking-[0.7px] text-[#777970]">
                  <span>PROJECT PREVIEW</span>
                  <span>{project.number} / 03</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="border-t border-[#dedfd7] py-16 md:py-24">
          <div className="page-container">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
              {/* SECTION LABEL */}
              <div className="md:col-span-3">
                <span className="font-mono text-[9px] tracking-[1px] text-[#777970]">
                  01 / OVERVIEW
                </span>
              </div>

              {/* SECTION CONTENT */}
              <div className="md:col-span-9">
                <h2 className="max-w-[750px] font-display text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.94] tracking-[-0.065em]">
                  Technology with{" "}
                  <span className="font-serif font-normal italic text-[#41632f]">
                    purpose.
                  </span>
                </h2>

                <p className="mt-8 max-w-[680px] text-[14px] leading-7 text-[#555950] md:text-[15px] md:leading-8">
                  {project.overview}
                </p>

                {/* CHALLENGE + APPROACH */}
                <div className="mt-14 grid grid-cols-1 gap-10 border-t border-[#dedfd7] pt-8 sm:grid-cols-2 sm:gap-8">
                  <div>
                    <span className="font-mono text-[9px] tracking-[0.8px] text-[#777970]">
                      THE CHALLENGE
                    </span>

                    <p className="mt-4 text-[13px] leading-7 text-[#555950] md:text-[14px]">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[9px] tracking-[0.8px] text-[#777970]">
                      THE APPROACH
                    </span>

                    <p className="mt-4 text-[13px] leading-7 text-[#555950] md:text-[14px]">
                      {project.approach}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="bg-[#eeede6] py-16 md:py-24">
          <div className="page-container">
            {/* SECTION HEADING */}
            <header className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end md:gap-10">
              <div className="md:col-span-7">
                <span className="font-mono text-[9px] tracking-[1px] text-[#777970]">
                  02 / CORE CAPABILITIES
                </span>

                <h2 className="mt-6 font-display text-[clamp(2.8rem,6vw,6.5rem)] leading-[0.9] tracking-[-0.075em]">
                  What we&apos;re
                  <br />
                  building
                  <span className="font-serif font-normal italic text-[#41632f]">
                    .
                  </span>
                </h2>
              </div>

              <div className="md:col-span-5 md:ml-auto">
                <p className="max-w-[360px] text-[13px] leading-7 text-[#555950] md:text-[14px]">
                  A closer look at the core capabilities shaping the product.
                </p>
              </div>
            </header>

            {/* CAPABILITY LIST */}
            <div className="mt-12 border-t border-[#d5d6ce] md:mt-16">
              {project.features.map((feature, index) => (
                <article
                  key={feature.title}
                  className="grid grid-cols-1 gap-4 border-b border-[#d5d6ce] py-6 sm:grid-cols-12 sm:items-start sm:gap-5 md:py-8"
                >
                  <span className="font-mono text-[9px] text-[#777970] sm:col-span-1">
                    0{index + 1}
                  </span>

                  <h3 className="font-display text-[21px] leading-tight tracking-[-0.04em] sm:col-span-4 md:text-[28px]">
                    {feature.title}
                  </h3>

                  <p className="max-w-[460px] text-[13px] leading-7 text-[#555950] sm:col-span-7 sm:ml-auto md:text-[14px]">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section className="bg-[#171815] py-16 text-[#f5f4ef] md:py-24">
          <div className="page-container">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-4">
                <span className="font-mono text-[9px] tracking-[1px] text-[#85877d]">
                  03 / TECHNOLOGY
                </span>

                <h2 className="mt-6 font-display text-[clamp(2.5rem,4.5vw,4.8rem)] leading-[0.94] tracking-[-0.065em]">
                  Built with
                  <br />
                  <span className="font-serif font-normal italic text-[#c3f36b]">
                    intention.
                  </span>
                </h2>
              </div>

              <div className="md:col-span-8 md:pt-8">
                <p className="max-w-[620px] text-[13px] leading-7 text-[#a0a398] md:text-[14px]">
                  We choose technologies based on what each product needs —
                  prioritising reliability, performance, maintainability, and
                  room to grow.
                </p>

                {/* TECH STACK */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technology.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/15 px-4 py-3 font-mono text-[9px] tracking-[0.4px] text-[#f5f4ef]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEXT PROJECT */}
        <section className="py-16 md:py-24">
          <div className="page-container">
            <span className="font-mono text-[9px] tracking-[1px] text-[#777970]">
              NEXT PROJECT / {nextProject.number}
            </span>

            <Link
              href={`/projects/${project.next}`}
              className="group mt-6 block border-y border-[#dedfd7] py-8 transition-colors hover:border-[#b5c99c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#41632f] md:py-12"
            >
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="font-mono text-[9px] tracking-[0.8px] text-[#777970]">
                    {nextProject.category}
                  </p>

                  <h2 className="mt-4 font-display text-[clamp(3rem,8vw,8rem)] font-medium leading-[0.85] tracking-[-0.08em] transition-colors group-hover:text-[#41632f]">
                    {nextProject.name}
                  </h2>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#dedfd7] transition-all group-hover:border-[#c3f36b] group-hover:bg-[#c3f36b] md:h-16 md:w-16">
                  <ArrowUpRight
                    size={20}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>

            <Link
              href="/#selected"
              className="mt-8 inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.8px] text-[#777970] transition-colors hover:text-[#171815] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#41632f]"
            >
              <ArrowLeft size={13} aria-hidden="true" />
              ALL PROJECTS
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
