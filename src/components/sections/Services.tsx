import { ArrowUpRight, Code2, Layers, LifeBuoy } from "lucide-react";

const capabilities = [
  {
    n: "01",
    title: "Websites that work",
    sub: "Business websites · Landing pages",
    desc: "We design and build websites that explain what you do, earn trust, and turn visitors into customers.",
    icon: Code2,
  },
  {
    n: "02",
    title: "Digital products",
    sub: "Web apps · MVPs · Platforms",
    desc: "We turn ideas into working products. From the first version to full-scale platforms, we build software that solves real problems.",
    icon: Layers,
  },
  {
    n: "03",
    title: "Support and maintenance",
    sub: "Updates · Security · Performance",
    desc: "We maintain your products after launch. We fix issues, improve performance, and keep your software up to date.",
    icon: LifeBuoy,
  },
];

export default function Services() {
  return (
    <section
      id="capabilities"
      className="bg-[#f5f4ef] px-6 py-16 text-[#171815] md:px-12 md:py-20 lg:px-[7%]"
    >
      <div className="mx-auto w-full">
        {/* Header */}
        <header className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="mb-5 block font-mono text-[9px] tracking-[1.1px] text-[#85877d]">
              03 / CAPABILITIES
            </span>

            <h2 className="font-display text-[clamp(3.4rem,7.2vw,7.5rem)] font-medium leading-[0.86] tracking-[-0.075em]">
              From idea
              <br />
              to{" "}
              <em className="font-serif text-[#68816b]">
                reality.
              </em>
            </h2>
          </div>

          <p className="max-w-[340px] text-[13px] leading-[1.8] text-[#777970] md:col-span-4 md:col-start-9 md:ml-auto md:pb-1 md:text-[14px]">
            We design, build, and maintain digital products for businesses
            that want to move forward.
          </p>
        </header>

        {/* Services */}
        <div className="mt-12 border-t border-[#dedfd7] md:mt-16">
          {capabilities.map(({ n, title, sub, desc, icon: Icon }) => (
            <article
              key={n}
              className="group grid grid-cols-12 items-start gap-3 border-b border-[#dedfd7] py-6 transition-colors duration-300 hover:bg-[#eeede6]/50 md:items-center md:py-8"
            >
              {/* Number */}
              <span className="col-span-1 pt-1 font-mono text-[9px] tracking-wide text-[#96988e]">
                {n}
              </span>

              {/* Icon */}
              <div className="col-span-2 flex h-10 w-10 items-center justify-center rounded-full border border-[#d8dbd0] text-[#718967] transition-all duration-300 group-hover:border-[#244b3b] group-hover:bg-[#244b3b] group-hover:text-[#f5f4ef] md:col-span-1 md:h-11 md:w-11">
                <Icon size={18} strokeWidth={1.35} />
              </div>

              {/* Content */}
              <div className="col-span-9 md:col-span-6 md:col-start-3">
                <div className="flex flex-col gap-1.5 md:flex-row md:items-baseline md:gap-5">
                  <h3 className="font-display text-[23px] font-medium tracking-[-0.055em] text-[#171815] transition-colors duration-300 group-hover:text-[#58745a] md:text-[27px] lg:text-[32px]">
                    {title}
                  </h3>

                  <span className="font-mono text-[9px] tracking-[0.15px] text-[#8b8d83] md:text-[9px]">
                    {sub}
                  </span>
                </div>

                <p className="mt-2.5 max-w-[570px] text-[12px] leading-[1.75] text-[#777970] md:mt-3 md:text-[13px] md:leading-[1.8]">
                  {desc}
                </p>
              </div>

              {/* Arrow */}
              <div className="col-span-12 flex justify-end md:col-span-1 md:col-start-12">
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.4}
                  className="text-[#7e8976] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#244b3b]"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-6 flex flex-col gap-2.5 font-mono text-[8px] tracking-[1px] text-[#898b81] sm:flex-row sm:items-center sm:justify-between md:mt-9">
          <span>BUILT FOR BUSINESS</span>
          <span>DESIGN / DEVELOPMENT / SUPPORT</span>
        </footer>
      </div>
    </section>
  );
}