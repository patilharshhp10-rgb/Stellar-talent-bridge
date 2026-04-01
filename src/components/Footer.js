import { FaWhatsapp, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* COMPANY */}
        <div className="footer-col">
          <h3>Stellar Talent Bridge</h3>
          <p>
            We provide professional recruitment solutions across BFSI, IT, and BPO sectors.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Contact</p>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p>📞 9324035816</p>
          <p>📧 kanchan@stellartalentbridge.in</p>
        </div>

      </div>

      {/* SOCIAL ICONS */}
      <div className="footer-social">

        <a href="https://wa.me/919324035816" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>

      </div>

      {/* COPYRIGHT */}
      <p className="footer-copy">
        © 2026 Stellar Talent Bridge. All Rights Reserved.
      </p>

    </footer>
  );
}