import { UserInitState } from './types.ts';

export const initialState: UserInitState = {
  name: 'test',
  surname: 'test',
  email: 'test',
  tripHistory: ['test', 'test'],
  wallet: ['some balance'],
  isAuth: false,
};
