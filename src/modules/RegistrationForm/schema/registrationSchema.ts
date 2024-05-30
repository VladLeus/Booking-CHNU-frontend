import { z } from 'zod';
import { patterns } from '@shared/constants';

const passwordSchema = z
  .string()
  .min(8, 'Пароль має містити хоча б 8 символів')
  .regex(patterns.password, {
    message:
      'Пароль має містити хоча б: одну велику та маленьку літери, число та спеціальний символ',
  });

export const registrationSchema = z
  .object({
    firstName: z.string().min(2, "Обов'язкове поле"),
    surname: z.string().min(2, "Обов'язкове поле"),
    phone: z
      .string()
      .min(10, 'Номер має містити 10 цифр')
      .max(10, 'Номер має містити 10 цифр'),
    email: z
      .string()
      .min(1, "Обов'язкове поле")
      .email('Електронна адреса не валідна'),
    password: passwordSchema,
    passwordConfirmation: passwordSchema,
    gender: z.string().min(1, "Обов'язкове поле"),
    birthdate: z
      .string()
      .refine(
        (date) => new Date(date).toString() !== 'Invalid Date',
        "Дата народження є обов'язковим полем",
      )
      .transform((date) => new Date(date)),
  })
  .refine((schema) => schema.password === schema.passwordConfirmation, {
    message: 'Паролі не співпадають',
    path: ['passwordConfirmation'],
  });

export type RegistrationSchema = z.infer<typeof registrationSchema>;
