import { User } from './types.ts';

const user: User = {
  id: undefined,
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
