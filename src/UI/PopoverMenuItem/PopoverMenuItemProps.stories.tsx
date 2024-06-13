import { Meta, StoryFn } from '@storybook/react';
import PopoverMenuItem from '@ui/PopoverMenuItem/index.ts';
import { PopoverMenuItemProps } from '@ui/PopoverMenuItem/types.ts';
import {
  Home as HomeIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material';

export default {
  title: 'Example/PopoverMenuItem',
  component: PopoverMenuItem,
  argTypes: {
    to: { control: 'text' },
    text: { control: 'text' },
    handleClose: { action: 'handleClose' },
    icon: {
      control: 'select',
      options: [null, HomeIcon, SettingsIcon],
    },
  },
  decorators: [
    (Story) => (
      <Router>
        <Box sx={{ padding: '20px' }}>
          <Story />
        </Box>
      </Router>
    ),
  ],
} as Meta;

const Template: StoryFn<PopoverMenuItemProps> = (args) => (
  <PopoverMenuItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  to: '/home',
  text: 'Home',
  icon: HomeIcon,
  handleClose: () => {},
};

export const Active = Template.bind({});
Active.args = {
  to: '/settings',
  text: 'Settings',
  icon: SettingsIcon,
  handleClose: () => {},
};
