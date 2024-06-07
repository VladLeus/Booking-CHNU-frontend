import { z } from 'zod';
import 'dayjs/locale/uk';
import dayjs from 'dayjs';

import dayJsSchema from '@modules/RegistrationForm/schema/dayjsSchema.ts';

export const carBookingSchema = z
  .object({
    firstName: z.string().min(2, "Обов'язкове поле"),
    surname: z.string().min(2, "Обов'язкове поле"),
    start_date: dayJsSchema
      .nullable()
      .refine((data) => data !== null, 'Оберіть початок оренди'),
    end_date: dayJsSchema
      .nullable()
      .refine((data) => data !== null, 'Оберіть кінець оренди'),
  })
  .refine(
    (data) => {
      if (data.start_date && data.end_date) {
        return dayjs(data.end_date).isAfter(dayjs(data.start_date));
      }
      return true;
    },
    {
      message: 'Дата закінчення не має бути ранішою за дату початку',
      path: ['end_date'],
    },
  )
  .refine(
    (data) => {
      if (data.start_date && data.end_date) {
        return dayjs(data.start_date).isBefore(dayjs(data.end_date));
      }
      return true;
    },
    {
      message: 'Дата початку має раніше дати закінчення',
      path: ['start_date'],
    },
  );

export type CarBookingSchema = z.infer<typeof carBookingSchema>;
