import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const UserStore = () => {
  const history = useHistory();
  const login = async () => {
    history.push('/');
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
