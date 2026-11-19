import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-rail">
        <span>INDEPENDENT DIGITAL STUDIO</span>
        <span>STRATEGY / DESIGN / ENGINEERING</span>
        <span>01—06</span>
      </div>

      <div className="hero-main">
        <div className="hero-title">
          <div className="hero-pre">
            <span className="live-dot" />
            BUILT AROUND YOUR NEXT MOVE
          </div>

            <h1>
            We make
            <br />
            <span>ideas</span>
            <br />
            <i>matter.</i>
            </h1>
        </div>

        <div className="hero-aside">
          <div className="aside-rule" />

          <p>
            Metacap partners with ambitious businesses to build, launch,
            and look after the digital products they depend on.
          </p>

          <a
            className="circle-link"
            href="#selected"
            aria-label="Explore our work"
          >
            <ArrowDown size={18} />
          </a>

          <span className="aside-caption">SCROLL TO EXPLORE</span>
        </div>
      </div>

      <div className="hero-art">
        <div className="art-noise" />

        <div className="hero-art-caption cap-left">
          A GOOD IDEA
          <br />
          DESERVES GOOD EXECUTION.
        </div>

        <div className="hero-art-caption cap-right">
          METACAP / DIGITAL SYSTEMS
          <br />
          FIELD NOTES 001
        </div>

        <div className="sculpture">
          <div className="sculpture-disc disc-1" />
          <div className="sculpture-disc disc-2" />
          <div className="sculpture-disc disc-3" />

          <div className="sculpture-center">
            M<span>↗</span>
          </div>

          <div className="sculpture-cross" />
        </div>

        <div className="hero-art-bottom">
          <span>IDEA → EXPERIENCE → IMPACT</span>
          <span>DESIGNED TO MOVE BUSINESS FORWARD</span>
        </div>
      </div>

      <div className="hero-end">
        <p>
          Good technology isn’t the destination.
          <br />
          <strong>It’s what gets you there.</strong>
        </p>


      </div>
    </section>
  );
}