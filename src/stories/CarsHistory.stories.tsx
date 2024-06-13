import { Meta, StoryFn } from '@storybook/react';
import CarsHistory from '@components/CarsHistory/CarsHistory.tsx';
import { CarsHistoryProps } from '@components/CarsHistory/types.ts';

export default {
  title: 'Example/CarsHistory',
  component: CarsHistory,
  argTypes: {
    id: { control: 'text' },
    car_id: { control: 'text' },
    start_date: { control: 'text' },
    end_date: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<CarsHistoryProps> = (args) => <CarsHistory {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  car_id: 1,
  start_date: '2024-06-01',
  end_date: '2024-06-05',
};
