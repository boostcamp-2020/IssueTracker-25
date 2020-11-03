import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { store } from './user-context';

const excludePaths = ['/oauth/callback', '/login'];

const mockUserData = {
  name: 'rolled-potatoes',
  id: 1,
  profileLink:
    'https://forum-creallo.s3.dualstack.ap-northeast-2.amazonaws.com/optimized/1X/5e0d906585d6dbbf7f3c9997484eee594bd01da1_2_499x375.jpeg',
};

const BaseComponent = () => {
  const { state, dispatch } = useContext(store);
  const history = useHistory();
  const { logged } = state;

  const checkLogin = () => {
    dispatch({ type: 'setUserInfo', payload: { info: mockUserData } });
    localStorage.setItem('token', 'test');
    history.push('/');
  };
  useEffect(() => {
    const { pathname } = history.location;
    if (!logged) {
      const token = localStorage.getItem('token');
      const isExcludePath = excludePaths.some((path) => path === pathname);
      if (!isExcludePath && !token) history.push('/login');
      checkLogin();
    }
  }, []);
  return <></>;
};

export default BaseComponent;
