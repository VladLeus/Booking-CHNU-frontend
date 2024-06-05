import { User } from './types.ts';

const user: User = {
  name: '',
  surname: '',
  email: '',
  tripHistory: [],
  wallet: [],
  isAuth: false,
};

export const initialState = {
  user: user,
};
