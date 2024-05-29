// WE DO NOT SUPPORT RUSSIA IT'S OFFICIAL ZOD DOCS(
import { z } from 'zod';
import { patterns } from '@shared/constants';

export const loginFormSchema = z.object({
  email: z.string().email().min(1),
  password: z
    .string()
    .min(8, { message: 'Password must be not less than 8 characters' })
    .regex(patterns.password, {
      message:
        'Required at least one uppercase letter, one lowercase letter, one number and one special character',
    }),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
