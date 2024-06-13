import { Meta, StoryFn } from '@storybook/react';
import BalanceInfoCard from '@components/BalanceInfoCard/BalanceInfoCard.tsx';
import { BalanceInfoCardProps } from '@components/BalanceInfoCard/types.ts';

export default {
  title: 'Example/BalanceInfoCard',
  component: BalanceInfoCard,
  argTypes: {
    amount: { control: 'text' },
    created_at: { control: 'date' },
    cashback_percentage: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<BalanceInfoCardProps> = (args) => (
  <BalanceInfoCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  amount: 4,
  created_at: new Date().toISOString(),
  cashback_percentage: 5,
};
