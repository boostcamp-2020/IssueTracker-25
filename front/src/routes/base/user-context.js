import React, { createContext, useReducer } from 'react';

const initialState = {
  logged: false,
  id: -1,
  name: '',
  profileLink: '',
};

const store = createContext(initialState);
const { Provider } = store;

const BaseProvider = ({ children }) => {
  const [state, dispatch] = useReducer((userInformationState, action) => {
    switch (action.type) {
      case 'setUserInfo': {
        const { info } = action.payload;
        return { ...state, ...info, logged: true };
      }
      default: {
        return userInformationState;
      }
    }
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, BaseProvider };
