import { DateRange } from '@mui/lab';
import { Dayjs } from 'dayjs';

export interface DateTimePickerProps {
  startText: string;
  endText: string;
  value: DateRange<Dayjs>;
  setValue: (value: DateRange<Dayjs>) => void;
}
