import { ArrowUpRight, Asterisk } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f5f4ef] px-6 py-16 text-[#171815] md:px-12 md:py-24 lg:px-[7%]"
    >
      <div className="mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#85877d]">
            07 / MAKE SOMETHING MATTER
          </span>

          <Asterisk
            size={30}
            strokeWidth={1}
            className="animate-[spin_20s_linear_infinite] text-[#68816b]"
            aria-hidden="true"
          />
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-10 pt-12 md:grid-cols-12 md:gap-6 md:pt-16 lg:pt-20">
          {/* Heading */}
          <div className="md:col-span-8">
            <h2 className="font-display text-[clamp(3.5rem,8vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.075em]">
              Your next move
              <br />
              starts{" "}
              <span className="font-serif italic font-normal text-[#68816b]">
                here.
              </span>
            </h2>
          </div>

          {/* Contact column */}
          <div className="flex flex-col items-start md:col-span-4 md:col-start-9 md:pt-4 lg:pt-8">
            <p className="max-w-[360px] font-sans text-[14px] leading-7 text-[#777970] md:text-[15px]">
              Have a project to build, a product to improve, or a problem
              to solve? We can help you move forward.
            </p>

            {/* CTA */}
            <a
              href="mailto:hello@metacap.technology?subject=Project%20Enquiry%20-%20Metacap"
              className="group mt-7 inline-flex items-center gap-8 rounded-full bg-[#171815] px-5 py-3.5 font-sans text-[13px] font-medium text-[#f5f4ef] transition-all duration-300 hover:bg-[#244b3b]"
            >
              <span className="text-[#f5f4ef]" >Start a conversation</span>
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 text-[#f5f4ef]"
              />
            </a>

            {/* Email */}
            <div className="mt-12 w-full border-t border-black/10 pt-4 md:mt-14">
              <span className="mb-3 block font-mono text-[9px] tracking-[1.2px] text-[#85877d]">
                EMAIL
              </span>

              <a
                href="mailto:hello@metacap.technology"
                className="font-sans text-[11px] font-medium tracking-[0.2px] transition-colors duration-300 hover:text-[#68816b] sm:text-xs"
              >
                HELLO@METACAP.TECHNOLOGY
              </a>
            </div>

            {/* Careers */}
            <div className="mt-6 w-full border-t border-black/10 pt-4">
              <span className="mb-3 block font-mono text-[9px] tracking-[1.2px] text-[#85877d]">
                CAREERS
              </span>

              <a
                href="mailto:careers@metacap.technology?subject=Career%20Enquiry"
                className="font-sans text-[11px] font-medium tracking-[0.2px] transition-colors duration-300 hover:text-[#68816b] sm:text-xs"
              >
                CAREER ENQUIRIES ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-14 flex items-center justify-between border-t border-black/10 pt-4 md:mt-20">
          <span className="font-mono text-[9px] tracking-[1px] text-[#85877d]">
            BUILT FOR BUSINESS
          </span>
          <span className="font-mono text-[9px] tracking-[1px] text-[#85877d]">
            DESIGN / DEVELOPMENT / SUPPORT
          </span>
        </div>
      </div>
    </section>
  );
}