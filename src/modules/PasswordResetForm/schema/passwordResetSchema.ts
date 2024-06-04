import { z } from 'zod';
import { passwordSchema } from '@shared/schema';

export const passwordResetSchema = z
  .object({
    password: passwordSchema,
    passwordConfirmation: passwordSchema,
  })
  .refine((schema) => schema.password === schema.passwordConfirmation, {
    message: 'Паролі не співпадають',
    path: ['passwordConfirmation'],
  });

export type PasswordResetSchema = z.infer<typeof passwordResetSchema>;
