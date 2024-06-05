import React, { RefObject } from 'react';

export const handleToggle =
  (setOpen: React.Dispatch<React.SetStateAction<boolean>>) => () => {
    setOpen((prevOpen) => !prevOpen);
  };

export const handleClose =
  (
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    anchorRef: RefObject<HTMLButtonElement>,
  ) =>
  (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

export const handleListKeyDown =
  (setOpen: React.Dispatch<React.SetStateAction<boolean>>) =>
  (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  };

export const usePrevious = (value: boolean) => {
  const ref = React.useRef(value);
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
