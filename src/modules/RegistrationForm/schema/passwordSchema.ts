import { z } from 'zod';
import { patterns } from '@shared/constants';

const passwordSchema = z
  .string()
  .min(8, 'Пароль має містити хоча б 8 символів')
  .regex(patterns.password, {
    message:
      'Пароль має містити хоча б: одну велику та маленьку латинські літери, число та спеціальний символ',
  });

export default passwordSchema;
