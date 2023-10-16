import { z } from "zod";

export const contactSchema = z.object({
  dni: z.string().regex(/^(?:\D*\d){8}\D*$/, "Ingrese un DNI valido"),
  phone: z.string().regex(/^(?:\D*\d){9}\D*$/, "Ingrese su numero de celular"),
  service: z.string(),
  description: z.string().optional(),
});
