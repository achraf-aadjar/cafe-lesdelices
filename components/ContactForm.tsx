"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { WhatsAppIcon } from "./WhatsAppIcon";

// Numéro WhatsApp du restaurant (format international sans le +)
const WHATSAPP_NUMBER = "221787500707";

const fieldClasses =
  "w-full rounded-xl border-2 border-coffee/15 bg-white px-4 py-3 text-base text-coffee placeholder:text-coffee-soft/50 transition-colors focus:border-terracotta";

function buildWhatsAppMessage(values: ContactFormValues) {
  const lines = [
    "Bonjour Les Délices,",
    "Nouvelle demande depuis le site :",
    "",
    `Nom : ${values.name}`,
    `Téléphone : ${values.phone}`,
  ];
  if (values.email) lines.push(`E-mail : ${values.email}`);
  if (values.guests) lines.push(`Nombre de personnes : ${values.guests}`);
  lines.push("", `Message : ${values.message}`);
  return lines.join("\n");
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "", guests: "", message: "" },
  });

  const onSubmit = (values: ContactFormValues) => {
    const text = encodeURIComponent(buildWhatsAppMessage(values));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("success");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-coffee">
            Nom complet
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className={fieldClasses}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm font-semibold text-chili">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-coffee">
            Téléphone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="77 000 00 00"
            className={fieldClasses}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-sm font-semibold text-chili">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-coffee">
            E-mail <span className="font-normal text-coffee-soft">(facultatif)</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={fieldClasses}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-sm font-semibold text-chili">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="guests" className="mb-1.5 block text-sm font-bold text-coffee">
            Nombre de personnes <span className="font-normal text-coffee-soft">(facultatif)</span>
          </label>
          <input
            id="guests"
            type="text"
            inputMode="numeric"
            placeholder="Ex : 4"
            className={fieldClasses}
            aria-invalid={!!errors.guests}
            aria-describedby={errors.guests ? "guests-error" : undefined}
            {...register("guests")}
          />
          {errors.guests && (
            <p id="guests-error" className="mt-1.5 text-sm font-semibold text-chili">
              {errors.guests.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-coffee">
          Votre message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Réservation, question sur le menu, groupe important..."
          className={`${fieldClasses} resize-none`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm font-semibold text-chili">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-chili px-7 py-3.5 text-base font-bold text-cream shadow-md transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        <WhatsAppIcon className="h-5 w-5" />
        {isSubmitting ? "Ouverture de WhatsApp..." : "Envoyer sur WhatsApp"}
      </button>

      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="text-sm font-semibold text-olive">
            Merci ! WhatsApp s&apos;ouvre avec votre message — appuyez sur Envoyer pour finaliser.
            Si rien ne s&apos;ouvre, appelez-nous au 33 951 75 16.
          </p>
        )}
      </div>
    </form>
  );
}
