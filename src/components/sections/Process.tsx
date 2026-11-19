import { ArrowRight } from "lucide-react";

const stages = [
  [
    "Listen",
    "Understand the commercial goal, the people it serves, and the real problem underneath the brief.",
  ],
  [
    "Shape",
    "Set a sharp scope, map the experience, and agree what success should look like.",
  ],
  [
    "Make",
    "Build with intention, communicate openly, and keep the details as considered as the big decisions.",
  ],
  [
    "Stay",
    "Keep the product supported, improve what matters, and remain accountable beyond launch.",
  ],
];

export default function Process() {
  return (
    <section className="method">
      <div className="method-intro">
        <span className="section-index">05 / OUR METHOD</span>

        <h2>
          Small enough
          <br />
          to care. <em>Serious</em>
          <br />
          enough to deliver.
        </h2>

        <p>
          No mystery process. Just clear thinking, active collaboration, and careful
          work at every stage.
        </p>

        <a className="under-link" href="#contact">
          Start with a conversation <ArrowRight size={15} />
        </a>
      </div>

      <div className="method-steps">
        {stages.map(([title, desc], i) => (
          <div className="method-step" key={title}>
            <div className="step-top">
              <span>0{i + 1}</span>

              <div className="step-mark">
                {i === 0 ? "↗" : i === 1 ? "⌘" : i === 2 ? "✳" : "∞"}
              </div>
            </div>

            <h3>{title}</h3>
            <p>{desc}</p>

            <div className="step-line">
              <span></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}