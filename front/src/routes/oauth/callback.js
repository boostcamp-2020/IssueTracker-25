import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import oauthApi from '../../apis/oauth';

const OAuthCallback = ({ location }) => {
  const history = useHistory();
  const getToken = async () => {
    const { code } = queryString.parse(location.search);
    const { token } = await oauthApi.getToken(code);
    localStorage.setItem('token', token);
  };
  useEffect(() => {
    getToken().then(() => history.push('/'));
  }, []);

  return <></>;
};

export default OAuthCallback;
