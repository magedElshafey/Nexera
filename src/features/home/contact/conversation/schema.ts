import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, { message: "name.too_small" }),
  email: z.string().email({ message: "email.invalid" }),
  service: z.string().min(2, { message: "service.too_small" }),
  message: z.string().min(5, { message: "message.too_small" }),
});
