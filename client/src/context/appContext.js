import React, { useState, useContext, useReducer } from 'react';
import reducer from './reducer';
import axios from 'axios';
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

const defaultState = {
  isLoading: false,
  showAlert: false,
  alertType: 'success',
  alertText: '',
  isLanding: true,
  user: {},
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

  const login = async (user) => {
    dispatch({ type: LOGIN_BEGIN });

    setTimeout(async () => {
      try {
        const postUser = await axios.post('/api/v1/auth/login', user);

        console.log(postUser);
        dispatch({ type: LOGIN_SUCCESS, payload: user });
      } catch (error) {
        dispatch({ type: LOGIN_ERROR });
      }
    }, 2000);
  };

  const register = (user) => {
    dispatch({ type: REGISTER_BEGIN });

    setTimeout(async () => {
      try {
        const postUser = await axios.post('/api/v1/auth/register', user);
        console.log(postUser);
        dispatch({ type: REGISTER_SUCCESS, payload: user });
      } catch (error) {
        dispatch({ type: REGISTER_ERROR });
      }
    }, 2000);
  };

  return (
    <AppContext.Provider
      value={{ ...state, switchRegister, showLoading, login, register }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
