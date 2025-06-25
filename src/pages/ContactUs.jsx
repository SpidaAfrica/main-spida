import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
import ContactHero from "../components/ContactHero";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_wupx2nf",       // replace with your EmailJS service ID
      "template_aubwrzw",      // replace with your EmailJS template ID
      form.current,
      "bswxk6e-b-vZP8C8f"        // replace with your EmailJS public key
    ).then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      }
    );
  };

  return (
    <div>
      <ContactHero />
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p className="contact-subtitle">
          Have questions or want to work with us? Reach out—we’d love to hear from you.
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="user_name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="user_email" required />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" required />
          </div>

          <div className="form-group">
            <label htmlFor="role">Who You Are</label>
            <select id="role" name="role" required>
              <option value="" disabled selected>Select your role</option>
              <option>Farmer</option>
              <option>Financial Partner</option>
              <option>Tractor Providers</option>
              <option>Logistics Companies</option>
              <option>Individual Buyers</option>
              <option>Food Processor</option>
              <option>Restaurants</option>
              <option>Market Women</option>
              <option>Agribusiness</option>
              <option>Government</option>
              <option>NGO</option>
            </select>
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
