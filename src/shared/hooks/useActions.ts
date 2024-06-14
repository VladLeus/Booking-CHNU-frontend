import { userActions } from '@shared/store/user';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { hotelsActions } from '@shared/store/hotels/hotels.slice.ts';

const actions = {
  ...userActions,
  ...hotelsActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
