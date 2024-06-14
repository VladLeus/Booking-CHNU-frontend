import { z } from 'zod';
import 'dayjs/locale/uk';
import dayjs from 'dayjs';
import dayJsSchema from '@shared/schema/dayjsSchema.ts';

const currentDate = dayjs();

export const roomBookingSchema = z
  .object({
    firstName: z.string().min(2, "Обов'язкове поле"),
    start_date: dayJsSchema
      .nullable()
      .refine((data) => data !== null, 'Оберіть початок оренди')
      .refine(
        (data) => dayjs(data).isAfter(currentDate),
        'Дата початку не може бути в минулому',
      ),
    end_date: dayJsSchema
      .nullable()
      .refine((data) => data !== null, 'Оберіть кінець оренди')
      .refine(
        (data) => dayjs(data).isAfter(currentDate),
        'Дата закінчення не може бути в минулому',
      ),
  })
  .refine(
    (data) => {
      if (data.start_date && data.end_date) {
        return dayjs(data.end_date).isAfter(dayjs(data.start_date), 'day');
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
        return dayjs(data.start_date).isBefore(dayjs(data.end_date), 'day');
      }
      return true;
    },
    {
      message: 'Дата початку має бути раніше дати закінчення',
      path: ['start_date'],
    },
  );

export type RoomBookingSchema = z.infer<typeof roomBookingSchema>;
