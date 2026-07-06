import { Reveal } from "./Reveal";

export function Welcome() {
  return (
    <section id="bienvenue" className="bg-cream px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-bold uppercase tracking-wide text-terracotta sm:text-5xl">
            Bienvenue à &laquo; Les Délices&nbsp;&raquo;
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-saffron" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-lg leading-relaxed text-coffee-soft">
            Un restaurant généreux et chaleureux, niché sur la route de Saint-Louis à Thiès.
            Pâtes, pizzas, grillades, spécialités orientales et asiatiques, poissons frais du
            matin, sandwichs, burgers et pâtisseries maison — un grand choix pensé pour que
            chacun, en famille ou entre amis, trouve exactement ce qui lui fait plaisir. Que vous
            soyez de passage avant de reprendre la route ou simplement venus faire une pause
            gourmande, &laquo; Les Délices &raquo; vous offre un accueil chaleureux et des plats
            généreux, préparés chaque jour avec des produits frais.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
