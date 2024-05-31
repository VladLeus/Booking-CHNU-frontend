import { Controller, FieldValues } from 'react-hook-form';
import { SingleDatePickerProps } from './types';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/uk';
import { DatePicker, PickersLocaleText } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

const customPtBRLocaleText: Partial<PickersLocaleText<Dayjs>> = {
  okButtonLabel: 'Ок',
  cancelButtonLabel: 'Відмінити',
};

const SingleDatePicker = <T extends FieldValues>({
  name,
  control,
  label,
  error,
  helperText,
  disableFuture,
}: SingleDatePickerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'uk'}>
          <DatePicker
            {...field}
            label={label}
            disableFuture={disableFuture}
            localeText={customPtBRLocaleText}
            slotProps={{
              textField: {
                error: error,
                helperText: helperText,
                fullWidth: true,
              },
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default SingleDatePicker;
