import { z } from 'zod';
import 'dayjs/locale/uk';

import dayJsSchema from '@modules/RegistrationForm/schema/dayjsSchema.ts';
import dayjs from 'dayjs';
import { passwordSchema } from '@shared/schema';

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
      .email('Некоректна електронна адреса'),
    password: passwordSchema,
    passwordConfirmation: passwordSchema,
    gender: z.string().min(1, "Обов'язкове поле"),
    birthdate: dayJsSchema.nullable().refine((data) => {
      const today = dayjs();
      const age = today.diff(data, 'year');
      return age >= 18 && age <= 90;
    }, 'Вік має бути від 18 до 90'),
  })
  .refine((schema) => schema.password === schema.passwordConfirmation, {
    message: 'Паролі не співпадають',
    path: ['passwordConfirmation'],
  });

export type RegistrationSchema = z.infer<typeof registrationSchema>;
