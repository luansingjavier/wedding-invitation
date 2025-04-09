"use client";

import { useState } from "react";
import styles from "./RSVP.module.css";

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests: "1",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className={styles.rsvp}>
      <div className="container">
        <h2 className={styles.title}>RSVP</h2>
        <p className={styles.subtitle}>Please respond by December 17, 2024</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="attending">Will you be attending?</label>
            <select
              id="attending"
              name="attending"
              value={formData.attending}
              onChange={handleChange}
            >
              <option value="yes">Joyfully Accepts</option>
              <option value="no">Regretfully Declines</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="guests">Number of Guests</label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message for the Couple (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
            />
          </div>

          <button type="submit" className={styles.submit}>
            Send RSVP
          </button>
        </form>
      </div>
    </section>
  );
}
