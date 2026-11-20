import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Pricing",
  description:
    "Explore investment ranges for websites, digital products, and ongoing technology support from Metacap Technology.",
};

const services = [
  {
    number: "01",
    title: "Websites",
    description:
      "Websites built to communicate clearly, establish credibility, and turn attention into action.",
    items: ["Landing pages", "Business websites", "Corporate websites", "Website redesigns"],
    price: "From ₦350,000",
    note: "Typically 1–4 weeks",
  },
  {
    number: "02",
    title: "Digital products",
    description:
      "Purpose-built software that solves real problems and gives your business room to grow.",
    items: ["MVP development", "Web applications", "SaaS products", "Custom platforms"],
    price: "From ₦1,500,000",
    note: "Scoped around requirements",
  },
  {
    number: "03",
    title: "Ongoing support",
    description:
      "Reliable technical support to keep your digital products secure, stable, and performing.",
    items: ["Maintenance", "Updates", "Performance improvements", "Technical support"],
    price: "From ₦100,000 / month",
    note: "Monthly engagement",
  },
];

const included = [
  "Clear project scope and deliverables",
  "Responsive design across devices",
  "Thoughtful user experience",
  "Modern development practices",
  "Communication throughout the project",
  "Deployment and launch support",
];

const faqs = [
  {
    question: "How much does a project cost?",
    answer:
      "Every project is different. The investment depends on the scope, complexity, functionality, and timeline. The prices shown are starting points, not fixed quotes.",
  },
  {
    question: "How do payments work?",
    answer:
      "Projects are usually divided into milestone payments. The payment schedule is agreed upon before development begins.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A typical website can take between one and four weeks. Larger websites and software products require more time, based on the agreed scope.",
  },
  {
    question: "Can you work with an existing product?",
    answer:
      "Yes. We can improve, redesign, maintain, or extend an existing website or software product.",
  },
  {
    question: "What if I have an idea but no clear requirements?",
    answer:
      "That's fine. We can help define the problem, shape the idea, identify what needs to be built, and determine the best way forward.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f5f4ef] text-[#171815]">
        {/* HERO */}
        <section className="pt-24 pb-20 md:pt-36 md:pb-28">
          <Reveal>
            <div className="page-container flex items-center gap-3 text-[10px] tracking-[0.16em] text-[#777970]">
              <span>08 / INVESTMENT</span>
              <span className="h-px w-8 bg-[#dedfd7]" />
              <span>PRICING</span>
            </div>
          </Reveal>

          <div className="page-container mt-12 grid gap-12 md:grid-cols-[1.4fr_0.6fr] md:items-end">
            <Reveal delay={100}>
              <h1 className="max-w-4xl font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.92] tracking-[-0.07em]">
                Good work.
                <br />
                <span className="font-serif italic text-[#68816b]">
                  Clear investment.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="max-w-md text-sm leading-7 text-[#777970] md:pb-2">
                Thoughtful digital work, priced around what it takes to do it
                properly. No unnecessary complexity. No surprises halfway through.
              </p>
            </Reveal>
          </div>

          <Reveal delay={250}>
            <div className="page-container mt-16 flex items-center justify-between border-y border-[#dedfd7] py-5">
              <span className="text-[10px] tracking-[0.15em] text-[#777970]">
                OUR APPROACH
              </span>
              <span className="text-xs text-[#373c35]">
                Every project is scoped before work begins.
              </span>
            </div>
          </Reveal>
        </section>

        {/* SERVICES */}
        <section className="pb-24 md:pb-32">
          <Reveal>
            <div className="page-container mb-12 flex items-end justify-between">
              <div>
                <p className="text-[10px] tracking-[0.15em] text-[#777970]">
                  WHAT WE DO / WHAT IT COSTS
                </p>
                <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] md:text-5xl">
                  Built around your needs.
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="page-container border-t border-[#dedfd7">
            {services.map((service) => (
              <Reveal key={service.number}>
                <div className="grid gap-8 border-b border-[#dedfd7] py-10 md:grid-cols-[70px_1fr_0.8fr] md:gap-12 md:py-14">
                  <span className="text-xs text-[#777970]">{service.number}</span>

                  <div>
                    <h3 className="font-display text-2xl tracking-[-0.04em] md:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-[#777970]">
                      {service.description}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="border border-[#dedfd7] px-3 py-2 text-[11px] text-[#373c35]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:pt-1">
                    <p className="font-display text-xl tracking-[-0.03em]">
                      {service.price}
                    </p>
                    <p className="mt-2 text-xs text-[#777970]">{service.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* WHAT IS INCLUDED */}
        <section className="bg-[#eeede6] py-20 md:py-28">
          <div className="page-container grid gap-12 md:grid-cols-2">
            <Reveal>
              <div>
                <p className="text-[10px] tracking-[0.15em] text-[#777970]">
                  THE STANDARD
                </p>
                <h2 className="mt-5 max-w-md font-display text-4xl leading-[1.05] tracking-[-0.05em] md:text-5xl">
                  Good work should come with good process.
                </h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-[#777970]">
                  Regardless of the size of the project, our approach remains
                  deliberate. The details are considered. The work has a purpose.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="border-t border-[#dedfd7]">
                {included.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-[#dedfd7] py-5"
                  >
                    <span className="font-mono text-[10px] text-[#777970]">
                      0{index + 1}
                    </span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 md:py-28">
          <Reveal>
            <div className="page-container">
              <p className="text-[10px] tracking-[0.15em] text-[#777970]">
                SIMPLE FROM THE START
              </p>
              <h2 className="mt-5 max-w-3xl font-display text-4xl tracking-[-0.05em] md:text-6xl">
                From conversation
                <br />
                to completion.
              </h2>
            </div>
          </Reveal>

          <div className="page-container mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Talk",
                text: "Tell us what you're trying to achieve and what isn't working.",
              },
              {
                number: "02",
                title: "Define",
                text: "We agree on the scope, deliverables, timeline, and investment.",
              },
              {
                number: "03",
                title: "Build",
                text: "We design and develop with your input at key stages.",
              },
              {
                number: "04",
                title: "Launch",
                text: "We deliver, launch, and help you move into the next phase.",
              },
            ].map((step) => (
              <Reveal key={step.number}>
                <div className="border-t border-[#dedfd7] pt-5">
                  <span className="text-xs text-[#777970]">{step.number}</span>
                  <h3 className="mt-6 font-display text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#777970]">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#171815] py-20 text-[#f5f4ef] md:py-28">
          <div className="page-container grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <Reveal>
              <div>
                <p className="text-[10px] tracking-[0.15em] text-[#a0a398]">
                  QUESTIONS
                </p>
                <h2 className="mt-5 font-display text-4xl tracking-[-0.05em] md:text-5xl">
                  A few things
                  <br />
                  worth knowing.
                </h2>
              </div>
            </Reveal>

            <div className="border-t border-[#373a34]">
              {faqs.map((faq, index) => (
                <Reveal key={faq.question}>
                  <div className="border-b border-[#373a34] py-7">
                    <p className="mb-3 font-mono text-[10px] text-[#a0a398]">
                      0{index + 1}
                    </p>
                    <h3 className="text-base">{faq.question}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-[#a0a398]">
                      {faq.answer}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32">
          <Reveal>
            <div className="page-container">
              <p className="text-[10px] tracking-[0.15em] text-[#777970]">
                HAVE SOMETHING IN MIND?
              </p>
              <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] tracking-[-0.06em] md:text-7xl">
                Let's make
                <br />
                <span className="font-serif italic text-[#68816b]">it matter.</span>
              </h2>
              <a
                href="/#contact"
                className="mt-10 inline-flex items-center gap-5 border-b border-[#171815] pb-3 text-sm transition-opacity hover:opacity-60"
              >
                Start a project
                <span>↗</span>
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}