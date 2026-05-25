"use client";
import { useState, useEffect } from "react";
import ClientLogo from "./ClientLogo";

const WA_LINK =
  "https://wa.me/5551999999999?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20meu%20diagn%C3%B3stico%20gratuito%20com%20a%20RG%20Performance";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Método", href: "#metodo" },
    { label: "Para Quem", href: "#para-quem" },
    { label: "Como Começar", href: "#como-comecar" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-rg-black/95 backdrop-blur-md border-b border-rg-accent/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <ClientLogo size="md" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-manrope text-sm text-rg-gray hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-rg-accent text-rg-black font-sora font-bold text-sm rounded-lg hover:bg-rg-glow transition-all hover:shadow-[0_0_20px_rgba(0,230,118,0.35)] active:scale-95"
        >
          Diagnóstico Gratuito
          <svg
            width="13"
            height="13"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M2.5 6.5h8M6.5 2.5l4.5 4-4.5 4" />
          </svg>
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? (
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-rg-black/98 border-t border-rg-accent/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-manrope text-sm text-rg-gray hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-rg-accent text-rg-black font-sora font-bold text-sm rounded-lg mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Diagnóstico Gratuito
          </a>
        </div>
      )}
    </nav>
  );
}
