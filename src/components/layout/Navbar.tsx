
"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Selected Work", href: "/#selected" },
  { name: "Services", href: "/#capabilities" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setMenuOpen(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={menuRef}
      className="sticky top-0 z-50 w-full border-b border-black/[0.06] bg-[#f5f4ef]/95 text-[#171815] backdrop-blur-md"
    >
      {/* Main navbar */}
      <div className="page-container flex h-[80px] items-center justify-between">
        {/* Brand */}
        <a
          href="/"
          onClick={closeMenu}
          className="font-display text-[25px] font-extrabold tracking-[-1.5px] transition-opacity duration-300 hover:opacity-60"
        >
          <Image
            src="/images/brands/Group 6.svg"
            alt="Metacap Technology"
            width={120}
            height={100}
            priority
          />
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative py-2 font-sans text-[14px] font-normal text-[#777970] transition-colors duration-300 hover:text-[#171815]"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#41632f] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="/#contact"
          className="group hidden items-center gap-3 rounded-full bg-[#171815] py-2 pl-6 pr-2 font-sans text-[13px] font-medium transition-colors duration-300 hover:bg-[#244b3b] lg:inline-flex"
        >
          <span className="text-[#f5f4ef] transition-colors duration-300 group-hover:text-[#f5f4ef]">
            Let's talk
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f4ef] transition-all duration-300 group-hover:bg-[#f5f4ef]">
            <ArrowUpRight
              size={16}
              className="text-[#171815] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-colors duration-300 hover:bg-black/5 lg:hidden"
        >
          {menuOpen ? (
            <X size={19} strokeWidth={1.6} />
          ) : (
            <Menu size={19} strokeWidth={1.6} />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`grid transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-black/10 bg-[#171815] px-[var(--page-padding)] pb-6 pt-3 text-[#f5f4ef]">
            {/* Menu metadata */}
            <div className="flex items-center justify-between py-4 font-mono text-[11px] tracking-[1px] text-[#85877d]">
              <span>NAVIGATION</span>
              <span>METACAP / 2026</span>
            </div>

            {/* Links */}
            <nav aria-label="Mobile navigation">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-center justify-between border-t border-white/10 py-5 transition-colors duration-300 hover:text-[#c3f36b]"
                >
                  <span className="font-display text-[24px] font-medium tracking-[-0.5px]">
                    {link.name}
                  </span>

                  <span className="font-mono text-[11px] text-[#85877d] transition-colors group-hover:text-[#c3f36b]">
                    0{index + 1}
                  </span>
                </a>
              ))}
            </nav>

            {/* Mobile CTA */}
            <a
              href="/#contact"
              onClick={closeMenu}
              className="group mt-5 flex items-center justify-between rounded-full bg-[#c3f36b] px-6 py-4 text-[#171815] transition-colors duration-300 hover:bg-[#d0fa85]"
            >
              <span className="font-sans text-[15px] font-semibold text-[#171815]">
                Let's talk
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171815] transition-colors duration-300 group-hover:bg-[#244b3b]">
                <ArrowUpRight
                  size={18}
                  className="text-[#c3f36b] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>

            {/* Email & Phone */}
            <div className="mt-7 grid grid-cols-1 gap-3 border-t border-white/10 pt-5">
              <a
                href="mailto:hello@metacap.technology"
                className="font-sans text-[13px] text-[#c3f36b] transition-colors hover:text-[#f5f4ef]"
              >
                hello@metacap.technology
              </a>

              <a
                href="tel:+2349036901885"
                className="font-sans text-[13px] text-[#c3f36b] transition-colors hover:text-[#f5f4ef]"
              >
                +234 903 690 1885
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
