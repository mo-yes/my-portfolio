import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .nonempty("Name is required")
    .min(1, "Name is required")
    .regex(/^[A-Za-z\s]+$/, "Name must only contain letters and spaces"),

  email: z
    .string()
    .nonempty("Email is required")
    .min(1, "Email is required")
    .regex(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.{A-za-z}{2,}$/, "Invalid email format"),

  phone: z
    .string()
    .nonempty("Phone is required")
    .min(1, "Phone is required")
    .regex(
      /^\+?[0-9]{7,15}$/,
      "Phone must contain only numbers and optional leading +"
    ),

  message: z
    .string()
    .nonempty("Message is required")
    .min(1, "Message is required")
    .max(1000, "Message is too long"),
});
