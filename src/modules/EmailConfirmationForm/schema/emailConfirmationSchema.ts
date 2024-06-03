import { z } from 'zod';

export const emailConfirmationSchema = z.object({
  code: z
    .string()
    .min(1, 'Код має містити 6 цифр')
    .max(6, 'Код має містити 6 цифр'),
});

export type EmailConfirmationSchema = z.infer<typeof emailConfirmationSchema>;
