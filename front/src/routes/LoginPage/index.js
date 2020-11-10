import React from 'react';
import styled from 'styled-components';
import color from '../../libs/color';

const GitHubButton = styled.button`
  display: flex;
  width: fit-content;
  height: 2rem;
  justify-content: center;
  align-items: center;
  background: ${color.darkGray};
  color: ${color.white};

  &:hover {
    background: ${color.gray};
  }
`;
const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const LoginTitle = styled.div`
  font-weight: bolder;
  font-size: x-large;
`;
const Div = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 20vh;

  width: 30vw;
  height: 30vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  box-shadow: 0px 1px 10px 0px ${color.gray};
`;
const loginUrl = `${process.env.API_BASE_URL}/oauth/github`;

function LoginPage() {
  return (
    <Div>
      <LoginTitle>이슈트랙커</LoginTitle>
      <LoginButtonContainer>
        <a href={loginUrl}>
          <GitHubButton type="button">Sign in with Github</GitHubButton>
        </a>
      </LoginButtonContainer>
    </Div>
  );
}

export default LoginPage;
