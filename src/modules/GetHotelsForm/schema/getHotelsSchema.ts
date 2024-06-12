import { z } from 'zod';

export const getHotelsSchema = z.object({
  city: z.string().min(1, "Обов'язкове поле"),
});

export type GetHotelsSchema = z.infer<typeof getHotelsSchema>;
