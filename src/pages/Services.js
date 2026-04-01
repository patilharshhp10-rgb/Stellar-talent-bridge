import React from 'react'

const Services = () => {
  return (
    <>
      <section className="offerings-section">

      <h1 className="offer-title">Our Offerings</h1>

      <div className="offer-grid">

        {/* LEFT */}
        <div className="offer-column">
          <h2>Recruitment of BFSI & BPO Sector</h2>

          <ul>
            <li>Leadership Hiring</li>
            <li>Mid-Level Hiring</li>
            <li>Technology</li>
            <li>Banking, Finance & Insurance (BFSI) Recruitments</li>
            <li>BPO Customer Service</li>
            <li>BPO Sales</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="offer-column">
          <h2>Positions We have worked on</h2>

          <ul>
            <li>Branch Banking CASA, NRI, Wealth</li>
            <li>Rural Banking - Agri, KCC, Working Capital, Gold Loan</li>
            <li>Operations</li>
            <li>Inside Sales</li>
            <li>Retail Banking - HL, LAP, Mortgages, PL, BL, TWL, Auto</li>
            <li>Product Managers</li>
            <li>Strategy & Campaigns</li>
          </ul>
        </div>

      </div>

    </section>

    <section className="offer-continue">

  <h2 className="continue-title">Offerings, continue.</h2>

  <div className="continue-grid">

    <div className="continue-card">
      <h3>HR Metrics</h3>
      <ul>
        <li>Act as a Consultant to Business</li>
        <li>Monitor Key HR Metrics</li>
        <li>Design & Implement Company policies</li>
        <li>Review & Modify HR budgets</li>
        <li>Dashboards to Management</li>
      </ul>
    </div>

    <div className="continue-card">
      <h3>Employee life Cycle</h3>
      <ul>
        <li>HRMS System</li>
        <li>Onboarding</li>
        <li>Payroll Management</li>
        <li>PMS & R&R</li>
        <li>Separation process</li>
        <li>L&D</li>
        <li>ER Management</li>
      </ul>
    </div>

    <div className="continue-card">
      <h3>Payroll & Compliance Management</h3>
      <ul>
        <li>End to end payroll management</li>
        <li>Compliance dashboards</li>
      </ul>
    </div>

    <div className="continue-card">
      <h3>Recruitments</h3>
      <ul>
        <li>End-to-end recruitment</li>
        <li>Sourcing Services</li>
        <li>Campus Hiring</li>
        <li>Compensation planning</li>
        <li>C Suite Hiring</li>
        <li>Industry mapping</li>
      </ul>
    </div>

  </div>

</section>

<section className="interview-section">

  <h2>Offerings, continue.</h2>
  <h1>Interview As A Service |</h1>

  <div className="interview-grid">

    <div className="interview-card">
      <h3>Browser based video interview</h3>
      <ul>
        <li>Video conference interviews</li>
        <li>Recorded & replayable videos</li>
        <li>Improves hiring quality</li>
        <li>Faster onboarding</li>
      </ul>
    </div>

    <div className="interview-card">
      <h3>Self service one-way interview</h3>
      <ul>
        <li>Video questionnaires</li>
        <li>Flexible interview process</li>
        <li>Cross-check assessment</li>
      </ul>
    </div>

    <div className="interview-card">
      <h3>Interview with Subject Matter Expert</h3>
      <ul>
        <li>External expert interviews</li>
        <li>Recorded & indexed</li>
        <li>Reduce hiring cost</li>
        <li>Faster decision making</li>
      </ul>
    </div>

  </div>

</section>
    </>
  )
}

export default Services