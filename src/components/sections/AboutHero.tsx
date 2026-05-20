"use client";

import { Sparkles, Heart } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-overlay" />
      <div className="contact-hero-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`contact-hero-particle contact-hero-particle-${i + 1}`} />
        ))}
      </div>
      <div className="about-hero-content reveal">
        <span className="section-label" style={{ color: "var(--gold)" }}>Who We Are</span>
        <h1 className="about-hero-title">Our Journey.<br/>Your Spiritual Peace.</h1>
        <p className="about-hero-subtitle">
          Dedicated to providing families and senior citizens with safe, comfortable, 
          and deeply fulfilling spiritual travel experiences across sacred destinations.
        </p>
        <div className="contact-hero-badges">
          <div className="contact-hero-badge">
            <Heart size={16} color="var(--gold)" />
            Family-Focused Travel
          </div>
          <div className="contact-hero-badge">
            <Sparkles size={16} color="var(--gold)" />
            Premium Experiences
          </div>
        </div>
      </div>
    </section>
  );
}
