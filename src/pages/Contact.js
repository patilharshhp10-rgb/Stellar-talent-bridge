 import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // send data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Message saved successfully!");
    
    // clear form
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-container">

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />

        <button type="submit">Send Message</button>
      </form>


      <div className="contact-info">
        <h3>Contact Details</h3>
        <p style={{fontSize:"15px"}}><strong style={{fontSize:"15px"}}>Phone:</strong > 9324035816</p>
        <p style={{fontSize:"15px"}}><strong style={{fontSize:"15px"}}>Email:</strong> kanchan@stellartalentbridge.in</p>

        <iframe style={{margin:"20px"}}
          src="https://maps.google.com/maps?q=india&t=&z=13&ie=UTF8&iwloc=&output=embed"
          title="map"
        ></iframe>
      </div>

    </section>

    
  );
}