"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210"
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} />
      <div className="pulse" />
    </a>
  );
}
