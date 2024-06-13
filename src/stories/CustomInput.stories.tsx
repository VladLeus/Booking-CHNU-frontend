import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';
import CustomInput from '@ui/CustomInput';
import { CustomInputProps } from '@ui/CustomInput/types.ts';
import { Add as AddIcon } from '@mui/icons-material';

export default {
  title: 'Example/CustomInput',
  component: CustomInput,
  argTypes: {
    error: { control: 'boolean' },
    variant: {
      control: { type: 'select', options: ['filled', 'outlined', 'standard'] },
    },
    icon: {
      control: 'boolean',
      mapping: {
        true: AddIcon,
        false: null,
      },
    },
  },
} as Meta;

interface FormValues {
  inputValue: string;
}

const Template: StoryFn<CustomInputProps<FormValues>> = ({
  control,
  ...args
}) => {
  return <CustomInput<FormValues> control={control} {...args} />;
};

export const Default = () => {
  const { control } = useForm<FormValues>();
  return (
    <Template
      control={control}
      name="inputValue"
      label="Input Label"
      variant="outlined"
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
      name="inputValue"
      label="Input Label"
      variant="outlined"
      error={true}
      helperText="This field is required"
    />
  );
};

export const WithIcon = () => {
  const { control } = useForm<FormValues>();
  return (
    <Template
      control={control}
      name="inputValue"
      label="Input Label"
      variant="outlined"
      error={false}
      helperText="With Icon"
      icon={AddIcon}
      handleIconClick={() => {
        alert('Icon clicked!');
      }}
    />
  );
};
