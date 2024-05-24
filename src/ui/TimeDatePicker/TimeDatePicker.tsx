import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TimePickerValueProps } from './types.ts';
import { FC } from 'react';

const TimeDatePicker: FC<TimePickerValueProps> = ({
  text,
  value,
  setValue,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']} sx={{ py: 0 }}>
        <TimePicker
          slotProps={{
            textField: {
              placeholder: `${text}`,
            },
          }}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          ampm={false}
          format="HH:mm"
          sx={{ width: '150px' }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default TimeDatePicker;
