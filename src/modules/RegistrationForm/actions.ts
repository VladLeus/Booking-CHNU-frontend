import * as React from 'react';

export const handleClickShowPassword = (
  callBack: (value: boolean) => void,
  newValue: boolean,
): void => {
  callBack(newValue);
};

export const handleMouseDownPassword = (
  event: React.MouseEvent<HTMLButtonElement>,
): void => {
  event.preventDefault();
};
