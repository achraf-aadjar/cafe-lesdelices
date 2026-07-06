"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { menuCategories, menuNote, type MenuItem, type MenuSubsection } from "@/lib/menu-data";
import { Reveal } from "./Reveal";

function formatPrice(price: number) {
  return `${price.toLocaleString("fr-FR")} F`;
}

function ItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-coffee/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="min-w-0">
        <h4 className="font-display text-lg font-semibold text-coffee">{item.name}</h4>
        {item.description && (
          <p className="mt-1.5 text-sm leading-relaxed text-coffee-soft">{item.description}</p>
        )}
      </div>
      {item.price !== undefined && (
        <span className="shrink-0 whitespace-nowrap font-display text-lg font-bold text-terracotta">
          {formatPrice(item.price)}
        </span>
      )}
    </div>
  );
}

function SharedPriceGroup({ subsection }: { subsection: MenuSubsection }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {subsection.items.map((item) => (
        <span
          key={item.name}
          className="rounded-full border border-coffee/10 bg-white px-4 py-2 text-sm font-semibold text-coffee shadow-sm"
        >
          {item.name}
        </span>
      ))}
    </div>
  );
}

function Subsection({ subsection }: { subsection: MenuSubsection }) {
  return (
    <div>
      {subsection.title && (
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b-2 border-saffron/40 pb-2">
          <h3 className="font-display text-xl font-bold text-terracotta-dark">
            {subsection.title}
          </h3>
          {subsection.sharedPrice !== undefined && (
            <span className="font-display text-base font-bold text-terracotta">
              {formatPrice(subsection.sharedPrice)}
              <span className="ml-1 text-xs font-semibold text-coffee-soft">le verre</span>
            </span>
          )}
        </div>
      )}
      {subsection.note && (
        <p className="mb-4 -mt-2 text-sm italic text-coffee-soft">{subsection.note}</p>
      )}
      {subsection.sharedPrice !== undefined ? (
        <SharedPriceGroup subsection={subsection} />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {subsection.items.map((item) => (
            <ItemCard key={item.name} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Menu() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const shouldReduceMotion = useReducedMotion();
  const active = menuCategories.find((c) => c.id === activeId) ?? menuCategories[0];

  return (
    <section id="menu" className="bg-cream-soft px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-olive">
            De tout, et c&apos;est bon
          </p>
          <h2 className="text-center font-display text-4xl font-bold text-coffee sm:text-5xl">
            Le Menu
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-coffee-soft">
            Un grand choix pensé pour que chacun trouve son bonheur — familles, groupes, envies
            du moment. Parcourez par catégorie.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-10 -mx-5 sm:mx-0">
            <div
              role="tablist"
              aria-label="Catégories du menu"
              className="scrollbar-hide flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth px-5 pb-2 sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0"
            >
              {menuCategories.map((cat) => {
                const isActive = cat.id === activeId;
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${cat.id}`}
                    id={`tab-${cat.id}`}
                    onClick={() => setActiveId(cat.id)}
                    className={`shrink-0 snap-start rounded-full px-4 py-2.5 text-sm font-bold transition-colors sm:text-base ${
                      isActive
                        ? "bg-terracotta text-cream shadow-md"
                        : "bg-white text-coffee-soft hover:bg-terracotta/10 hover:text-terracotta"
                    }`}
                  >
                    {cat.shortLabel}
                  </button>
                );
              })}
            </div>
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-cream-soft to-transparent sm:hidden"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="mt-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-10 text-center font-display text-lg italic text-terracotta-dark">
                {active.intro}
              </p>

              <div className="space-y-10">
                {active.subsections.map((subsection, i) => (
                  <Subsection key={subsection.title ?? i} subsection={subsection} />
                ))}
              </div>

              {active.notes && (
                <div className="mt-10 space-y-1.5 rounded-2xl bg-olive/10 px-6 py-5 text-center">
                  {active.notes.map((note) => (
                    <p key={note} className="text-sm text-coffee-soft">
                      {note}
                    </p>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mx-auto mt-12 max-w-xl text-center text-sm text-coffee-soft/80">
          {menuNote}
        </p>
      </div>
    </section>
  );
}
