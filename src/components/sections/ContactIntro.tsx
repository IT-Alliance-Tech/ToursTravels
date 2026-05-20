"use client";

import { Compass, Users, HeartHandshake } from "lucide-react";

const highlights = [
  { icon: Users, text: "Families & Senior Travelers" },
  { icon: Compass, text: "Personalized Guidance" },
  { icon: HeartHandshake, text: "Trusted Coordination" },
];

export default function ContactIntro() {
  return (
    <section className="section contact-intro-section">
      <div className="section-container">
        <div className="contact-intro-grid">
          {/* Text */}
          <div className="contact-intro-text reveal">
            <span className="section-label">Our Promise</span>
            <h2 className="section-title">
              Plan Your Spiritual Journey<br />With Confidence
            </h2>
            <p className="contact-intro-body">
              Whether you are planning a spiritual journey for yourself, your parents, your
              family, or a group, our team is here to help you with carefully guided travel
              assistance and premium spiritual tour recommendations.
            </p>
            <p className="contact-intro-body">
              We focus on comfortable and meaningful travel experiences designed for
              families and senior citizens.
            </p>
            <div className="contact-intro-highlights">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="contact-intro-highlight">
                  <div className="contact-intro-highlight-icon">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative visual */}
          <div className="contact-intro-visual reveal">
            <div className="contact-intro-card-stack">
              <div className="contact-intro-card contact-intro-card-back" />
              <div className="contact-intro-card contact-intro-card-mid" />
              <div className="contact-intro-card contact-intro-card-front">
                <div className="contact-intro-card-icon">
                  <Compass size={48} strokeWidth={1.2} />
                </div>
                <h3>Spiritual Travel Experts</h3>
                <p>Trusted by families and senior pilgrims across India</p>
                <div className="contact-intro-card-stats">
                  <div>
                    <strong>500+</strong>
                    <span>Journeys Guided</span>
                  </div>
                  <div className="contact-intro-card-divider" />
                  <div>
                    <strong>50+</strong>
                    <span>Sacred Destinations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
