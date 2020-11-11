import React from 'react';
import styled from 'styled-components';
import color from '../../../../libs/color';
import { UserProfile } from '../../../commons/UserProfile';
import ArrowContainerStyle from '../../../commons/ArrowContainerStyle';

const OWNER = 'Owner';

const CommentContainer = styled(ArrowContainerStyle)`
  & + & {
    margin-top: 2rem;
  }
  display: flex;
  z-index: 1;
  .comment {
    &__profile {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__header {
      display: flex;
    }
    &__writer {
      padding-right: 0.3rem;
      font-weight: bolder;
    }
    &__owner {
      margin: 0 0.5rem;
      padding: 0 0.2rem;
      border: 1px solid ${color.lightBlue};
    }
    &__container {
      flex: 1;
      margin-left: 1.5rem;
      border: 1px solid ${color.lightGray};
      > div {
        padding: 0.5rem;
      }
    }
  }

  .owner-container {
    display: flex;
    margin-left: auto;
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
      <div className="comment__profile">
        <UserProfile className="profile-container" src={writer.profileLink} />
      </div>
      <div className="comment__container">
        <div className="comment__header">
          <div className="comment__writer">{writer.name}</div>
          <div>{commentedAt}</div>
          {isAuthor && (
            <div className="owner-container">
              <div className="comment__owner">{OWNER}</div>
              <button type="button" className="edit-button">
                Edit
              </button>
            </div>
          )}
        </div>
        <div className="comment__content">{contents}</div>
      </div>
    </CommentContainer>
  );
};

export default Comment;
