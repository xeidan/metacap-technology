import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "REBOX",
    category: "DEVICE INTELLIGENCE",
    description:
      "A platform for device discovery, verification, and commerce. Built to make buying and selling devices more informed.",
    status: "PRODUCT IN DEVELOPMENT",
    theme: "rebox",
    type: "device",
  },
  {
    number: "02",
    name: "EARNRAVE",
    category: "TRADING TECHNOLOGY",
    description:
      "A trading platform built around market insights, trade journaling, and AI tools to help traders make better decisions.",
    status: "PRODUCT IN DEVELOPMENT",
    theme: "earnrave",
    type: "trading",
  },
  {
    number: "03",
    name: "DNGT",
    category: "DIGITAL ASSET ECOSYSTEM",
    description:
      "A digital asset ecosystem with a focus on token distribution, community participation, and access.",
    status: "ECOSYSTEM DEVELOPMENT",
    theme: "dngt",
    type: "ecosystem",
  },
];

function ReboxVisual() {
  return (
    <div className="project-scene rebox-scene">
      <div className="rebox-topline">
        <span>DEVICE INTELLIGENCE</span>
        <span>R / 001</span>
      </div>

      <div className="rebox-device">
        <div className="device-frame">
          <div className="device-screen">
            <div className="device-camera" />
            <div className="device-reflection" />
          </div>
        </div>

        <div className="device-shadow" />
      </div>

      <div className="rebox-orbit orbit-a" />
      <div className="rebox-orbit orbit-b" />

      <div className="rebox-spec spec-left">
        <span>01 / IDENTIFY</span>
        <span>DEVICE RECOGNITION</span>
      </div>

      <div className="rebox-spec spec-right">
        <span>02 / VERIFY</span>
        <span>DEVICE INTELLIGENCE</span>
      </div>

      <div className="rebox-bottomline">
        <span>EVERY DEVICE HAS A STORY.</span>
        <span>REBOX</span>
      </div>
    </div>
  );
}

function EarnraveVisual() {
  return (
    <div className="project-scene earnrave-scene">
      <div className="earnrave-topline">
        <span>MARKET INTELLIGENCE</span>
        <span>ER / 002</span>
      </div>

      <div className="market-panel">
        <div className="market-panel-head">
          <span>MARKET OVERVIEW</span>
          <span className="market-live">
            <i />
            LIVE
          </span>
        </div>

        <div className="market-pair">
          <span>EUR / USD</span>
          <strong>1.0842</strong>
          <span className="market-change">+0.42%</span>
        </div>

        <div className="market-chart">
          <div className="chart-grid">
            <span />
            <span />
            <span />
            <span />
          </div>

          <svg
            className="chart-line"
            viewBox="0 0 600 200"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              className="chart-area"
              d="M0 155 L40 140 L75 158 L110 110 L145 125 L180 82 L220 103 L255 70 L290 92 L330 48 L365 65 L400 40 L440 76 L475 54 L510 25 L550 45 L600 12 L600 200 L0 200 Z"
            />
            <path
              d="M0 155 L40 140 L75 158 L110 110 L145 125 L180 82 L220 103 L255 70 L290 92 L330 48 L365 65 L400 40 L440 76 L475 54 L510 25 L550 45 L600 12"
              stroke="currentColor"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        <div className="market-panel-foot">
          <span>AI MARKET ASSISTANT</span>
          <span>ANALYSIS READY ↗</span>
        </div>
      </div>

      <div className="earnrave-orbit" />

      <div className="earnrave-bottomline">
        <span>ANALYZE. LEARN. IMPROVE.</span>
        <span>EARNRAVE</span>
      </div>
    </div>
  );
}

function DngtVisual() {
  return (
    <div className="project-scene dngt-scene">
      <div className="dngt-topline">
        <span>DIGITAL ASSET ECOSYSTEM</span>
        <span>D / 003</span>
      </div>

      <div className="dngt-mark">
        <div className="dngt-ring ring-1" />
        <div className="dngt-ring ring-2" />
        <div className="dngt-ring ring-3" />

        <div className="dngt-core">
          <span>D</span>
        </div>
      </div>

      <div className="dngt-label dngt-label-left">
        <span>FIXED SUPPLY</span>
        <strong>4.1B</strong>
      </div>

      <div className="dngt-label dngt-label-right">
        <span>ECOSYSTEM</span>
        <strong>01 / GENESIS</strong>
      </div>

      <div className="dngt-bottomline">
        <span>BUILT FOR PARTICIPATION</span>
        <span>DNGT</span>
      </div>
    </div>
  );
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "device") return <ReboxVisual />;
  if (type === "trading") return <EarnraveVisual />;
  return <DngtVisual />;
}

export default function Projects() {
  return (
    <section className="selected" id="selected">
      <div className="selected-top">
        <span className="section-index">04 / SELECTED WORK</span>

        <div className="selected-intro">
          <h2>
            Ideas, made <em>real.</em>
          </h2>

          <p>
            We build our own products and turn ideas into working
            technology.
          </p>
        </div>
      </div>

      <div className="work-stack">
        {projects.map((project) => (
          <article
            className={`work-card ${project.theme}`}
            key={project.number}
          >
            <div className="work-visual">
              <ProjectVisual type={project.type} />
            </div>

            <div className="work-copy">
              <div className="work-meta">
                <span>{project.number} / PROJECT</span>
                <span>{project.category}</span>
              </div>

              <div className="work-title">
                <h3>{project.name}</h3>
                <ArrowUpRight size={20} strokeWidth={1.5} />
              </div>

              <p>{project.description}</p>

              <div className="work-bottom">
                <span className="work-status">
                  <i />
                  {project.status}
                </span>

                <span className="work-explore">
                  EXPLORE PROJECT
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="selected-footer">
        <p>
          These are Metacap products. We share them as they take shape.
        </p>

        <span>INDEPENDENT PRODUCT DEVELOPMENT</span>
      </div>
    </section>
  );
}