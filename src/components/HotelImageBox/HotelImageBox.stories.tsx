import { Meta, StoryFn } from '@storybook/react';
import HotelImageBox from '@components/HotelImageBox/HotelImageBox.tsx';
import { HotelImageBoxProps } from '@components/HotelImageBox/types.ts';

export default {
  title: 'Example/HotelImageBox',
  component: HotelImageBox,
  argTypes: {
    hotelName: { control: 'text' },
    country: { control: 'text' },
    place: { control: 'text' },
    point: { control: 'text' },
    rating: { control: 'text' },
    reviews: { control: 'number' },
    price: { control: 'number' },
    isLoading: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<HotelImageBoxProps> = (args) => (
  <HotelImageBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  hotelName: 'Test',
  country: 'Ukraine',
  place: 'Cherkasy',
  point: 8.5,
  rating: 'Excellent',
  reviews: 123,
  price: 2500,
  isLoading: false,
};
