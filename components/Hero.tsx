"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { RouteDivider } from "./RouteDivider";
import heroImage from "@/public/images/hero-accueil.jpg";

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function FishIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3 12c3-4 8-6 13-6 3 0 5 2.5 5 6s-2 6-5 6c-5 0-10-2-13-6Z" />
      <path d="M17 9.5c1 .6 1 1.4 0 2" />
      <path d="M3 12c1.2-1 2.6-1 3.8 0" />
      <circle cx="14.2" cy="10.3" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BowlIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 11h16" />
      <path d="M4 11c0 4.5 3.6 8 8 8s8-3.5 8-8" />
      <path d="M9 11V7a3 3 0 0 1 6 0v4" />
    </svg>
  );
}

function CroissantIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 15c1-5 4-9 9-10 3.5-.7 7 1 8 4-2-1-4-1-5 .5 2 0 3.5 1.5 3.5 3.5-1.5-1-3-1-4 .5 1.5 0 2.5 1.5 2 3-3 3-9 3-13.5-1.5Z" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="18" cy="18" r="2.2" />
      <path d="M7.8 7.5c2 2 2.5 4 1.5 6-1 2 .5 4 2.5 4" strokeDasharray="3 3" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 21s-6.5-6.1-6.5-11A6.5 6.5 0 0 1 18.5 10c0 4.9-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="accueil"
      className="relative overflow-hidden text-cream"
    >
      <Image
        src={heroImage}
        alt="La salle de Les Délices, ambiance chaleureuse et accueillante"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Voile sombre léger pour la lisibilité, sans teinter la photo */}
      <div
        className="absolute inset-0 bg-linear-to-b from-black/55 via-black/35 to-black/55"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:pt-28">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide backdrop-blur-md"
        >
          <PinIcon /> 373 Av. Lamine Gueye, Thiès
        </motion.p>

        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-7xl"
        >
          Les Délices
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl font-display text-xl italic leading-relaxed text-cream drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-2xl"
        >
          Votre halte gourmande avant de reprendre la route de Saint-Louis — un grand choix de
          plats généreux, préparés avec soin, pour repartir le sourire aux lèvres.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#menu"
            className="inline-flex items-center justify-center rounded-full bg-coffee px-7 py-3.5 text-base font-bold text-cream shadow-lg transition-transform hover:scale-105"
          >
            Découvrir le menu
          </a>
          <a
            href="#localisation"
            className="inline-flex items-center justify-center rounded-full border border-cream/40 bg-white/10 px-7 py-3.5 text-base font-bold text-cream backdrop-blur-md transition-colors hover:bg-white/20"
          >
            Comment venir
          </a>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-cream drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]"
        >
          <span className="inline-flex items-center gap-2">
            <FishIcon /> Poisson frais du matin
          </span>
          <span className="inline-flex items-center gap-2">
            <BowlIcon /> Pâtes, pizzas, grillades &amp; plus
          </span>
          <span className="inline-flex items-center gap-2">
            <CroissantIcon /> Pâtisseries maison
          </span>
          <span className="inline-flex items-center gap-2">
            <RouteIcon /> Ouvert 24h/24, 7j/7
          </span>
        </motion.div>
      </div>

      <div className="relative text-coffee">
        <RouteDivider />
      </div>
    </section>
  );
}
