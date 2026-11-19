
import { ArrowRight, ArrowUpRight } from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Listen",
    label: "UNDERSTAND",
    description:
      "We learn about your business, your goals, your users, and the problem you need to solve.",
  },
  {
    number: "02",
    title: "Shape",
    label: "DEFINE",
    description:
      "We turn the brief into a clear plan. We define the scope, the experience, and what success means.",
  },
  {
    number: "03",
    title: "Make",
    label: "BUILD",
    description:
      "We design and build the product. You stay involved, see progress, and know what is happening.",
  },
  {
    number: "04",
    title: "Stay",
    label: "SUPPORT",
    description:
      "Launch is not the end. We maintain, improve, and support the product as your business grows.",
  },
];

export default function Process() {
  return (
    <section
      id="method"
      className="bg-[#f5f4ef] px-6 py-16 text-[#171815] md:px-12 md:py-20 lg:px-[7%]"
    >
      <div className="mx-auto w-full">
        {/* Header */}
        <header className="grid grid-cols-1 gap-7 md:grid-cols-12 md:items-end md:gap-6">
          <div className="md:col-span-7">
            <span className="mb-5 block font-mono text-[9px] tracking-[1.1px] text-[#85877d]">
              05 / OUR METHOD
            </span>

            <h2 className="font-display text-[clamp(2.8rem,6.2vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.075em]">
              Small enough
              <br />
              to care.{" "}
              <em className="font-serif font-normal text-[#68816b]">
                Serious
              </em>
              <br />
              enough to deliver.
            </h2>
          </div>

          <div className="flex flex-col items-start md:col-span-4 md:col-start-9 md:pb-1">
            <p className="max-w-[360px] text-[13px] leading-[1.8] text-[#777970] md:text-[14px]">
              We keep things clear, collaborative, and focused on the
              outcome. No unnecessary complexity. No disappearing halfway.
            </p>

            <a
              href="#contact"
              className="group mt-5 inline-flex items-center gap-3 text-[12px] font-medium text-[#171815]"
            >
              <span className="transition-colors duration-300 group-hover:text-[#68816b]">
                Start a conversation
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d5d7ce] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#244b3b] group-hover:bg-[#244b3b] group-hover:text-[#f5f4ef]">
                <ArrowRight size={14} strokeWidth={1.5} />
              </span>
            </a>
          </div>
        </header>

        {/* Process stages */}
        <div className="mt-12 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 lg:gap-6">
          {stages.map((stage) => (
            <article
              key={stage.number}
              className="group flex min-h-[235px] flex-col border-t border-[#d8d9d1] pt-4 transition-colors duration-300 hover:border-[#244b3b] md:min-h-[250px]"
            >
              {/* Stage metadata */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] tracking-[0.5px] text-[#85877d]">
                  {stage.number}
                </span>

                <span className="font-mono text-[8px] tracking-[0.9px] text-[#85877d]">
                  {stage.label}
                </span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.4}
                  className="text-[#85877d] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#244b3b]"
                />
              </div>

              {/* Stage content */}
              <div className="mt-8 md:mt-10">
                <h3 className="font-display text-[32px] font-medium leading-none tracking-[-0.065em] transition-colors duration-300 group-hover:text-[#68816b] md:text-[38px]">
                  {stage.title}
                </h3>

                <p className="mt-3 max-w-[290px] text-[12px] leading-[1.8] text-[#777970] md:text-[13px] md:leading-6">
                  {stage.description}
                </p>
              </div>

              {/* Progress line */}
              <div className="mt-auto pt-7">
                <div className="h-px w-full bg-[#dedfd7]">
                  <div className="h-px w-0 bg-[#244b3b] transition-all duration-500 ease-out group-hover:w-full" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-8 flex flex-col gap-2.5 border-t border-[#dedfd7] pt-4 font-mono text-[8px] tracking-[0.9px] text-[#85877d] sm:flex-row sm:items-center sm:justify-between md:mt-12">
          <span>THOUGHTFUL FROM START TO FINISH</span>
          <span>01 — 04 / THE METACAP PROCESS</span>
        </footer>
      </div>
    </section>
  );
}
