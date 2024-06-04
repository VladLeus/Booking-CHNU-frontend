import { userActions } from '@shared/store/user';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

const actions = {
  ...userActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
