import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full overflow-hidden px-[var(--page-padding)] pt-[34px] pb-[70px] max-[768px]:pt-6 max-[768px]:pb-[50px]">
      {/* Top information rail */}
      <div className="flex animate-[heroFadeUp_0.7s_ease_both] items-center justify-between gap-5 font-mono text-[10px] tracking-[1px] text-[#777b72] max-[768px]:text-[9px]">
        <span>INDEPENDENT DIGITAL STUDIO</span>

        <span className="max-[768px]:hidden">
          STRATEGY / DESIGN / ENGINEERING
        </span>

        <span>01—06</span>
      </div>

      {/* Main hero */}
      <div className="grid grid-cols-[minmax(0,1fr)_290px] items-end gap-10 pt-[75px] pb-[65px] max-[1100px]:grid-cols-[minmax(0,1fr)_250px] max-[1100px]:gap-[35px] max-[768px]:grid-cols-1 max-[768px]:items-start max-[768px]:gap-[38px] max-[768px]:pt-[85px] max-[768px]:pb-[60px] max-[480px]:pt-[72px] max-[480px]:gap-8">
        {/* Heading */}
        <div className="min-w-0">
          <div className="mb-[30px] flex animate-[heroFadeUp_0.7s_ease_both] items-center gap-[13px] font-mono text-[10px] tracking-[1px] text-[#777b72] max-[768px]:mb-[26px] max-[768px]:text-[9px] max-[480px]:tracking-[0.8px]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#41632f] shadow-[0_0_0_4px_rgba(195,243,107,0.3)]" />
            BUILT AROUND YOUR NEXT MOVE
          </div>

          <h1 className="animate-[heroFadeUp_0.9s_ease_both] font-display text-[clamp(76px,9.4vw,148px)] font-extrabold leading-[0.86] tracking-[-0.095em] max-[1100px]:text-[clamp(76px,10vw,120px)] max-[768px]:text-[clamp(76px,15vw,120px)] max-[768px]:leading-[0.88] max-[768px]:tracking-[-0.085em] max-[480px]:text-[clamp(66px,16.5vw,90px)]">
            We make
            <br />
            <span className="inline-block text-[#68816b]">ideas</span>
            <br />
            <i className="inline-block font-serif font-normal italic tracking-[-0.075em] text-[#33372f]">
              matter.
            </i>
          </h1>
        </div>

        {/* Aside */}
        <div className="max-w-[290px] justify-self-end pb-3 animate-[heroFadeUp_0.8s_ease_both] max-[1100px]:max-w-[250px] max-[768px]:mt-[38px] max-[768px]:max-w-[400px] max-[768px]:justify-self-start max-[768px]:pb-0 max-[480px]:mt-8">
          <div className="mb-[25px] h-0.5 w-[46px] bg-[#68818b]" />

          <p className="mb-7 font-sans text-[14px] font-normal leading-7 text-[#777b72] md:text-[15px] md:leading-8">
            Metacap partners with ambitious businesses to build, launch,
            and look after the digital products they depend on.
          </p>

          <a
            href="#selected"
            aria-label="Explore our work"
            className="grid h-12 w-12 place-items-center rounded-full border border-black/15 text-[#171815] transition-all duration-300 hover:-translate-y-1 hover:bg-[#244b3b] hover:text-[#f5f4ef]"
          >
            <ArrowDown size={18} />
          </a>

          <span className="mt-4 block font-mono text-[9px] tracking-[1.2px] text-[#85877d]">
            SCROLL TO EXPLORE
          </span>
        </div>
      </div>

{/* Hero artwork */}
<div className="relative mt-0 w-full overflow-hidden border-y border-black/5 bg-[#eeede6]">
  <picture className="block w-full">
    <source
      media="(max-width: 767px)"
      srcSet="/images/brands/metacap-hero-mobile.png"
    />

    <img
      src="/images/brands/metacap-hero-desktop.png"
      alt="Metacap digital landscape"
      className="block aspect-[2.35/1] w-full object-cover object-center max-[767px]:aspect-square"
    />
  </picture>
</div>
    </section>
  );
}