"use client";

import { useEffect, useState } from "react";
import { Sparkles, MessageCircle } from "lucide-react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="hero">
      {mounted && (
        <div className="particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 8}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      )}
      <div className="hero-content">
        <h1>
          Premium <span className="highlight">Spiritual Journeys</span>{" for Families & Senior Citizens"}
        </h1>
        <p>
          Comfortable and carefully planned spiritual tours across India and
          selected international destinations with guided support, peaceful
          experiences, and trusted travel coordination.
        </p>
        <div className="hero-buttons">
          <a href="#destinations" className="btn-primary">
            <Sparkles size={18} />
            Explore Packages
          </a>
          <a
            href="https://wa.me/919876543210"
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
}
