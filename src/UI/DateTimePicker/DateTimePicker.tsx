import { FC } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import 'dayjs/locale/uk';
import Calendar from '@mui/icons-material/Event';
import { DateTimePickerProps } from './types.ts';

const DateTimePicker: FC<DateTimePickerProps> = ({
  startText,
  endText,
  value,
  setValue,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'uk'}>
      <DateRangePicker
        disablePast
        sx={{
          width: 'auto',
        }}
        slots={{ field: SingleInputDateRangeField }}
        slotProps={{
          textField: {
            placeholder: `${startText} - ${endText}`,
            InputProps: { startAdornment: <Calendar sx={{ mr: 1 }} /> },
          },
        }}
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
