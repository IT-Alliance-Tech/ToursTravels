"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function SeniorSection() {
  const checklist = [
    "Comfortable stays at every destination",
    "Guided coordination throughout the journey",
    "Easy and hassle-free travel planning",
    "Personalized assistance for every traveler",
    "Peaceful spiritual experiences guaranteed",
  ];

  return (
    <section className="section senior-section">
      <div className="section-container">
        <div className="senior-grid reveal">
          <div className="senior-content">
            <span className="section-label">Senior Special</span>
            <h2 className="section-title">
              Comfortable Spiritual Travel for Senior Citizens
            </h2>
            <p>
              Our spiritual travel experiences are designed with comfort,
              convenience, and peace of mind for senior travelers and families.
            </p>
            <ul className="checklist">
              {checklist.map((item, i) => (
                <li key={i}>
                  <span className="check-icon">
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="senior-image">
            <Image
              src="/chardham.png"
              alt="Senior-friendly spiritual travel"
              width={600}
              height={450}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
