import { Reveal } from "./Reveal";

const galleryItems = [
  { emoji: "🍕", label: "Pizza cuite au four", gradient: "from-terracotta to-chili" },
  { emoji: "🐟", label: "Poisson grillé du jour", gradient: "from-olive to-olive-soft" },
  { emoji: "🍝", label: "Pâtes aux fruits de mer", gradient: "from-saffron to-terracotta" },
  { emoji: "🥐", label: "Viennoiseries maison", gradient: "from-saffron-soft to-saffron" },
  { emoji: "🍢", label: "Brochettes grillées", gradient: "from-chili to-terracotta-dark" },
  { emoji: "🥗", label: "Salade fraîcheur", gradient: "from-olive-soft to-olive" },
  { emoji: "🍔", label: "Burger Délices", gradient: "from-terracotta-dark to-chili" },
  { emoji: "🎂", label: "Pâtisseries généreuses", gradient: "from-saffron to-saffron-soft" },
];

export function Gallery() {
  return (
    <section id="galerie" className="bg-cream px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-olive">
            Un aperçu
          </p>
          <h2 className="text-center font-display text-4xl font-bold text-coffee sm:text-5xl">
            Galerie
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-coffee-soft">
            La diversité de nos plats et l&apos;ambiance conviviale de la maison.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {galleryItems.map((item, i) => (
            <Reveal key={item.label} delay={(i % 4) * 0.06}>
              <div
                className={`group relative aspect-square overflow-hidden rounded-2xl bg-linear-to-br ${item.gradient} shadow-sm transition-transform hover:scale-[1.03] hover:shadow-lg`}
              >
                <div
                  className="flex h-full items-center justify-center text-5xl sm:text-6xl"
                  aria-hidden="true"
                >
                  {item.emoji}
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-coffee/60 px-3 py-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <p className="text-xs font-semibold text-cream sm:text-sm">{item.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
