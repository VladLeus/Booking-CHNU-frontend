import { z } from 'zod';
import 'dayjs/locale/uk';

import dayJsSchema from '@modules/RegistrationForm/schema/dayjsSchema.ts';
import dayjs from 'dayjs';
import { passwordSchema } from '@shared/schema';

export const userDataEditSchema = z
  .object({
    name: z.string().min(2, "Обов'язкове поле"),
    surname: z.string().min(2, "Обов'язкове поле"),
    phone: z
      .string()
      .min(10, 'Номер має містити 10 цифр')
      .max(10, 'Номер має містити 10 цифр'),
    email: z
      .string()
      .min(1, "Обов'язкове поле")
      .email('Некоректна електронна адреса'),
    current_password: passwordSchema,
    new_password: passwordSchema.nullable(),
    new_password_confirmation: passwordSchema.nullable(),
    gender: z.string().min(1, "Обов'язкове поле"),
    birthdate: dayJsSchema.nullable().refine((data) => {
      const today = dayjs();
      const age = today.diff(data, 'year');
      return age >= 18 && age <= 90;
    }, 'Вік має бути від 18 до 90'),
  })
  .refine(
    (schema) => schema.new_password === schema.new_password_confirmation,
    {
      message: 'Паролі не співпадають',
      path: ['passwordConfirmation'],
    },
  );

export type UserDataEditSchema = z.infer<typeof userDataEditSchema>;
