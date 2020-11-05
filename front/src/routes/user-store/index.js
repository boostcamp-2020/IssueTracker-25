import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { userStore } from './user-context';
import userContextActions from './user-context-actions';
import userAPI from '../../apis/user';

const UserStore = () => {
  const { dispatch } = useContext(userStore);
  const history = useHistory();
  const login = async (token) => {
    const userInfo = await userAPI.getMyInfo(token);
    dispatch(userContextActions.setUserInfo(userInfo));
  };
  const initialLogin = () => {
    const token = localStorage.getItem('token');
    if (!token) history.push('/login');
    else login(token);
  };
  useEffect(() => {
    initialLogin();
  }, []);
  return <></>;
};

export default UserStore;
