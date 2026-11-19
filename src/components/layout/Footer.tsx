export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer top */}
        <div className="footer-top">
          <a href="/" className="footer-logo">
            METACAP
          </a>

          <p className="footer-description">
            We design and build digital products, platforms, and experiences
            that move businesses forward.
          </p>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Metacap Technology. All rights reserved.
          </p>

          <a href="mailto:hello@metacap.tech">
            Get in touch
          </a>
        </div>
      </div>
    </footer>
  );
}