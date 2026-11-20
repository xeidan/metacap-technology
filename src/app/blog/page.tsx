import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Journal",
  description:
    "Ideas, perspectives, and practical insights on technology, digital products, design, and building businesses from Metacap Technology.",
};

const articles = [
  {
    number: "01",
    category: "DIGITAL STRATEGY",
    date: "COMING SOON",
    title: "Your website is not your business. It is a tool for it.",
    description:
      "A website should do more than look good. It should help your business communicate, build trust, and create opportunities.",
    read: "5 MIN READ",
  },
  {
    number: "02",
    category: "PRODUCT & ENGINEERING",
    date: "COMING SOON",
    title: "Before you build an app, make sure you have a problem worth solving.",
    description:
      "Ideas are easy to come by. Building the right thing requires a better understanding of the problem, the people, and the opportunity.",
    read: "7 MIN READ",
  },
  {
    number: "03",
    category: "BUSINESS & TECHNOLOGY",
    date: "COMING SOON",
    title: "Technology should make your business better. Not more complicated.",
    description:
      "The value of technology is not in how impressive it looks. It is in what it makes possible and how well it works.",
    read: "4 MIN READ",
  },
  {
    number: "04",
    category: "DESIGN",
    date: "COMING SOON",
    title: "Good design is not decoration.",
    description:
      "The difference between a good-looking interface and a good experience is often what happens after someone starts using it.",
    read: "6 MIN READ",
  },
  {
    number: "05",
    category: "STARTUPS",
    date: "COMING SOON",
    title: "What should your first version of a product actually include?",
    description:
      "Building everything at once is rarely the smartest move. A focused first version can teach you more than a finished product nobody uses.",
    read: "8 MIN READ",
  },
  {
    number: "06",
    category: "DIGITAL GROWTH",
    date: "COMING SOON",
    title: "When is it time to rebuild your website?",
    description:
      "Not every outdated website needs a redesign. But there are signs your existing website is costing you more than you realise.",
    read: "5 MIN READ",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f5f4ef] text-[#171815]">
        {/* HERO */}
        <section className="pt-24 pb-20 md:pt-36 md:pb-28">
          <Reveal>
            <div className="page-container flex items-center gap-3 text-[10px] tracking-[0.16em] text-[#777970]">
              <span>10 / THE JOURNAL</span>
              <span className="h-px w-8 bg-[#dedfd7]" />
              <span>IDEAS & PERSPECTIVES</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="page-container mt-12 grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-end">
              <h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.92] tracking-[-0.07em]">
                Thoughts on
                <br />
                things that
                <br />
                <span className="font-serif italic text-[#68816b]">matter.</span>
              </h1>

              <p className="max-w-md text-sm leading-7 text-[#777970] md:ml-auto md:pb-2">
                Notes, ideas, and perspectives on building digital products,
                navigating technology, and making better decisions about the
                things we create.
              </p>
            </div>
          </Reveal>
        </section>

        {/* FEATURED EDITORIAL */}
        <section className="pb-20 md:pb-28">
          <Reveal>
            <div className="page-container border-y border-[#dedfd7] py-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.15em] text-[#777970]">
                  FROM THE METACAP JOURNAL
                </span>
                <span className="text-[10px] text-[#777970]">01—06</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="page-container grid gap-8 py-10 md:grid-cols-[0.7fr_1.3fr] md:py-16">
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-[10px] tracking-[0.15em] text-[#777970]">
                    FEATURED TOPIC
                  </p>
                  <p className="mt-5 text-xs text-[#777970]">
                    BUSINESS / TECHNOLOGY
                  </p>
                </div>

                <div className="mt-10">
                  <p className="font-mono text-[10px] text-[#777970]">
                    EDITORIAL 001
                  </p>
                  <p className="mt-2 text-xs text-[#777970]">Coming soon</p>
                </div>
              </div>

              <div>
                <h2 className="max-w-4xl font-display text-3xl leading-[1.1] tracking-[-0.05em] md:text-5xl">
                  The best technology decisions start with better questions.
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-[#777970]">
                  Before choosing a framework, hiring a developer, or investing
                  in software, there is a more important question to answer:
                  what are you actually trying to achieve?
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ARTICLES */}
        <section
          id="articles"
          className="bg-[#eeede6] py-20 md:py-28"
        >
          <Reveal>
            <div className="page-container flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-[10px] tracking-[0.15em] text-[#777970]">
                  THE ARCHIVE
                </p>
                <h2 className="mt-5 font-display text-4xl tracking-[-0.05em] md:text-5xl">
                  Explore our thinking.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#777970]">
                Practical ideas for people building, growing, and improving
                things.
              </p>
            </div>
          </Reveal>

          <div className="page-container mt-14 grid gap-x-8 gap-y-0 md:grid-cols-2">
            {articles.map((article) => (
              <Reveal key={article.number}>
                <article className="border-t border-[#dedfd7] py-8 md:py-10">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] text-[#777970]">
                      {article.number}
                    </span>
                    <span className="text-right text-[10px] tracking-[0.12em] text-[#777970]">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="mt-8 max-w-xl font-display text-2xl leading-[1.15] tracking-[-0.04em] md:text-3xl">
                    {article.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-[#777970]">
                    {article.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-[#dedfd7] pt-4">
                    <span className="text-[10px] tracking-[0.12em] text-[#777970]">
                      {article.date}
                    </span>
                    <span className="font-mono text-[10px] text-[#777970]">
                      {article.read}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* NEWSLETTER / CTA */}
        <section className="py-24 md:py-32">
          <Reveal>
            <div className="page-container grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <p className="text-[10px] tracking-[0.15em] text-[#777970]">
                  MORE FROM METACAP
                </p>
                <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.05] tracking-[-0.05em] md:text-6xl">
                  Ideas are only
                  <br />
                  useful when
                  <br />
                  <span className="font-serif italic text-[#68816b]">
                    they move you.
                  </span>
                </h2>
              </div>

              <div className="md:ml-auto">
                <p className="max-w-md text-sm leading-7 text-[#777970]">
                  Have a question, an idea, or a challenge you're working
                  through? We would like to hear about it.
                </p>

                <a
                  href="/#contact"
                  className="mt-8 inline-flex items-center gap-5 border-b border-[#171815] pb-3 text-sm transition-opacity hover:opacity-60"
                >
                  Start a conversation
                  <span>↗</span>
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}