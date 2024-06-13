import { Meta, StoryFn } from '@storybook/react';
import ApartamentsHistory from '@components/ApartamentsHistory/ApartamentsHistory.tsx';
import { ApartmentsHistoryProps } from '@components/ApartamentsHistory/types.ts';

export default {
  title: 'Example/ApartamentsHistory',
  component: ApartamentsHistory,
  argTypes: {
    id: { control: 'text' },
    apartment_id: { control: 'text' },
    start_date: { control: 'text' },
    end_date: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<ApartmentsHistoryProps> = (args) => (
  <ApartamentsHistory {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: 1,
  apartment_id: 1,
  start_date: '2023-01-01',
  end_date: '2023-12-31',
};
