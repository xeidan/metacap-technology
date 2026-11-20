
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const footerLinks = [
  { label: "Services", href: "/#capabilities" },
  { label: "Selected work", href: "/#selected" },
  { label: "Our method", href: "/#method" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: Instagram,
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: null,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: Facebook,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/",
    icon: null,
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#171815] text-[#f5f4ef]">
      <div className="page-container pb-6 pt-12 md:pt-16">
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
            href="/#contact"
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

        {/* Socials */}
        <div className="flex flex-col gap-5 border-b border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[9px] tracking-[1.2px] text-[#85877d]">
            FOLLOW METACAP
          </span>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Metacap on ${social.label}`}
                  title={social.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#a0a398] transition-all duration-300 hover:border-[#c3f36b] hover:bg-[#c3f36b] hover:text-[#171815]"
                >
                  {social.label === "X" ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[15px] w-[15px] fill-current"
                      aria-hidden="true"
                    >
                      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.1l-4.8-6.3L6.8 22H3.6l7.3-8.4L1.9 2h6.2l4.4 5.8L18.9 2Zm-1.1 18h1.7L7.4 3.9H5.6L17.8 20Z" />
                    </svg>
                  ) : social.label === "TikTok" ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[17px] w-[17px] fill-current"
                      aria-hidden="true"
                    >
                      <path d="M19.4 8.3a6.7 6.7 0 0 1-4-1.3v7.1a5.8 5.8 0 1 1-5.8-5.8c.4 0 .8 0 1.2.1v3.2a2.6 2.6 0 1 0 1.5 2.3V2h3.2a6.7 6.7 0 0 0 4.7 4.9v3.3a9.8 9.8 0 0 1-0.8-.1Z" />
                    </svg>
                  ) : Icon ? (
                    <Icon
                      size={16}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : null}
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 pt-5 font-mono text-[9px] tracking-[0.4px] text-[#85877d] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Metacap Technology. All rights reserved.
          </p>

          <p className="md:text-right">
            Registered in Nigeria{" "}
            <span className="mx-1 text-[#c3f36b]">·</span> BN 7096516
          </p>
        </div>
      </div>
    </footer>
  );
}
