import { z } from 'zod';
import { domen } from '@modules/RegistrationForm/_data.ts';

export const registrationSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  secondName: z.string().min(2, 'Second name is required'),
  phone: z
    .string()
    .min(5, 'Phone number   is 5 digits min')
    .max(9, 'Phone number is 9 digits max'),
  email: z
    .string()
    .min(1, 'Email is required')
    .refine((text) => domen.email.test(text), 'Email is not valid'),
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

export type Schema = z.infer<typeof registrationSchema>;
