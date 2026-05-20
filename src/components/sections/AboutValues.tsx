"use client";

import { ShieldCheck, HeartHandshake, MapPin } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Safety & Security",
    desc: "Your safety is our highest priority. We meticulously vet all transport, accommodations, and local operators to ensure a secure environment for every family member.",
    accent: "linear-gradient(135deg, #059669, #34D399)",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    desc: "We treat every senior traveler with the respect and gentle care they deserve. Our guides are trained to handle varying mobility needs and provide patient assistance.",
    accent: "linear-gradient(135deg, #D97706, #F59E0B)",
  },
  {
    icon: MapPin,
    title: "Curated Experiences",
    desc: "We do not believe in rushing from one spot to the next. Our itineraries are carefully paced, allowing you to truly absorb the spiritual energy of each destination.",
    accent: "linear-gradient(135deg, #7C3AED, #A78BFA)",
  },
];

export default function AboutValues() {
  return (
    <section className="section why-choose-section" style={{ background: "var(--cream)" }}>
      {/* Reusing why-choose classes for consistency */}
      <div className="section-container">
        <div className="why-choose-header reveal">
          <span className="section-label">Our Values</span>
          <h2 className="section-title">What Drives Us Forward</h2>
          <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
            The core principles that guide our planning and ensure your 
            spiritual journey is nothing short of exceptional.
          </p>
        </div>

        <div className="why-choose-grid">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <div key={i} className="why-choose-card reveal" style={{ background: "rgba(255, 255, 255, 0.8)" }}>
                <div
                  className="why-choose-card-icon"
                  style={{ background: val.accent }}
                >
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <div className="why-choose-card-content">
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
