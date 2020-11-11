import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../../contexts/user';
import IssueRegisterBody from '../../../components/issue/new';
import useSidebar from '../../../hooks/useSidebar';
import issueApi from '../../../apis/issue';
import routeUrl from '../../../libs/routeUrl';

const IssueRegisterModel = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const history = useHistory();
  const {
    state: { profileLink },
  } = useContext(userContext);
  const { state: seletedState, handlers } = useSidebar();

  const submitButtonDisabled = title.length === 0;

  const updateTitle = (newTitle) => {
    setTitle(newTitle);
  };

  const updateContents = (newContents) => {
    setContents(newContents);
  };
  const onSave = async () => {
    const { milestoneId, labels, assignees } = seletedState;
    const newIssue = {
      title,
      contents,
      milestoneId,
      assginees: [...assignees],
      labels: [...labels],
    };

    try {
      const { id } = await issueApi.postIssue({ issue: newIssue });
      history.push(`${routeUrl.ISSUES}/${id}`);
    } catch (e) {
      alert('^ㅡ^');
    }
  };

  return (
    <IssueRegisterBody
      profileLink={profileLink}
      onSave={onSave}
      updateContent={updateContents}
      submitButtonDisabled={submitButtonDisabled}
      updateTitle={updateTitle}
      sidebarHandlers={handlers}
      sidebarSelectedState={seletedState}
    />
  );
};

export default IssueRegisterModel;
