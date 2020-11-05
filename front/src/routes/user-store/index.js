import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { userStore } from './user-context';
import userContextActions from './user-context-actions';
import userAPI from '../../apis/user';

const LOGIN_SUCCESS_URL = '/';
const LOGIN_FAILURE_URL = '/login';
const UserStore = () => {
  const { dispatch } = useContext(userStore);
  const history = useHistory();
  const userFlowAction = ({ action, redirectURL }) => {
    dispatch(action);
    history.push(redirectURL);
  };
  const login = async () => {
    const flow = {};
    try {
      const userInfo = await userAPI.getMyInfo();
      flow.action = userContextActions.setUserInfo(userInfo);
      flow.redirectURL = LOGIN_SUCCESS_URL;
    } catch (error) {
      flow.action = userContextActions.resetUserInfo();
      flow.redirectURL = LOGIN_FAILURE_URL;
    }
    userFlowAction({ ...flow });
  };

  const initialLogin = () => {
    const token = localStorage.getItem('token');
    if (!token)
      userFlowAction({
        action: userContextActions.resetUserInfo(),
        redirectURL: LOGIN_FAILURE_URL,
      });
    else login();
  };
  useEffect(() => {
    initialLogin();
  }, []);
  return <></>;
};

export default UserStore;
