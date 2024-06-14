import { User } from './types.ts';

const user: User = {
  id: undefined,
  name: '',
  surname: '',
  email: '',
  isAuth: false,
};

export const initialState = {
  user,
};
