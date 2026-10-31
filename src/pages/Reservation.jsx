import { useState } from "react";

function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
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

    alert(
      `Thank you, ${formData.name}! Your reservation request has been received.`
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      message: "",
    });
  }

  return (
    <main className="reservation-page">
      <section className="reservation-hero">
        <span className="section-eyebrow">YOUR TABLE AWAITS</span>
        <h1>Reserve Your <span>Table.</span></h1>
        <p>
          Make your next meal memorable. Fill out the form to request
          your reservation.
        </p>
      </section>

      <section className="reservation-layout">
        <div className="reservation-info">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85"
            alt="TasteBite restaurant interior"
          />

          <h2>A Special Place for Every Occasion</h2>

          <p>
            Whether it is a family dinner, a celebration, or a relaxed
            evening with friends, we look forward to welcoming you.
          </p>

          <div className="reservation-detail">
            <strong>Opening Hours</strong>
            <p>Monday – Sunday: 12:00 PM – 11:00 PM</p>
          </div>

          <div className="reservation-detail">
            <strong>Reservation Note</strong>
            <p>
              Submitting this form creates a demo request only.
              No table is actually booked yet.
            </p>
          </div>
        </div>

        <form className="reservation-form" onSubmit={handleSubmit}>
          <h2>Book a Table</h2>
          <p className="reservation-subtitle">
            Complete your details below.
          </p>

          <div className="reservation-form-grid">
            <div className="reservation-field">
              <label htmlFor="reservation-name">Full Name</label>
              <input
                id="reservation-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="reservation-field">
              <label htmlFor="reservation-email">Email Address</label>
              <input
                id="reservation-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tastebite@example.com"
                required
              />
            </div>

            <div className="reservation-field">
              <label htmlFor="reservation-phone">Phone Number</label>
              <input
                id="reservation-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                required
              />
            </div>

            <div className="reservation-field">
              <label htmlFor="reservation-guests">Guests</label>
              <select
                id="reservation-guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7+">7+ Guests</option>
              </select>
            </div>

            <div className="reservation-field">
              <label htmlFor="reservation-date">Date</label>
              <input
                id="reservation-date"
                type="date"
                name="date"
                min={new Date().toLocaleDateString("en-CA")}
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="reservation-field">
              <label htmlFor="reservation-time">Time</label>
              <select
                id="reservation-time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">Choose a time</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
                <option value="7:00 PM">7:00 PM</option>
                <option value="8:00 PM">8:00 PM</option>
                <option value="9:00 PM">9:00 PM</option>
                <option value="10:00 PM">10:00 PM</option>
              </select>
            </div>
          </div>

          <div className="reservation-field">
            <label htmlFor="reservation-message">Special Requests</label>
            <textarea
              id="reservation-message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any special requests?"
            />
          </div>

          <button className="reservation-submit" type="submit">
            Request Reservation <span>↗</span>
          </button>
        </form>
      </section>
    </main>
  );
}

export default Reservation;