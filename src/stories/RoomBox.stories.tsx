import { Meta, StoryFn } from '@storybook/react';
import RoomBox from '@components/RoomBox';
import { RoomBoxProps } from '@components/RoomBox/types.ts';

export default {
  title: 'Example/RoomBox',
  component: RoomBox,
  argTypes: {
    isLoading: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<RoomBoxProps> = (args) => <RoomBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/455613071.jpg?k=680a0f6fab928725bbb5ece932800731883b705a355331386c3ea12f5e6c10be&o=&hp=1',
  hotelName: 'Example Hotel',
  city: 'Example City',
  bedNumber: 2,
  roomCategory: 'Standard',
  description: 'This is a sample room description.',
  price: '2500',
  isLoading: false,
};
