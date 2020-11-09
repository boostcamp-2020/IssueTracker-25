import React from 'react';
import styled from 'styled-components';
import color from '../../../libs/color';
import { UserProfile } from '../../../components/UserProfile';

const OWNER = 'Owner';

const CommentContainer = styled.div`
  & + & {
    margin-top: 2rem;
  }
  display: flex;
  z-index: 1;
  .comment-profile {
    display: flex;
    justify: center;
  }
  .comment-container {
    position: relative;
    &::before {
      width: 1rem;
      z-index: -1;
      height: 1rem;
      content: '';
      background: ${color.lightGray};
      position: absolute;
      transform: rotate(45deg);
      left: -8px;
      top: 9px;
    }
    flex: 1;
    margin-left: 1.5rem;
    border: 1px solid ${color.lightGray};
    > div {
      padding: 0.5rem;
    }
  }
  .comment-header {
    display: flex;
    background: ${color.lightGray};
  }
  .comment-writer {
    padding-right: 0.3rem;
    font-weight: bolder;
  }
  .owner-container {
    display: flex;
    margin-left: auto;

    .comment-owner {
      margin: 0 0.5rem;
      padding: 0 0.2rem;
      border: 1px solid ${color.lightBlue};
    }
  }
  .edit-button {
    border: none;
    outline: 0;
    background: ${color.lightGray};
  }
`;

const Comment = ({ writer, createdAt, contents, isAuthor }) => {
  const commentedAt = `commented ${createdAt}`;
  return (
    <CommentContainer>
      <div className="comment-profile">
        <UserProfile className="profile-container" src={writer.profileLink} />
      </div>
      <div className="comment-container">
        <div className="comment-header">
          <div className="comment-writer">{writer.name}</div>
          <div>{commentedAt}</div>
          {isAuthor && (
            <div className="owner-container">
              <div className="comment-owner">{OWNER}</div>
              <button type="button" className="edit-button">
                Edit
              </button>
            </div>
          )}
        </div>
        <div className="comment-content">{contents}</div>
      </div>
    </CommentContainer>
  );
};

export default Comment;
