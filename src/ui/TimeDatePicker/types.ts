import { Dayjs } from 'dayjs';

export interface TimePickerValueProps {
  text: string;
  value: Dayjs | null;
  setValue: (newValue: Dayjs | null) => void;
}
