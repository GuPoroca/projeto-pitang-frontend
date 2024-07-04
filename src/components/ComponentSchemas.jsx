import { z } from "zod";

export const formInputSchema = z.object({
  name: z.string(),
  label: z.string(),
  type: z.string().optional(),
});

export const formButtonSchema = z.object({
  label: z.string(),
  type: z.string().optional(),
});