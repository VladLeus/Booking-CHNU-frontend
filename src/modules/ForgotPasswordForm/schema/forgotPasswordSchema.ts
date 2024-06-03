import { z } from 'zod';

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .email('Некоректна електронна адреса')
    .min(1, "Обов'язкове поле"),
});

export type ForgotPasswordFormSchema = z.infer<typeof forgotPasswordSchema>;
