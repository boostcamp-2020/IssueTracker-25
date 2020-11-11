import React from 'react';
import styled from 'styled-components';
import color from '../../../../libs/color';
import { UserProfile } from '../../../commons/UserProfile';
import ArrowContainerStyle from '../../../commons/ArrowContainerStyle';
import MarkdownViewer from '../../../commons/MarkdownViewer';

const OWNER = 'Owner';

const CommentContainer = styled.div`
  & + & {
    margin-top: 2rem;
  }
  display: flex;
`;

const ProfileContainer = styled.div`
  flex: 0;
  margin-right: 0.5rem;
`;

const CommentDetailContainer = styled.div`
  flex: 1 1 auto;
  border: 1px solid ${color.lightGray};
  border-radius: 0.3rem;

  @media (min-width: 768px) {
    margin-left: 1rem;
  }
`;

const CommentDetailHeader = styled(ArrowContainerStyle)`
  display: flex;
  background: ${color.lightBlue};
  padding: 0.5rem 1rem;

  .comment-header {
    &__text {
      flex: 1 1 auto;
    }

    &__writer {
      font-weight: border;
    }

    &__datetime {
      margin-left: 0.3rem;
    }

    &__owner {
      margin-right: 0.5rem;
      padding: 0.2rem 0.3rem;
      border: 1px solid ${color.lightGray};
      border-radius: 0.5rem;
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
      <ProfileContainer className="pc-only">
        <UserProfile src={writer.profileLink} />
      </ProfileContainer>
      <CommentDetailContainer>
        <CommentDetailHeader>
          <ProfileContainer className="mobile-only">
            <UserProfile src={writer.profileLink} size="sm" />
          </ProfileContainer>
          <div className="comment-header__text">
            <span className="comment-header__writer">{writer.name}</span>
            <span className="comment-header__datetime">{commentedAt}</span>
          </div>
          {isAuthor && (
            <>
              <div className="comment-header__owner">{OWNER}</div>
              <button type="button" className="edit-button">
                Edit
              </button>
            </>
          )}
        </CommentDetailHeader>
        <MarkdownViewer>{contents}</MarkdownViewer>
      </CommentDetailContainer>
    </CommentContainer>
  );
};

export default Comment;
