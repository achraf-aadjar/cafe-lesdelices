import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-cream px-5 py-20 sm:px-8 sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-15" aria-hidden="true">
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-olive blur-3xl" />
        <div className="absolute -top-16 right-0 h-64 w-64 rounded-full bg-terracotta blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-olive">
            Une question, une réservation ?
          </p>
          <h2 className="text-center font-display text-4xl font-bold text-coffee sm:text-5xl">
            Contactez-nous
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 grid max-w-xl gap-4 sm:grid-cols-2">
            <a
              href="tel:+221339517516"
              className="flex flex-col items-center gap-2 rounded-2xl border border-coffee/10 bg-white px-5 py-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-2xl" aria-hidden="true">📞</span>
              <span className="font-bold text-coffee">33 951 75 16</span>
              <span className="text-sm text-coffee-soft">Appelez-nous</span>
            </a>
            <a
              href="https://wa.me/221787500707"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 rounded-2xl border border-coffee/10 bg-white px-5 py-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-2xl" aria-hidden="true">💬</span>
              <span className="font-bold text-coffee">78 750 07 07</span>
              <span className="text-sm text-coffee-soft">WhatsApp</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 rounded-3xl border border-coffee/10 bg-cream-soft p-6 shadow-sm sm:p-9">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
