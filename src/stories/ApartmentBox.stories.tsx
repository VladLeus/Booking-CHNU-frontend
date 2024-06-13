import { Meta, StoryFn } from '@storybook/react';
import ApartmentBox from '@components/ApartmentBox/ApartmentBox.tsx';
import { ApartmentBoxProps } from '@components/ApartmentBox/types.ts';

export default {
  title: 'Example/ApartmentBox',
  component: ApartmentBox,
  argTypes: {
    icon: { control: 'text' },
    type: { control: 'text' },
    dateRange: { control: 'text' },
    availability: { control: 'text' },
    isLoading: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<ApartmentBoxProps> = (args) => (
  <ApartmentBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/455613071.jpg?k=680a0f6fab928725bbb5ece932800731883b705a355331386c3ea12f5e6c10be&o=&hp=1',
  type: 'Apartment',
  dateRange: '01/01/2023 - 31/12/2023',
  availability: 2,
  isLoading: false,
};
