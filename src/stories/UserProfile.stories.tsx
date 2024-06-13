import { Meta, StoryFn } from '@storybook/react';
import { UserProfileProps } from '@components/UserProfile/types.ts';
import UserProfile from '@components/UserProfile/UserProfile';

export default {
  title: 'Example/UserProfile',
  component: UserProfile,
  argTypes: {
    firstName: { control: 'text' },
    lastName: { control: 'text' },
    email: { control: 'text' },
    phoneNumber: { control: 'text' },
    birthdate: { control: 'text' },
    gender: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<UserProfileProps> = (args) => <UserProfile {...args} />;

export const Default = Template.bind({});
Default.args = {
  firstName: 'Анна',
  lastName: 'Марія',
  email: 'ann.maria@example.com',
  phoneNumber: '+3805712544',
  birthdate: '2005-10-03',
  gender: 'Жінка',
};
