import React, { createContext, useReducer } from 'react';
import userContextTypes from './user-context-types';

const initialState = {
  logged: false,
  id: -1,
  name: '',
  profileLink: '',
};

const userStore = createContext(initialState);
const { Provider } = userStore;

const userReducer = (userState, action) => {
  switch (action.type) {
    case userContextTypes.setUserInfo: {
      const { info } = action.payload;
      return { ...userState, ...info, logged: true };
    }
    case userContextTypes.resetUserInfo: {
      return initialState;
    }
    default: {
      return userStore;
    }
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { userStore, UserProvider };
