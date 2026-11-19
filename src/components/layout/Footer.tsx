import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "#capabilities" },
  { label: "Selected work", href: "#selected" },
  { label: "Our method", href: "#method" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#171815] text-[#f5f4ef]">
      <div className="mx-auto w-full px-6 pb-6 pt-12 md:px-12 md:pt-16 lg:px-[7%]">
        {/* Brand */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between md:pb-12">
          <div>
            <span className="font-mono text-[9px] tracking-[1.3px] text-[#a0a398]">
              METACAP TECHNOLOGY
            </span>

            <h2 className="mt-4 font-display text-3xl font-medium leading-none tracking-[-0.06em] md:text-5xl">
              We make digital work{" "}
              <span className="font-serif italic font-normal text-[#c3f36b]">
                matter.
              </span>
            </h2>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 font-sans text-xs text-[#f5f4ef] transition-colors duration-300 hover:text-[#c3f36b]"
          >
            Start a project
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#c3f36b] group-hover:bg-[#c3f36b] group-hover:text-[#171815]">
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </div>

        {/* Information grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 border-b border-white/10 py-8 md:grid-cols-4 md:gap-8 md:py-10">
          {/* Contact */}
          <div className="flex flex-col items-start gap-3">
            <span className="mb-1 font-mono text-[9px] tracking-[1.2px] text-[#c3f36b]">
              CONTACT
            </span>

            <a
              href="mailto:hello@metacap.technology"
              className="font-sans text-xs text-[#c4c6bc] transition-colors duration-300 hover:text-white md:text-[13px]"
            >
              hello@metacap.technology
            </a>

            <a
              href="tel:+2349036901885"
              className="font-sans text-xs text-[#c4c6bc] transition-colors duration-300 hover:text-white md:text-[13px]"
            >
              0903 690 1885
            </a>
          </div>

          {/* Explore */}
          <div className="flex flex-col items-start gap-3">
            <span className="mb-1 font-mono text-[9px] tracking-[1.2px] text-[#c3f36b]">
              EXPLORE
            </span>

            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-xs text-[#c4c6bc] transition-all duration-300 hover:translate-x-1 hover:text-white md:text-[13px]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Location */}
          <div className="flex flex-col items-start gap-3">
            <span className="mb-1 font-mono text-[9px] tracking-[1.2px] text-[#c3f36b]">
              LOCATION
            </span>

            <span className="font-sans text-xs text-[#c4c6bc] md:text-[13px]">
              Abuja, Nigeria
            </span>

            <span className="font-sans text-xs text-[#c4c6bc] md:text-[13px]">
              GMT+1
            </span>
          </div>

          {/* Availability */}
          <div className="flex flex-col items-start gap-3">
            <span className="mb-1 font-mono text-[9px] tracking-[1.2px] text-[#c3f36b]">
              AVAILABILITY
            </span>

            <span className="font-sans text-xs text-[#c4c6bc] md:text-[13px]">
              Replies within 24 hours
            </span>

            <span className="font-sans text-xs text-[#c4c6bc] md:text-[13px]">
              on working days.
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 pt-5 font-mono text-[9px] tracking-[0.4px] text-[#85877d] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Metacap Technology. All rights reserved.
          </p>

          <p className="md:text-right">
            Registered in Nigeria <span className="mx-1 text-[#c3f36b]">·</span>{" "}
            BN 7096516
          </p>
        </div>
      </div>
    </footer>
  );
}