import * as React from 'react';

export interface PasswordInputProps {
  label: string;
  value: string;
  setValue: (newValue: string) => void;
  showPassword: boolean;
  setShowPassword: (newValue: boolean) => void;
  togglePasswordVisibility: (
    callBack: (value: boolean) => void,
    newValue: boolean,
  ) => void;
  handleMouseDown: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
