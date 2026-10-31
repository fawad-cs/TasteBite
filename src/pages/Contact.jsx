import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert(`Thank you, ${formData.name}! Your demo message has been received.`);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span className="section-eyebrow">GET IN TOUCH</span>
        <h1>Let's Start a <span>Conversation.</span></h1>
        <p>
          Questions, feedback, or planning a special occasion?
          We'd love to hear from you.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-information">
          <h2>We'd Love to Hear From You</h2>

          <p>
            Reach out to our team with questions about our menu,
            dining experience, or special events.
          </p>

          <div className="contact-info-card">
            <span className="contact-info-icon">✉</span>
            <div>
              <h3>Email</h3>
              <p>hello@tastebite.example</p>
            </div>
          </div>

          <div className="contact-info-card">
            <span className="contact-info-icon">☎</span>
            <div>
              <h3>Phone</h3>
              <p>+92 300 1234567</p>
            </div>
          </div>

          <div className="contact-info-card">
            <span className="contact-info-icon">⌖</span>
            <div>
              <h3>Location</h3>
              <p>Restaurant address to be added</p>
            </div>
          </div>

          <div className="contact-hours">
            <h3>Opening Hours</h3>
            <p>Monday – Sunday</p>
            <p>12:00 PM – 11:00 PM</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <div className="contact-field">
            <label htmlFor="contact-name">Your Name</label>
            <input
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">Email Address</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is this about?"
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">Your Message</label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message..."
              required
            />
          </div>

          <button className="contact-submit" type="submit">
            Send Message <span>↗</span>
          </button>

          <p className="contact-form-note">
            This demo form does not send a real email yet.
          </p>
        </form>
      </section>
    </main>
  );
}

export default Contact;