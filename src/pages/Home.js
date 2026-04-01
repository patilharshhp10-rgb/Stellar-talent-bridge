import { motion } from "framer-motion";
import Stats from "../components/Stats";
import { FaLightbulb, FaChartLine, FaBriefcase } from "react-icons/fa";

export default function Home() {
  return (
    <>

      {/* HERO (LEFT TEXT + RIGHT IMAGE STYLE) */}
      <section className="hero split">
        <div>
          <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
            Transforming Hiring with Excellence
          </motion.h1>
          <p>
            Stellar Talent Bridge connects top talent with top organizations across BFSI, IT, and BPO sectors.
          </p>
          <button>Get Started</button>
        </div>
{/* <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="industry" /> */}
      </section>

      {/* ABOUT */}
      <section className="split">
        <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786" alt="about" />        
        <div>
          <h2>About Us</h2>
          <p style={{fontSize:"15px"}}>
            Stellar Talent Bridge is a premier HR consultancy specializing in hiring from junior to leadership levels
            across BFSI, IT, and BPO sectors. Our expertise ensures seamless hiring solutions with a research-driven approach.
          </p>
        </div>
      </section>

  <div className="features-grid">
    <motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* your section */}
</motion.section>
  <div className="feature-card">
    <FaLightbulb className="feature-icon" />
    <h3>We Innovate</h3>
  </div>

  <div className="feature-card">
    <FaChartLine className="feature-icon" />
    <h3>Performance</h3>
  </div>

  <div className="feature-card">
    <FaBriefcase className="feature-icon" />
    <h3>A Full Service</h3>
  </div>

</div>

    <section className="potential-section">
  <h2>We Help you Reach Potential</h2>
</section>

<section className="service-grid">

  <div className="service-item">HR Services</div>
  <div className="service-item">BPO Hiring</div>
  <div className="service-item">Corporate Hiring</div>

  <div className="service-item">Leadership Hiring</div>
  <div className="service-item">BFSI Recruitments</div>
  <div className="service-item">IT Recruitment</div>

</section>

      {/* STATS */}
      <Stats />

      {/* WHY CHOOSE US */}
      <section className="split">
        <div>
          <h2>Why Choose Us</h2>
          <ul>
            <li>✔ Industry Expertise</li>
            <li>✔ Strong Talent Network</li>
            <li>✔ Fast Hiring Process</li>
            <li>✔ Customized Recruitment Solutions</li>
            <li>✔ Proven Track Record</li>
          </ul>
        </div>

<img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="why us" />     
 </section>


      {/* INTERVIEW SERVICE */}
      <section className="split2">
<img src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28" alt="interview" />
        <div>
          <h2>Interview as a Service</h2>
          <p style={{fontSize:"15px"}}>
            We provide advanced interview solutions including video interviews,
            expert assessments, and recorded sessions to enhance hiring efficiency.
          </p>

          <ul>
            <li>✔ One-way interviews</li>
            <li>✔ Video-based assessments</li>
            <li>✔ Expert evaluation</li>
            <li>✔ Faster hiring turnaround</li>
          </ul>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{margin:"50px"}}>
        <h2 style={{ textAlign: "center", fontSize:"35px", textDecorationLine:"underline" }}>Client Testimonials</h2>
        <p style={{ textAlign: "center", margin:"10px" }}>
          "Stellar Talent Bridge helped us hire top talent quickly and efficiently!"
        </p>
      </section>

      <section className="cta-section">

  <div className="cta-box">
    <h3>Our Offices</h3>
    <p>View locations worldwide</p>
    <span>Locate the Nearest Office</span>
  </div>

  <div className="cta-box">
    <h3>Drop a Line</h3>
    <p>Contact us anytime</p>
    <span>Fill Our Form</span>
  </div>

  <div className="cta-box">
    <h3>Careers</h3>
    <p>Join our team</p>
    <span>See Open Positions</span>
  </div>

</section>

    </>
  );
}