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
      <div className="relative isolate flex h-[480px] items-center justify-center overflow-hidden border-y border-black/5 bg-[radial-gradient(ellipse_at_50%_48%,#dcecb9_0%,#b8d58f_30%,#90ad71_58%,#dce3d3_100%)] max-[768px]:h-[340px] max-[650px]:h-[330px]">
        {/* Texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#171815_0.7px,transparent_0.7px)] [background-size:4px_4px]" />

        {/* Elliptical artwork rings */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rotate-[34deg] scale-y-[0.48] rounded-full border border-[#ffffff70]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rotate-[-32deg] scale-y-[0.42] rounded-full border border-[#ffffff45]" />

        {/* Top captions */}
        <div className="absolute left-7 top-[27px] z-10 font-mono text-[10px] leading-4 tracking-[0.8px] text-[#777970] max-[768px]:left-[15px] max-[768px]:top-[15px] max-[768px]:text-[7px]">
          A GOOD IDEA
          <br />
          DESERVES GOOD EXECUTION.
        </div>

        <div className="absolute right-7 top-[27px] z-10 text-right font-mono text-[10px] leading-4 tracking-[0.8px] text-[#777970] max-[768px]:right-[15px] max-[768px]:top-[15px] max-[768px]:text-[7px]">
          METACAP / DIGITAL SYSTEMS
          <br />
          FIELD NOTES 001
        </div>

        {/* Sculpture */}
        <div className="relative flex aspect-square w-[310px] items-center justify-center max-[768px]:w-[230px]">
          {/* Disc 1 */}
          <div className="absolute inset-[5%] rounded-full border border-[#f9fff0a8] bg-[radial-gradient(circle_at_35%_28%,#faffdfcc,#c4df8c80_38%,#779a5d_75%)] shadow-[inset_-22px_-25px_40px_#55744444,0_25px_55px_#6e8c4c44]" />

          {/* Disc 2 */}
          <div className="absolute inset-[15%] rotate-[55deg] rounded-full border border-[#f9fff0a8] bg-[linear-gradient(110deg,#ffffff75,#829f5a35_40%,transparent_65%)] shadow-[0_0_35px_#5b78451c,inset_0_0_45px_#ffffff35]" />

          {/* Disc 3 */}
          <div className="absolute inset-[25%] rotate-[-42deg] rounded-full border border-[#ffffffd6] bg-[#dcebbd66] shadow-[0_0_35px_#5b78451c,inset_0_0_45px_#ffffff35]" />

          {/* Center mark */}
          <div className="relative z-[2] flex h-24 w-24 items-center justify-center rounded-full bg-[#244b3b] font-display text-4xl font-extrabold tracking-[-3px] text-[#f5f4ef] shadow-[0_15px_50px_rgba(36,75,59,0.18)] md:h-32 md:w-32 md:text-5xl">
            M
            <span className="absolute right-5 top-5 font-mono text-sm font-normal tracking-normal md:right-7 md:top-7 md:text-base">
              ↗
            </span>
          </div>

          {/* Cross detail */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#244b3b]/20" />
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#244b3b]/20" />
        </div>

        {/* Bottom captions */}
        <div className="absolute bottom-[21px] left-[25px] right-[25px] z-10 flex flex-col gap-2 font-mono text-[9px] tracking-[0.8px] text-[#777970] md:bottom-8 md:left-8 md:right-8 md:flex-row md:items-center md:justify-between max-[768px]:text-[6px]">
          <span>IDEA → EXPERIENCE → IMPACT</span>
          <span className="md:text-right max-[768px]:hidden">
            DESIGNED TO MOVE BUSINESS FORWARD
          </span>
        </div>
      </div>


    </section>
  );
}