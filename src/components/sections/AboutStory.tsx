"use client";

import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="section about-story-section">
      <div className="section-container">
        <div className="about-story-grid reveal">
          <div className="about-story-content">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Pilgrimages Made Effortless</h2>
            <p>
              Tours &amp; Travels was founded with a simple, profound mission: to make spiritual journeys
              across India and beyond accessible, comfortable, and completely stress-free for families and senior citizens.
            </p>
            <p>
              We understand that undertaking a pilgrimage can often involve rigorous travel, confusing itineraries, and 
              challenging accommodations. Our goal is to shoulder all the logistical burdens so that you and your loved 
              ones can focus entirely on what truly matters — your devotion and peace of mind.
            </p>
            <p>
              Over the years, we have built a trusted network of premium accommodations, knowledgeable local guides, 
              and comfortable transportation services. Whether you are seeking the divine aura of the Char Dham or the 
              peaceful temples of South India, we are here to walk with you every step of the way.
            </p>
          </div>
          <div className="about-story-images">
            <div className="about-story-image-main">
              <Image
                src="/kedarnath.png"
                alt="Spiritual journey at Kedarnath"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="about-story-image-sub">
              <Image
                src="/kashi.png"
                alt="Peaceful evening at Kashi"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
