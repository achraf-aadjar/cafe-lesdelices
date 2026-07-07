"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/public/images/logo.webp";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#bienvenue", label: "Bienvenue" },
  { href: "#menu", label: "Le Menu" },
  { href: "#galerie", label: "Galerie" },
  { href: "#localisation", label: "Comment venir" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled
          ? "border-cream/15 bg-coffee/55 shadow-md backdrop-blur-lg"
          : "border-cream/10 bg-coffee/35 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#accueil"
          className="flex items-center rounded-xl"
          aria-label="Les Délices — retour à l'accueil"
        >
          <Image
            src={logo}
            alt="Les Délices"
            priority
            className="h-12 w-12 rounded-xl object-cover shadow-md ring-1 ring-black/5 sm:h-14 sm:w-14"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-cream/90 transition-colors hover:bg-white/15 hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+221339517516"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-chili px-5 py-2.5 text-sm font-bold text-cream shadow-sm transition-transform hover:scale-105 hover:bg-terracotta-dark"
        >
          Appeler le restaurant
        </a>

        <button
          type="button"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-cream/30 text-cream"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navigation mobile"
          className="lg:hidden border-t border-coffee/10 bg-cream px-5 pb-6 pt-2"
        >
          <ul className="flex flex-col divide-y divide-coffee/10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3.5 text-base font-semibold text-coffee"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:+221339517516"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-chili px-5 py-3 text-sm font-bold text-cream"
          >
            Appeler le restaurant
          </a>
        </nav>
      )}
    </header>
  );
}
