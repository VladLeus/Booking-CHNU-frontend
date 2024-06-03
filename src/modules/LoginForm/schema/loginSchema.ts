// WE DO NOT SUPPORT RUSSIA IT'S OFFICIAL ZOD DOCS(
import { z } from 'zod';
import { patterns } from '@shared/constants';

export const loginFormSchema = z.object({
  email: z
    .string()
    .email('Некоректна електронна адреса')
    .min(1, "Обов'язкове поле"),
  password: z
    .string()
    .min(8, { message: 'Пароль має бути не менше 8 символів' })
    .regex(patterns.password, {
      message:
        'Пароль має містити хоча б: одну велику та маленьку літери, число та спеціальний символ',
    }),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
