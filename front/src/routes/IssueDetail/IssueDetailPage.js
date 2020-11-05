import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CustomButton from '../../components/buttons/CustomButton';
import color from '../../libs/color';
import { UserProfile } from '../../components/UserProfile';
import IssueStateComponent from './IssueStateComponent';
import issueAPI from '../../apis/issue';

const IssueDetailContainer = styled.div`
  display: grid;
  grid-auto-rows: minmax(120px, auto);
  grid-template-columns: 2fr 1fr;
  .issue-detail-header {
    grid-column: 1 / 3;
    grid-row: 1;
    display: inline-block;
    vertical-align: middle;

    &__title {
      font-size: 2rem;
      font-weight: 900;
    }

    &__button {
      margin-left: auto;
      & button {
        margin-left: 0.3rem;
      }
    }
    &__divider {
      margin: 1rem 0;
      border: 1px solid ${color.lightGray};
    }
  }

  .issue-detail-subheader {
    display: flex;
    align-items: center;
    .state-icon {
      color: ${color.white};
      display: flex;
      border-radius: 20rem;
      justify-content: center;
      align-items: center;
      padding: 0.4rem 0.6rem;
      &__content {
        text-indent: 0.5rem;
      }
    }
    &--closed {
      background: ${color.red};
    }
    &--open {
      background: ${color.green};
    }
  }

  .button-text {
    padding: 0 0.2rem;
  }
  .state-message {
    text-indent: 0.5rem;
  }
  .issue-detail-aside {
    grid-column: 2;
    grid-row: 2;
  }

  .issue-detail-content {
    grid-column: 1;
    grid-row: 2;
  }
`;
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
    margin: 0 1.5rem;
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
const initIssue = {
  id: 0,
  title: '',
  contents: '',
  isClosed: true,
  closedAt: '',
  authorId: 0,
  isAuthor: true,
  milestoneId: 0,
  createdAt: '',
  updatedAt: '',
  Author: {
    id: 0,
    name: '',
    uid: '',
    profileLink: '',
    createdAt: '',
    updatedAt: '',
  },
  Labels: [],
  Assignees: [],
  Milestone: {
    id: 0,
    title: '',
    description: '',
    endDate: '',
    createdAt: '',
    updatedAt: '',
  },
  Comments: [],
};
const IssueDetailPage = () => {
  const [issue, setIssue] = useState(initIssue);
  const {
    title,
    Author,
    isClosed,
    createdAt,
    closedAt,
    contents,
    Comments,
    isAuthor,
  } = issue;
  const countComment = Comments.length;
  const issueState = `${Author.name} ${
    isClosed ? 'closed' : 'opend'
  } this issue ${isClosed ? closedAt : createdAt} ㆍ ${
    countComment || 0
  } comments`;
  const getIssue = async () => {
    const response = await issueAPI.getIssue(1);
    setIssue(response);
  };
  useEffect(() => {
    getIssue();
  }, []);
  return (
    <IssueDetailContainer>
      <div className="issue-detail-header">
        <div className="issue-detail-subheader">
          <div className="issue-detail-header__title">{title}</div>
          <div className="issue-detail-header__button">
            <CustomButton style={{ color: 'default' }}>Edit</CustomButton>
            <CustomButton style={{ color: 'green' }}>New issue</CustomButton>
          </div>
        </div>
        <IssueStateComponent isClosed={isClosed} issueState={issueState} />
        <div className="issue-detail-header__divider" />
      </div>
      <div className="issue-detail-content">
        <Comment
          writer={Author}
          createdAt={createdAt}
          contents={contents}
          isAuthor={isAuthor}
        />
        {Comments.map((comment) => {
          return (
            <Comment
              writer={comment.User}
              createdAt={comment.createdAt}
              contents={comment.contents}
            />
          );
        })}
      </div>
      <div className="issue-detail-aside" />
    </IssueDetailContainer>
  );
};

const OWNER = 'Owner';
const Comment = ({ writer, createdAt, contents, isAuthor }) => {
  const commented = `commented ${createdAt}`;
  return (
    <CommentContainer>
      <div className="comment-profile">
        <UserProfile className="profile-container" src={writer.profileLink} />
      </div>
      <div className="comment-container">
        <div className="comment-header">
          <div className="comment-writer">{writer.name}</div>
          <div>{commented}</div>
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

export default IssueDetailPage;
