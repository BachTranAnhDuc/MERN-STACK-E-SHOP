import { SWITCH_REGISTER, SHOW_HDIE_LOADING } from './action';

const reducer = (state, action) => {
  if (action.type === SWITCH_REGISTER) {
    return { ...state, isLanding: action.payload, isLoading: false };
  }

  if (action.type === SHOW_HDIE_LOADING) {
    return { ...state, isLoading: true };
  }
  throw new Error(`Can not find action ${action.type}`);
};

export default reducer;
