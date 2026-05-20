"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const destinations = [
  "Char Dham Yatra",
  "Kashi & Ayodhya",
  "Jyotirlinga Tours",
  "Nepal Spiritual Tours",
  "Kedarnath & Badrinath",
  "South India Temple Tours",
  "Other / Not Sure Yet",
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
  "Flexible / Not Decided",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "", phone: "", whatsapp: "",
    destination: "", travelers: "", month: "", message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = encodeURIComponent(
      `Hello! I'd like to enquire about a spiritual tour.\n\n` +
      `Name: ${form.fullName}\nPhone: ${form.phone}\nWhatsApp: ${form.whatsapp}\n` +
      `Destination: ${form.destination}\nTravelers: ${form.travelers}\n` +
      `Travel Month: ${form.month}\n\nMessage: ${form.message}`
    );
    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");
    }, 800);
  };

  return (
    <section className="section contact-form-section" id="enquiry-form">
      <div className="section-container">
        <div className="contact-form-grid">
          {/* Left panel */}
          <div className="contact-form-left reveal">
            <span className="section-label" style={{ color: "var(--gold)" }}>Quick Enquiry</span>
            <h2 className="section-title" style={{ color: "white" }}>Send Your Enquiry</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginTop: "1rem" }}>
              Fill in the form and our travel coordinator will reach out to you on WhatsApp
              with personalized package recommendations.
            </p>
            <div className="contact-form-features">
              {[
                "No commitment required",
                "Personalized package suggestions",
                "Quick WhatsApp response",
                "Senior-friendly guidance",
              ].map((f) => (
                <div key={f} className="contact-form-feature">
                  <CheckCircle2 size={16} style={{ color: "var(--gold)", flexShrink: 0 }} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form panel */}
          <div className="contact-form-panel reveal">
            {submitted ? (
              <div className="contact-form-success">
                <div className="contact-form-success-icon">
                  <CheckCircle2 size={40} />
                </div>
                <h3>Enquiry Sent!</h3>
                <p>Redirecting you to WhatsApp to connect with our travel coordinator…</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      id="fullName" name="fullName" type="text"
                      placeholder="Your full name"
                      value={form.fullName} onChange={handleChange} required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone} onChange={handleChange} required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="whatsapp">WhatsApp Number</label>
                    <input
                      id="whatsapp" name="whatsapp" type="tel"
                      placeholder="Same as phone or different"
                      value={form.whatsapp} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="travelers">Number of Travelers *</label>
                    <input
                      id="travelers" name="travelers" type="number"
                      placeholder="e.g. 4"
                      min="1" value={form.travelers} onChange={handleChange} required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="destination">Preferred Destination</label>
                    <select id="destination" name="destination" value={form.destination} onChange={handleChange}>
                      <option value="">Select a destination…</option>
                      {destinations.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="month">Travel Month</label>
                    <select id="month" name="month" value={form.month} onChange={handleChange}>
                      <option value="">Select a month…</option>
                      {months.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="message">Message / Requirements</label>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder="Tell us about your travel plans, special requirements, or any questions…"
                    value={form.message} onChange={handleChange}
                  />
                </div>

                <button type="submit" className="contact-form-submit">
                  <Send size={18} />
                  Request Travel Details
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
