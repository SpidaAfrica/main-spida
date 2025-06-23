import React from "react";
import "./ContactUs.css";
import ContactHero from "../components/ContactHero";

const ContactUs = () => {
  return (
<div>
    <ContactHero/>
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p className="contact-subtitle">
        Have questions or want to work with us? Reach out—we’d love to hear from you.
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
</div>
  );
};

export default ContactUs;
