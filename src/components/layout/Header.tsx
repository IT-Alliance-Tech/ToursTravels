"use client";

import { useState, useEffect } from "react";
import { AtSign, MessageCircle, Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileNav ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileNav]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/#destinations" },
    { label: "About Us", href: "/#trust" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">
          <a href="#" className="logo">
            Tours<span>&</span>Travels
          </a>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="header-cta">
            <a
              href="https://wa.me/919876543210"
              className="btn-whatsapp-header"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Enquiry</span>
            </a>
            <a
              href="https://instagram.com"
              className="insta-icon-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <AtSign size={18} />
            </a>
          </div>

          <button
            className={`hamburger${mobileNav ? " active" : ""}`}
            onClick={() => setMobileNav(!mobileNav)}
            aria-label="Menu"
          >
            {mobileNav ? <X size={24} color={scrolled ? "#1F2937" : "#fff"} /> : <Menu size={24} color={scrolled ? "#1F2937" : "#fff"} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className={`mobile-nav${mobileNav ? " active" : ""}`}>
        <div className="mobile-nav-content">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileNav(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/919876543210"
            className="btn-whatsapp-mobile"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileNav(false)}
          >
            <MessageCircle size={18} />
            WhatsApp Enquiry
          </a>
          <a
            href="https://instagram.com"
            className="btn-instagram-mobile"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileNav(false)}
          >
            <AtSign size={18} />
            Follow on Instagram
          </a>
        </div>
      </div>
    </>
  );
}
