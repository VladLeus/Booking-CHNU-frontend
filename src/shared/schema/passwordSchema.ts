import { z } from 'zod';
import { PATTERNS } from '@shared/constants';

export const passwordSchema = z
  .string()
  .min(8, 'Пароль має містити хоча б 8 символів')
  .regex(PATTERNS.password, {
    message:
      'Пароль має містити хоча б: одну велику та маленьку латинські літери, число та спеціальний символ',
  });
