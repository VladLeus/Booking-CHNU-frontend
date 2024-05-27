import { FC } from 'react';
import { CustomButtonProps } from './types.ts';
import { Button } from '@mui/material';

const CustomButton: FC<CustomButtonProps> = ({
  text,
  size,
  variant,
  color,
  disabled,
  icon: Icon,
  ...props
}) => {
  return (
    <Button
      size={size}
      variant={variant}
      color={color}
      disabled={disabled}
      onClick={props.handleClick}
      onSubmit={props.handleSubmit}
      endIcon={<Icon />}
      sx={{
        outline: 'none',
        '&:focus': {
          outline: 'none',
          boxShadow: 'none',
        },
        '&:focus-visible': {
          outline: 'none',
          boxShadow: 'none',
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
