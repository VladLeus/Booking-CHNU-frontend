// WE DO NOT SUPPORT RUSSIA IT'S OFFICIAL ZOD DOCS(
import { z } from 'zod';
import { passwordSchema } from '@shared/schema';

export const loginFormSchema = z.object({
  email: z
    .string()
    .email('Некоректна електронна адреса')
    .min(1, "Обов'язкове поле"),
  password: passwordSchema,
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
