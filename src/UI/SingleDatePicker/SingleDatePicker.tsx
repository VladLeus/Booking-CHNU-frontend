import { Controller, FieldValues } from 'react-hook-form';
import { SingleDatePickerProps } from './types.ts';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/uk';
import { DatePicker } from '@mui/x-date-pickers';
import { TextField, TextFieldProps } from '@mui/material';

const SingleDatePicker = <T extends FieldValues>({
  name,
  control,
  label,
  error,
  helperText,
}: SingleDatePickerProps<T>) => {
  return (
    <></>
    /*<Controller
      name={name}
      control={control}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'uk'}>
          <DatePicker {...field} label={label} />
        </LocalizationProvider>
      )}
    />*/
  );
};

export default SingleDatePicker;
