import { Meta, StoryFn } from '@storybook/react';
import { ProfileMenu } from '@components/ProfileMenu/ProfileMenu';

export default {
  title: 'Example/ProfileMenu',
  component: ProfileMenu,
} as Meta;

const Template: StoryFn = () => <ProfileMenu />;

export const Default = Template.bind({});
