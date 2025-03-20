import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  username: z.optional(
    z.string().min(3, "Username must be at least 3 characters")
  ),
});
