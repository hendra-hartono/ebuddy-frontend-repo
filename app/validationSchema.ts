import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, "Name is required.").max(100),
  email: z.string().email("Invalid email."),
  mobilePhone: z.string().min(1, "Mobile Phone is required.").max(15),
});
