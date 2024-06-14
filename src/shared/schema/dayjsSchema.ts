import { z } from 'zod';
import dayjs, { Dayjs } from 'dayjs';

const dayJsSchema = z.custom<Dayjs>(
  (val) => val instanceof dayjs,
  'Invalid date',
);

export default dayJsSchema;
