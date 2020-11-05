import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { userStore } from './user-context';
import userContextActions from './user-context-actions';
import userAPI from '../../apis/user';

const SUCCESS_LOGIN_URL = '/';
const FALE_LOGIN_URL = '/login';
const UserStore = () => {
  const { dispatch } = useContext(userStore);
  const history = useHistory();
  const userFlowAction = ({ action, redirectURL }) => {
    dispatch(action);
    history.push(redirectURL);
  };
  const login = async (token) => {
    const flow = {};
    try {
      const userInfo = await userAPI.getMyInfo(token);
      flow.action = userContextActions.setUserInfo(userInfo);
      flow.redirectURL = SUCCESS_LOGIN_URL;
    } catch (error) {
      flow.action = userContextActions.resetUserInfo();
      flow.redirectURL = FALE_LOGIN_URL;
    }
    userFlowAction({ ...flow });
  };

  const initialLogin = () => {
    const token = localStorage.getItem('token');
    if (!token)
      userFlowAction({
        action: userContextActions.resetUserInfo(),
        redirectURL: FALE_LOGIN_URL,
      });
    else login(token);
  };
  useEffect(() => {
    initialLogin();
  }, []);
  return <></>;
};

export default UserStore;
