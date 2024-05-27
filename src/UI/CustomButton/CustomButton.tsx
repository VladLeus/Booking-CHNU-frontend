import { FC } from 'react';
import { CustomButtonProps } from './types.ts';
import { Button } from '@mui/material';

const CustomButton: FC<CustomButtonProps> = ({
  text,
  size,
  variant,
  color,
  disabled,
  handleClick,
  type,
  icon: Icon,
}) => {
  return (
    <Button
      size={size}
      variant={variant}
      color={color}
      disabled={disabled}
      onClick={handleClick}
      endIcon={Icon ? <Icon /> : null}
      type={type}
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
