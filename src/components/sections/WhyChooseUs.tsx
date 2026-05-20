"use client";

import { Users, ShieldCheck, HeartHandshake, Plane, Compass, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Senior-Friendly Tours",
    desc: "Every journey is thoughtfully designed with the comfort and convenience of senior travelers and families in mind. We ensure easy pacing, accessible accommodations, and gentle itineraries that let you focus on the spiritual experience.",
    accent: "linear-gradient(135deg, #D97706, #F59E0B)",
  },
  {
    icon: ShieldCheck,
    title: "Guided Spiritual Journeys",
    desc: "Our experienced travel coordinators provide step-by-step guidance through every sacred destination. From temple protocols to local customs, you travel with confidence and deep spiritual understanding.",
    accent: "linear-gradient(135deg, #059669, #34D399)",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Travel Coordination",
    desc: "We partner with experienced and reliable spiritual travel operators who share our commitment to quality. Every aspect of your journey — transport, accommodation, meals — is carefully vetted and coordinated.",
    accent: "linear-gradient(135deg, #DC2626, #FB923C)",
  },
  {
    icon: Plane,
    title: "Comfortable Travel & Stay",
    desc: "Premium accommodations and carefully selected transportation ensure your physical comfort matches the peace of your spiritual journey. Rest well, travel smoothly, arrive refreshed.",
    accent: "linear-gradient(135deg, #7C3AED, #A78BFA)",
  },
  {
    icon: Compass,
    title: "Personalized Assistance",
    desc: "Every traveler is unique. We provide personalized itineraries, dietary accommodations, medical support awareness, and flexible scheduling so your spiritual journey feels truly your own.",
    accent: "linear-gradient(135deg, #0284C7, #38BDF8)",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    desc: "Instant communication at your fingertips. Our dedicated support team is available via WhatsApp for quick enquiries, real-time updates, and seamless coordination before and during your journey.",
    accent: "linear-gradient(135deg, #16A34A, #4ADE80)",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-choose-section">
      {/* Floating background elements */}
      <div className="why-choose-bg-orb why-choose-bg-orb-1" />
      <div className="why-choose-bg-orb why-choose-bg-orb-2" />
      <div className="why-choose-bg-orb why-choose-bg-orb-3" />

      <div className="section-container">
        <div className="why-choose-header reveal">
          <span className="section-label">Why Us</span>
          <h2 className="section-title">Why Families Choose Us</h2>
          <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
            Thoughtfully designed spiritual travel experiences that prioritize
            comfort, trust, and meaningful connections.
          </p>
        </div>

        <div className="why-choose-blocks">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isReversed = i % 2 !== 0;

            return (
              <div
                key={i}
                className={`why-choose-block reveal ${isReversed ? "reversed" : ""}`}
              >
                <div className="why-choose-icon-col">
                  <div
                    className="why-choose-icon-container"
                    style={{ background: feature.accent }}
                  >
                    <Icon size={36} strokeWidth={1.5} />
                  </div>
                  {i < features.length - 1 && (
                    <div className="why-choose-connector" />
                  )}
                </div>
                <div className="why-choose-text-col">
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
