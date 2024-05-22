import { FC } from 'react';
import { DateRange } from '@mui/lab';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { Dayjs } from 'dayjs';

interface Props {
  startText: string;
  endText: string;
  value: DateRange<Dayjs>;
  setValue: (value: DateRange<Dayjs>) => void;
}

const DateTimePicker: FC<Props> = ({ startText, endText, value, setValue }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        slots={{ field: SingleInputDateRangeField }}
        localeText={{ start: startText, end: endText }}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
};

export default DateTimePicker;
