import { userActions } from '@store/user';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { appActions } from '@store/appState';
import { hotelsActions } from '@store/hotels';

const actions = {
  ...userActions,
  ...hotelsActions,
  ...appActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
