import { Meta, StoryFn } from '@storybook/react';
import LabelCheckBox from '@ui/LabelCheckBox/LabelCheckBox.tsx';
import { LabelCheckBoxProps } from '@ui/LabelCheckBox/types.ts';

export default {
  title: 'Example/LabelCheckBox',
  component: LabelCheckBox,
  argTypes: {
    label: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<LabelCheckBoxProps> = (args) => (
  <LabelCheckBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox Label',
};
