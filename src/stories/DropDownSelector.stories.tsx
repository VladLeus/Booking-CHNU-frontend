import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';
import DropDownSelector from '@ui/DropDownSelector';
import { DropDownSelectorProps } from '@ui/DropDownSelector/types.ts';
import ListIcon from '@mui/icons-material/List';

export default {
  title: 'Example/DropDownSelector',
  component: DropDownSelector,
  argTypes: {
    error: { control: 'boolean' },
    icon: {
      control: 'boolean',
      mapping: {
        true: ListIcon,
        false: null,
      },
    },
  },
} as Meta;

interface FormValues {
  selectedValue: string;
}

const Template: StoryFn<DropDownSelectorProps<FormValues>> = ({
  control,
  ...args
}) => {
  return <DropDownSelector<FormValues> control={control} {...args} />;
};

export const Default = () => {
  const { control } = useForm<FormValues>();
  return (
    <Template
      control={control}
      name="selectedValue"
      label="Select an option"
      valuesArray={['Option 1', 'Option 2', 'Option 3']}
      error={false}
      helperText=""
    />
  );
};

export const WithError = () => {
  const { control } = useForm<FormValues>();
  return (
    <Template
      control={control}
      name="selectedValue"
      label="Select an option"
      valuesArray={['Option 1', 'Option 2', 'Option 3']}
      error={true}
      helperText="Please select an option"
    />
  );
};

export const WithIcon = () => {
  const { control } = useForm<FormValues>();
  return (
    <Template
      control={control}
      name="selectedValue"
      label="Select an option"
      valuesArray={['Option 1', 'Option 2', 'Option 3']}
      error={false}
      helperText="With Icon"
      icon={ListIcon}
    />
  );
};
