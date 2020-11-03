import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import oauthApi from '../../apis/oauth';

const OAuthCallback = async ({ location }) => {
  const history = useHistory();
  useEffect(() => {
    async function getToken() {
      const { code } = queryString.parse(location.search);
      const token = await oauthApi.getToken(code);
      localStorage.setItem('token', token);
    }
    getToken().then(() => history.push('/'));
  }, []);

  return <></>;
};

export default OAuthCallback;
