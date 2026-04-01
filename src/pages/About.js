export default function About(){
return(
    <>
<section className="split">
  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978" alt="company"/>

  <div>
    <h2 style={{fontSize:"35px"}}>About Stellar Talent Bridge</h2>
    <p style={{fontSize:"15px"}}>
      Stellar Talent Bridge is a premier HR consultancy specializing in hiring 
      from junior to leadership levels across BFSI, IT, and BPO sectors.
      Founded by industry experts from banking, insurance, and consulting,
      we deliver research-driven recruitment solutions.
    </p>
  </div>
</section>

<section>
  <h2 style={{textAlign:"center", fontSize:"30px"}}>Company Overview</h2>
  <p style={{maxWidth:"800px",margin:"auto", padding:"20px",textAlign:"center"}}>
Stellar Talen Bridge is a premier HR consultancy specializing from junior Level to Leadership hiring for the Banking and Financial Services (BFSI), IT Sector & BPO. Founded by seasoned professionals from the fields of Banking, Insurance, and Consultancy, we bring unparalleled industry knowledge to every engagement
Our expertise extends across Private Equity, BFSI, IT-ITES, and Infrastructure, enabling us to train and nurture a highly skilled team of BFSI recruiters. This ensures seamless execution and exceptional outcomes for our partners. What sets us apart is our research-driven approach and deep industry connections, which allow us to deliver customized and impactful headhunting solutions. At Stellar Talent Bridge, we pride ourselves on our commitment to excellence, as echoed in the testimonials of our satisfied clients

  </p>
</section>

        <section>
  <h2 style={{textAlign:"center", fontSize:"30px"}}>Our Mission</h2>
  <p style={{maxWidth:"800px",margin:"auto",  padding:"20px" ,textAlign:"center"}}>
    To empower businesses in the Banking, Financial Services, and Consulting industries by connecting them with exceptional talent. We are dedicated to delivering tailored recruitment solutions driven by industry expertise, a robust network, and a commitment to quality. By understanding the unique needs of both our clients and candidates, we aim to foster long-term partnerships built on trust, transparency, and mutual success. Our mission is not only to bridge the gap between opportunity and talent but also to drive growth, innovation, and excellence within the industries we serve. With a focus on aligning the right people with the right opportunities, we aspire to be a catalyst for progress—helping organizations thrive in a competitive landscape while empowering professionals to achieve their career goals. Through our personalized approach, ethical practices, and relentless pursuit of excellence, we strive to redefine recruitment as a strategic and value-driven service

  </p>
</section>

    {/* TESTIMONIALS */}
      <section className="testimonial-section">
        <h2 className="testimonial-title">Testimonials</h2>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <p className="quote">❝</p>
            <h3>Anushka</h3>
            <p>
              It has been a rewarding experience. Their attention to detail and
              commitment to quality hiring is outstanding.
            </p>
            <strong>HR Manager – MNC Trading Firm</strong>
          </div>

          <div className="testimonial-card">
            <p className="quote">❝</p>
            <h3>Divesh</h3>
            <p>
              They consistently provide high-quality candidates. Their screening
              process ensures only the best profiles.
            </p>
            <strong>Talent Acquisition Head – Bank</strong>
          </div>

          <div className="testimonial-card">
            <p className="quote">❝</p>
            <h3>Aditya</h3>
            <p>
              Their personalized approach helped us find the right candidates
              quickly and efficiently.
            </p>
            <strong>HR Manager – BPO</strong>
          </div>

          <div className="testimonial-card">
            <p className="quote">❝</p>
            <h3>Rohan</h3>
            <p>
              Professional and efficient hiring solutions. Strong focus on
              organizational fit and collaboration.
            </p>
            <strong>HR Manager – Insurance Company</strong>
          </div>

        </div>
      </section>


</>
)
}