import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: ${({ size }) => (size === 'sm' ? '1.5rem' : '4rem')};
  border-radius: 30%;
`;
export const UserProfile = ({ src, size }) => {
  return <Img src={src} size={size} />;
};

export const UserProfileList = ({ users }) => {
  return (
    <span>
      {users.map((user) => (
        <UserProfile
          key={user.id}
          id={user.id}
          src={user.profile_link}
          size="sm"
        />
      ))}
    </span>
  );
};
