import React, { useState, useContext, useReducer } from 'react';
import reducer from './reducer';
import { SWITCH_REGISTER, SHOW_HDIE_LOADING } from './action';

const defaultState = {
  isLoading: false,
  showAlert: false,
  alertType: 'success',
  alertText: '',
  isLanding: true,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const showLoading = () => {
    dispatch({ type: SHOW_HDIE_LOADING });
  };

  const switchRegister = (value) => {
    showLoading();
    setTimeout(() => {
      dispatch({ type: SWITCH_REGISTER, payload: value });
    }, 1000);
  };

  return (
    <AppContext.Provider value={{ ...state, switchRegister, showLoading }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
