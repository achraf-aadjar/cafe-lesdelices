const quickLinks = [
  { href: "#menu", label: "Le Menu" },
  { href: "#galerie", label: "Galerie" },
  { href: "#localisation", label: "Comment venir" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-coffee to-[#2a1c13] text-cream/80">
      <div
        className="h-1.5 w-full bg-linear-to-r from-terracotta via-saffron to-olive"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="font-display text-2xl font-bold text-cream">Les Délices</p>
            <p className="mt-2 text-sm leading-relaxed">
              373 Av. Lamine Gueye
              <br />
              Thiès, Sénégal
            </p>
            <a
              href="tel:+221339517516"
              className="mt-2 inline-block text-sm font-semibold text-saffron-soft hover:text-saffron"
            >
              33 951 75 16
            </a>
          </div>

          <div>
            <p className="font-display text-lg font-bold text-cream">Liens rapides</p>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-cream">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-lg font-bold text-cream">Ouvert 24h/24, 7j/7</p>
            <p className="mt-2 text-sm leading-relaxed">
              Votre halte gourmande sur la route de Saint-Louis, à toute heure.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-center text-xs text-cream/60">
          © {new Date().getFullYear()} Les Délices. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
