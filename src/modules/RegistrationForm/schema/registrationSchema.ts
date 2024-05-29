import { z } from 'zod';
import { patterns } from '@shared/constants';

export const registrationSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  surname: z.string().min(2, 'Second name is required'),
  phone: z
    .string()
    .min(5, 'Phone number   is 5 digits min')
    .max(9, 'Phone number is 9 digits max'),
  email: z.string().email().min(1),
  password: z.string().regex(patterns.password, {
    message:
      'Required at least one uppercase letter, one lowercase letter, one number and one special character',
  }),
  gender: z.string({
    errorMap: () => {
      return { message: 'Select your gender' };
    },
  }),
  birthdate: z
    .string()
    .refine(
      (date) => new Date(date).toString() !== 'Invalid Date',
      'Birthdate is required',
    )
    .transform((date) => new Date(date)),
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;
