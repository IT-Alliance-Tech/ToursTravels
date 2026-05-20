"use client";

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-overlay" />
      <div className="contact-hero-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`contact-hero-particle contact-hero-particle-${i + 1}`} />
        ))}
      </div>
      <div className="contact-hero-content reveal">
        <span className="section-label" style={{ color: "var(--gold)" }}>Get In Touch</span>
        <h1 className="contact-hero-title">Contact Us</h1>
        <p className="contact-hero-subtitle">
          Speak with our travel coordinators for premium spiritual tour enquiries,
          package details, and personalized travel assistance.
        </p>
        <div className="contact-hero-badges">
          <div className="contact-hero-badge">
            <span className="contact-hero-badge-dot contact-hero-badge-dot-green" />
            WhatsApp Support Available
          </div>
          <div className="contact-hero-badge">
            <span className="contact-hero-badge-dot contact-hero-badge-dot-gold" />
            Mon – Sat · 9 AM – 7 PM
          </div>
        </div>
      </div>
    </section>
  );
}
