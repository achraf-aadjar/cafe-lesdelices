import { Reveal } from "./Reveal";

export function Location() {
  return (
    <section id="localisation" className="bg-cream-soft px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-olive">
            Comment venir
          </p>
          <h2 className="text-center font-display text-4xl font-bold text-coffee sm:text-5xl">
            Votre étape avant Saint-Louis
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-coffee-soft">
            Sur la route de Saint-Louis, juste après le rond-point de l&apos;Hôtel de Ville de
            Thiès — ouvert 24h/24, le point d&apos;arrêt idéal à toute heure du jour ou de la
            nuit.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border-4 border-white shadow-lg">
              <iframe
                title="Localisation de Les Délices, 373 Av. Lamine Gueye, Thiès"
                src="https://www.google.com/maps?q=373+Av.+Lamine+Gueye,+Thi%C3%A8s,+S%C3%A9n%C3%A9gal&output=embed"
                className="h-80 w-full sm:h-full sm:min-h-[22rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-6 rounded-3xl bg-coffee px-7 py-8 text-cream shadow-lg sm:px-9 sm:py-10">
              <div>
                <h3 className="font-display text-xl font-bold text-saffron-soft">Adresse</h3>
                <p className="mt-2 text-lg leading-relaxed">
                  373 Av. Lamine Gueye
                  <br />
                  Thiès, Sénégal
                </p>
                <p className="mt-1 text-sm text-cream/70">
                  Après le rond-point de l&apos;Hôtel de Ville, direction Saint-Louis.
                </p>
              </div>

              <div className="h-px w-full bg-cream/15" />

              <div>
                <h3 className="font-display text-xl font-bold text-saffron-soft">Horaires</h3>
                <p className="mt-2 text-2xl font-bold text-cream">Ouvert 24h/24, 7j/7</p>
                <p className="mt-1 text-sm text-cream/70">
                  Un arrêt possible à toute heure, de jour comme de nuit.
                </p>
              </div>

              <div className="h-px w-full bg-cream/15" />

              <p className="font-display text-lg italic text-cream/90">
                Une pause chaleureuse, un plat généreux, et la route reprend l&apos;esprit léger.
              </p>

              <a
                href="https://www.google.com/maps?q=373+Av.+Lamine+Gueye,+Thi%C3%A8s,+S%C3%A9n%C3%A9gal"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-fit items-center justify-center gap-2 rounded-full bg-saffron px-6 py-3 text-sm font-bold text-coffee transition-transform hover:scale-105"
              >
                Ouvrir l&apos;itinéraire
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
