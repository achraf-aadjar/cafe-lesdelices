export function Footer() {
  return (
    <footer className="bg-coffee px-5 py-10 text-cream/80 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-xl font-bold text-cream">Les Délices</p>
          <p className="mt-1 text-sm">373 Av. Lamine Gueye, Thiès, Sénégal</p>
        </div>
        <div className="text-sm">
          <p>© {new Date().getFullYear()} Les Délices. Tous droits réservés.</p>
          <p className="mt-1">Votre halte gourmande sur la route de Saint-Louis.</p>
        </div>
      </div>
    </footer>
  );
}
