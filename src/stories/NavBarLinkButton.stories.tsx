import { Meta, StoryFn } from '@storybook/react';
import NavBarLinkButton from '@ui/NavBarLink';
import { NavBarLinkProps } from '@ui/NavBarLink/types.ts';
import { Home as HomeIcon } from '@mui/icons-material';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material';

export default {
  title: 'Example/NavBarLinkButton',
  component: NavBarLinkButton,
  argTypes: {
    to: { control: 'text' },
    text: { control: 'text' },
    icon: {
      control: 'boolean',
      mapping: {
        true: HomeIcon,
        false: null,
      },
    },
  },
  decorators: [
    (Story) => (
      <Router>
        <Box style={{ padding: '20px' }}>
          <Story />
        </Box>
      </Router>
    ),
  ],
} as Meta;

const Template: StoryFn<NavBarLinkProps> = (args) => (
  <NavBarLinkButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  to: '/home',
  text: 'Home',
  icon: HomeIcon,
};
