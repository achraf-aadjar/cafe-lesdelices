import Image from "next/image";
import { Reveal } from "./Reveal";

const galleryItems = [
  { src: "/images/galerie/patisseries.webp", label: "Nos pâtisseries" },
  { src: "/images/galerie/viennoiseries.webp", label: "Viennoiseries maison" },
  { src: "/images/galerie/pains.webp", label: "Pains & baguettes du jour" },
  { src: "/images/galerie/salle-elegante.webp", label: "Une salle élégante" },
  { src: "/images/galerie/salle.webp", label: "L'espace convivial" },
  { src: "/images/galerie/decor.webp", label: "Un décor soigné" },
];

export function Gallery() {
  return (
    <section id="galerie" className="relative overflow-hidden bg-coffee px-5 py-20 sm:px-8 sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-terracotta blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-saffron blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-saffron-soft">
            Un aperçu
          </p>
          <h2 className="text-center font-display text-4xl font-bold text-cream sm:text-5xl">
            Galerie
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-cream/70">
            Nos gourmandises et l&apos;ambiance chaleureuse de la maison.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
          {galleryItems.map((item, i) => (
            <Reveal key={item.src} delay={(i % 3) * 0.06}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg shadow-black/30 transition-transform hover:scale-[1.03] hover:shadow-xl">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-coffee/85 to-transparent px-3 pb-3 pt-8">
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
