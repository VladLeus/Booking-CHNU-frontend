import { Meta, StoryFn } from '@storybook/react';
import CarInfo from '@components/CarInfo/CarInfo.tsx';
import { CarInfoProps } from '@components/CarInfo/types.ts';

export default {
  title: 'Example/CarInfo',
  component: CarInfo,
  argTypes: {
    icon: { control: 'text' },
    carModel: { control: 'text' },
    seats: { control: 'number' },
    transmissionType: { control: 'text' },
    manufactureYear: { control: 'text' },
    description: { control: 'text' },
    price: { control: 'number' },
    isLoading: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<CarInfoProps> = (args) => <CarInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'https://static.tcimg.net/vehicles/primary/2048347c2e6a30c5/2024-Audi-A7-white-full_color-driver_side_front_quarter.png',
  carModel: 'Toyota Camry',
  seats: 5,
  transmissionType: 'Automatic',
  manufactureYear: 2022,
  description: 'Сімейний автомобіль на 5-х осіб.',
  price: 15000,
  isLoading: false,
};
