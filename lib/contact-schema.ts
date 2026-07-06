import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Merci d'indiquer votre nom (2 caractères minimum).")
    .max(80, "Nom trop long."),
  phone: z
    .string()
    .trim()
    .min(9, "Merci d'indiquer un numéro de téléphone valide.")
    .max(20, "Numéro trop long."),
  email: z
    .union([z.literal(""), z.string().trim().email("Adresse e-mail invalide.")])
    .optional(),
  guests: z
    .string()
    .trim()
    .max(10, "Valeur invalide.")
    .optional(),
  message: z
    .string()
    .trim()
    .min(10, "Dites-nous en un peu plus (10 caractères minimum).")
    .max(1000, "Message trop long (1000 caractères maximum)."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
