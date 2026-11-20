
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "About",
  description:
    "Meet Metacap Technology, an independent digital studio focused on designing, building, and maintaining technology that moves businesses forward.",
};

const principles = [
  {
    number: "01",
    title: "Purpose before technology.",
    text: "We start with the problem, not the tools. Every decision should serve a clear business objective.",
  },
  {
    number: "02",
    title: "Quality without excess.",
    text: "We believe the best work is thoughtful, functional, and well executed. Complexity is not a measure of quality.",
  },
  {
    number: "03",
    title: "Built to move forward.",
    text: "We make things that are useful today and capable of growing tomorrow.",
  },
  {
    number: "04",
    title: "Partnership over transactions.",
    text: "We value honest communication, shared ownership, and relationships that extend beyond delivery.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f5f4ef] text-[#171815]">
        {/* HERO */}
        <section className="pt-24 pb-24 md:pt-36 md:pb-32">
          <div className="page-container">
            <Reveal>
              <div className="flex items-center gap-3 text-[10px] tracking-[0.16em] text-[#777970]">
                <span>09 / WHO WE ARE</span>
                <span className="h-px w-8 bg-[#dedfd7]" />
                <span>ABOUT METACAP</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-12 max-w-6xl font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.92] tracking-[-0.07em]">
                Technology
                <br />
                should move
                <br />
                <span className="font-serif italic text-[#68816b]">
                  something forward.
                </span>
              </h1>
            </Reveal>

            <div className="mt-16 grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
              <Reveal delay={150}>
                <p className="max-w-md text-sm leading-7 text-[#777970]">
                  We are an independent digital studio working at the intersection
                  of design, technology, and business.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <p className="max-w-lg text-sm leading-7 text-[#373c35] md:ml-auto">
                  We partner with ambitious businesses to turn ideas into digital
                  products, build better experiences, and create technology that
                  makes a meaningful difference.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* STUDIO STATEMENT */}
        <section className="bg-[#171815] py-24 text-[#f5f4ef] md:py-32">
          <div className="page-container">
            <Reveal>
              <div className="grid gap-12 md:grid-cols-[0.65fr_1.35fr]">
                <div>
                  <p className="text-[10px] tracking-[0.15em] text-[#a0a398]">
                    OUR POINT OF VIEW
                  </p>
                </div>

                <div>
                  <h2 className="max-w-4xl font-display text-4xl leading-[1.08] tracking-[-0.05em] md:text-6xl">
                    We don't build technology for the sake of building technology.
                    <span className="font-serif italic text-[#c3f36b]">
                      {" "}
                      We build to move something forward.
                    </span>
                  </h2>

                  <p className="mt-10 max-w-2xl text-sm leading-7 text-[#a0a398]">
                    A website should do more than exist. A product should solve
                    more than a technical problem. A platform should make something
                    easier, better, or possible. That is how we approach every
                    engagement.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="py-24 md:py-32">
          <div className="page-container">
            <Reveal>
              <p className="text-[10px] tracking-[0.15em] text-[#777970]">
                OUR WORK
              </p>
              <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight tracking-[-0.05em] md:text-6xl">
                Three disciplines.
                <br />
                One direction.
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Strategy",
                  text: "We help define what needs to be built, why it matters, and how it should move your business forward.",
                },
                {
                  number: "02",
                  title: "Design",
                  text: "We shape clear, useful, and considered digital experiences around real people and real needs.",
                },
                {
                  number: "03",
                  title: "Engineering",
                  text: "We build reliable websites, software, and platforms with the technology and structure they need to work.",
                },
              ].map((item) => (
                <Reveal key={item.number}>
                  <div className="border-t border-[#dedfd7] pt-6">
                    <span className="text-xs text-[#777970]">{item.number}</span>
                    <h3 className="mt-8 font-display text-3xl tracking-[-0.04em]">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-sm text-sm leading-7 text-[#777970]">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="bg-[#eeede6] py-24 md:py-32">
          <div className="page-container">
            <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
              <Reveal>
                <div>
                  <p className="text-[10px] tracking-[0.15em] text-[#777970]">
                    WHAT WE BELIEVE
                  </p>
                  <h2 className="mt-5 max-w-sm font-display text-4xl tracking-[-0.05em] md:text-5xl">
                    The principles behind the work.
                  </h2>
                </div>
              </Reveal>

              <div className="border-t border-[#dedfd7]">
                {principles.map((item) => (
                  <Reveal key={item.number}>
                    <div className="grid gap-4 border-b border-[#dedfd7] py-7 md:grid-cols-[60px_1fr] md:gap-8">
                      <span className="text-xs text-[#777970]">
                        {item.number}
                      </span>
                      <div>
                        <h3 className="font-display text-xl tracking-[-0.03em] md:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-3 max-w-lg text-sm leading-7 text-[#777970]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE WORK WITH */}
        <section className="py-24 md:py-32">
          <div className="page-container">
            <div className="grid gap-12 md:grid-cols-2">
              <Reveal>
                <div>
                  <p className="text-[10px] tracking-[0.15em] text-[#777970]">
                    WHO WE WORK WITH
                  </p>
                  <h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.05em] md:text-5xl">
                    People building
                    <br />
                    what comes next.
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="space-y-6 text-sm leading-7 text-[#777970]">
                  <p>
                    We work with founders, growing businesses, teams, and
                    organisations that have something to build or something to improve.
                  </p>
                  <p>
                    Some come with a clear brief. Others come with an idea that
                    needs structure. We are comfortable with both.
                  </p>
                  <p>
                    What matters is the willingness to solve a real problem and
                    build something worthwhile.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#171815] py-24 text-[#f5f4ef] md:py-32">
          <div className="page-container">
            <Reveal>
              <p className="text-[10px] tracking-[0.15em] text-[#a0a398]">
                A GOOD PLACE TO START
              </p>
              <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] tracking-[-0.06em] md:text-7xl">
                Have a problem
                <br />
                worth solving?
              </h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-[#a0a398]">
                Tell us what you're working on. We'll help you figure out what comes next.
              </p>
              <a
                href="/#contact"
                className="mt-10 inline-flex items-center gap-5 border-b border-[#f5f4ef] pb-3 text-sm transition-opacity hover:opacity-60"
              >
                Start a conversation
                <span>↗</span>
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
