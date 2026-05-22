"use client";

import { ShieldCheck, HeartHandshake, Plane, Map, Stethoscope, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Guided Spiritual Journeys",
    desc: "Step-by-step guidance through every sacred destination ensuring you experience the deep cultural and spiritual significance without any confusion.",
  },
  {
    icon: ShieldCheck,
    title: "Senior-Friendly Tours",
    desc: "Thoughtfully designed with the comfort of senior travelers in mind. We ensure easy pacing, accessible stays, and gentle itineraries.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Coordination",
    desc: "We partner with highly reliable spiritual operators. Transport, accommodation, and daily meals are carefully vetted for hygiene and comfort.",
  },
  {
    icon: Plane,
    title: "Premium Accommodations",
    desc: "Handpicked premium stays that provide a clean, peaceful environment so you can rest fully and focus entirely on your devotion.",
  },
  {
    icon: Stethoscope,
    title: "Personalized Care",
    desc: "We accommodate specific dietary requirements and ensure medical support awareness across all remote and high-altitude pilgrimage sites.",
  },
  {
    icon: MessageCircle,
    title: "24/7 WhatsApp Support",
    desc: "Instant communication with our team for enquiries, real-time updates, and continuous on-ground travel assistance throughout your journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-choose-section" id="why-us" style={{ backgroundColor: "#FFFBF0" }}>
      {/* Background Glow Orbs */}
      <div className="why-choose-bg-orb why-choose-bg-orb-1"></div>
      <div className="why-choose-bg-orb why-choose-bg-orb-2"></div>
      <div className="why-choose-bg-orb why-choose-bg-orb-3"></div>

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="why-choose-header">
          <span className="section-label">Our Promise</span>
          <h2 className="section-title">Why Families Choose Us</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            We strip away the stress of travel coordination, offering thoughtfully designed spiritual experiences that prioritize comfort, safety, and deep meaningful connections.
          </p>
        </div>

        {/* Premium Glassmorphism Grid */}
        <div className="why-choose-grid">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="why-choose-card group">
                <div 
                  className="why-choose-card-icon" 
                  style={{ 
                    background: "linear-gradient(135deg, var(--saffron), var(--gold))" 
                  }}
                >
                  <Icon size={28} color="white" strokeWidth={1.8} />
                </div>
                
                <div className="why-choose-card-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
