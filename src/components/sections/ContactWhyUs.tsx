"use client";

import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Personalized spiritual travel guidance",
  "Senior-friendly package recommendations",
  "Comfortable and carefully selected journeys",
  "Quick WhatsApp response support",
  "Trusted travel coordination assistance",
  "Premium spiritual travel experiences",
];

export default function ContactWhyUs() {
  return (
    <section className="section contact-why-section">
      <div className="contact-why-bg-orb contact-why-bg-orb-1" />
      <div className="contact-why-bg-orb contact-why-bg-orb-2" />
      <div className="section-container">
        <div className="contact-why-header reveal">
          <span className="section-label">Why Us</span>
          <h2 className="section-title">Why Travelers Connect With Us</h2>
          <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
            From first enquiry to safe return — we are with you every step of the journey.
          </p>
        </div>

        <div className="contact-why-grid">
          {reasons.map((reason, i) => (
            <div key={i} className="contact-why-card reveal">
              <div className="contact-why-card-icon">
                <CheckCircle2 size={24} strokeWidth={2} />
              </div>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
