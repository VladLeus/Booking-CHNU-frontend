import { UserInitState } from './types.ts';

export const initialState: UserInitState = {
  name: '',
  surname: '',
  email: '',
  tripHistory: [],
  wallet: [],
  isAuth: false,
};
