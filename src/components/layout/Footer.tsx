"use client";

import { AtSign, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="/" className="logo">
              Tours<span>&</span>Travels
            </a>
            <p>
              Premium spiritual travel experiences for families and senior
              citizens. Trusted pilgrimage coordination across India and
              international destinations.
            </p>
            <div className="footer-social-inline">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <AtSign size={18} />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/#destinations">Packages</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4>Popular Destinations</h4>
            <ul className="footer-links">
              <li><a href="/#destinations">Char Dham</a></li>
              <li><a href="/#destinations">Kashi &amp; Ayodhya</a></li>
              <li><a href="/#destinations">Jyotirlinga Tours</a></li>
              <li><a href="/#destinations">Nepal Spiritual Tours</a></li>
              <li><a href="/#destinations">Kedarnath &amp; Badrinath</a></li>
              <li><a href="/#destinations">South India Temple Tours</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4>Contact Details</h4>
            <ul className="footer-links footer-contact-list">
              <li>
                <MessageCircle size={15} className="footer-contact-icon" />
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">WhatsApp Support</a>
              </li>
              <li>
                <AtSign size={15} className="footer-contact-icon" />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram Page</a>
              </li>
              <li>
                <MapPin size={15} className="footer-contact-icon" />
                <span>Bangalore, Karnataka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>© 2026 ToursAndTravels.online — Premium Spiritual Travel Experiences for Families &amp; Senior Citizens.</p>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <AtSign size={16} />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
