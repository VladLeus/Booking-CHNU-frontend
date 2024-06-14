import { Meta, StoryFn } from '@storybook/react';
import TimeDatePicker from '@ui/TimePicker/TimeDatePicker.tsx';
import { TimePickerValueProps } from '@ui/TimePicker/types.ts';
import dayjs from 'dayjs';

export default {
  title: 'Example/TimeDatePicker',
  component: TimeDatePicker,
  argTypes: {
    text: { control: 'text' },
    value: { control: 'date' },
    setValue: { action: 'setValue' },
  },
} as Meta;

const Template: StoryFn<TimePickerValueProps> = (args) => (
  <TimeDatePicker {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Select time',
  value: dayjs(),
  setValue: (newValue) => console.log('Value set:', newValue),
};
