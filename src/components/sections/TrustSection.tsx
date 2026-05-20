"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function TrustSection() {
  useEffect(() => {
    const counters = document.querySelectorAll(".stat-number");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.getAttribute("data-target") || "0");
            const suffix = el.getAttribute("data-suffix") || "";
            let current = 0;
            const increment = target / 60;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              el.textContent = Math.floor(current) + suffix;
            }, 20);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section trust-section" id="trust">
      <div className="section-container">
        <div className="trust-grid reveal">
          <div className="trust-image-collage">
            <Image
              src="/kedarnath.png"
              alt="Spiritual travel experience"
              width={600}
              height={450}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="trust-stats">
              <div className="stat-card">
                <div className="stat-number" data-target="500" data-suffix="+">0</div>
                <div className="stat-label">Happy Travelers</div>
              </div>
              <div className="stat-card">
                <div className="stat-number" data-target="50" data-suffix="+">0</div>
                <div className="stat-label">Destinations</div>
              </div>
              <div className="stat-card">
                <div className="stat-number" data-target="100" data-suffix="+">0</div>
                <div className="stat-label">Tours Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number" data-target="10" data-suffix="+">0</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="trust-content">
            <span className="section-label">About Us</span>
            <h2 className="section-title">Trusted Spiritual Travel Experiences</h2>
            <p>
              We help families and senior travelers experience meaningful
              spiritual journeys with comfort, safety, and personalized guidance.
            </p>
            <p>
              Our carefully selected spiritual tour packages focus on peaceful
              travel experiences, comfortable stays, guided assistance, and
              memorable moments for every traveler.
            </p>
            <p>
              Whether you are planning a pilgrimage for your parents, family,
              or community group, we help make every journey smooth and
              spiritually fulfilling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
