import { Meta, StoryFn } from '@storybook/react';
import CustomButton from '@ui/CustomButton';
import { CustomButtonProps } from '@ui/CustomButton/types.ts';
import { Add as AddIcon } from '@mui/icons-material';

export default {
  title: 'Example/CustomButton',
  component: CustomButton,
  argTypes: {
    handleClick: { action: 'clicked' },
    icon: {
      control: 'boolean',
      mapping: {
        true: AddIcon,
        false: null,
      },
    },
  },
} as Meta;

const Template: StoryFn<CustomButtonProps> = (args) => (
  <CustomButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Button',
  size: 'medium',
  variant: 'contained',
  color: 'primary',
  disabled: false,
  type: 'button',
  icon: AddIcon,
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary Button',
  size: 'medium',
  variant: 'outlined',
  color: 'secondary',
  disabled: false,
  type: 'button',
  icon: AddIcon,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Button',
  size: 'medium',
  variant: 'contained',
  color: 'primary',
  disabled: true,
  type: 'button',
  icon: AddIcon,
};
