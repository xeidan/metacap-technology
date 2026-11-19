import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-top">
        <span className="section-index">07 / MAKE SOMETHING MATTER</span>
        <span className="contact-asterisk">✳</span>
      </div>

      <div className="contact-content">
        <h2>
          Your next move
          <br />
          starts <em>here.</em>
        </h2>

        <div className="contact-right">
          <p>
            Have a project in mind, a product to improve, or a digital problem
            that needs a thoughtful partner? Let’s talk.
          </p>

          <a
            className="contact-button"
            href="mailto:hello@metacap.technology?subject=Project%20Enquiry%20%E2%80%94%20Metacap"
          >
            Start a conversation <ArrowUpRight size={17} />
          </a>

          <div className="contact-meta">
            <span>EMAIL</span>
            <a href="mailto:hello@metacap.technology">
              HELLO@METACAP.TECHNOLOGY
            </a>
          </div>

          <div className="contact-meta careers-meta">
            <span>CAREERS</span>
            <a href="mailto:careers@metacap.technology?subject=General%20Interest">
              GENERAL INTEREST ENQUIRIES ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}