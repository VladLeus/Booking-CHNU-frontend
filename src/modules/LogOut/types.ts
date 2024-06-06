import { Dispatch, RefObject, SetStateAction } from 'react';

export interface LogOutProps {
  anchorRef: RefObject<HTMLButtonElement>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
