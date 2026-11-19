import { ArrowUpRight, Code2, Layers, LifeBuoy } from "lucide-react";

const capabilities = [
  {
    n: "01",
    title: "Websites that work",
    sub: "Business websites · Landing pages",
    desc: "We design and build websites that explain what you do, earn trust, and turn visitors into customers.",
    icon: Code2,
  },
  {
    n: "02",
    title: "Digital products",
    sub: "Web apps · MVPs · Platforms",
    desc: "We turn ideas into working products. From the first version to full-scale platforms, we build software that solves real problems.",
    icon: Layers,
  },
  {
    n: "03",
    title: "Support and maintenance",
    sub: "Updates · Security · Performance",
    desc: "We maintain your products after launch. We fix issues, improve performance, and keep your software up to date.",
    icon: LifeBuoy,
  },
];

export default function Services() {
  return (
    <section className="capabilities" id="capabilities">
      <div className="section-top">
        <div>
          <span className="section-index">03 / CAPABILITIES</span>

          <h2>
            From idea
            <br />
            to <em>reality.</em>
          </h2>
        </div>

        <p>
          We design, build, and maintain digital products for businesses
          that want to move forward.
        </p>
      </div>

      <div className="cap-list">
        {capabilities.map(({ n, title, sub, desc, icon: Icon }) => (
          <article className="cap-item" key={n}>
            <span className="cap-number">{n}</span>

            <div className="cap-icon">
              <Icon size={21} strokeWidth={1.4} />
            </div>

            <div className="cap-main">
              <div className="cap-heading">
                <h3>{title}</h3>
                <span>{sub}</span>
              </div>

              <p>{desc}</p>
            </div>

            <ArrowUpRight className="cap-arrow" size={19} />
          </article>
        ))}
      </div>

      <div className="cap-foot">
        <span>BUILT FOR BUSINESS</span>
        <span>DESIGN / DEVELOPMENT / SUPPORT</span>
      </div>
    </section>
  );
}