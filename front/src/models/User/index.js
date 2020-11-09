import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../contexts/user';
import userContextActions from '../../contexts/user/user-context-actions';
import userAPI from '../../apis/user';

const LOGIN_FAILURE_URL = '/login';

const UserIdentifier = () => {
  const { dispatch } = useContext(userContext);
  const history = useHistory();
  const login = async () => {
    try {
      const userInfo = await userAPI.getMyInfo();
      dispatch(userContextActions.setUserInfo(userInfo));
    } catch (error) {
      resetAndRedirect();
    }
  };
  const resetAndRedirect = () => {
    dispatch(userContextActions.resetUserInfo());
    history.push(LOGIN_FAILURE_URL);
  };
  const initialLogin = () => {
    const token = localStorage.getItem('token');
    if (!token) resetAndRedirect();
    else login();
  };
  useEffect(() => {
    initialLogin();
  }, []);
  return <></>;
};

export default UserIdentifier;
