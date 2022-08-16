import {
  SWITCH_REGISTER,
  SHOW_HDIE_LOADING,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_BEGIN,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from './action';

const reducer = (state, action) => {
  if (action.type === SWITCH_REGISTER) {
    return { ...state, isLanding: action.payload, isLoading: false };
  }

  if (action.type === SHOW_HDIE_LOADING) {
    return { ...state, isLoading: true };
  }

  if (action.type === LOGIN_BEGIN) {
    return {
      ...state,
      showAlert: true,
      alertType: 'warnming',
      alertText: 'Rendering...',
    };
  }

  if (action.type === LOGIN_SUCCESS) {
    return {
      ...state,
      showAlert: true,
      alertType: 'success',
      alertText: 'Login success',
      user: action.payload,
    };
  }

  if (action.type === LOGIN_ERROR) {
    return { ...state };
  }

  if (action.type === REGISTER_BEGIN) {
    return {
      ...state,
      showAlert: true,
      alertType: 'warnming',
      alertText: 'Rendering...',
    };
  }

  if (action.type === REGISTER_SUCCESS) {
    return {
      ...state,
      showAlert: true,
      alertType: 'success',
      alertText: 'Register success',
      user: action.payload,
    };
  }

  if (action.type === REGISTER_ERROR) {
    return { ...state };
  }
  throw new Error(`Can not find action ${action.type}`);
};

export default reducer;
