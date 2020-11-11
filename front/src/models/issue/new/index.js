import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../../contexts/user';
import IssueRegisterBody from '../../../components/issue/new';

const IssueRegisterModel = () => {
  const [title, setTitle] = useState('');
  const [, setContents] = useState('');
  const history = useHistory();
  const { state } = useContext(userContext);
  const { profileLink } = state;
  const submitButtonDisabled = title.length === 0;

  const updateTitle = (newTitle) => {
    setTitle(newTitle);
  };

  const updateContents = (newContents) => {
    setContents(newContents);
  };
  const onSave = () => {
    history.push('/issues/1');
  };

  return (
    <IssueRegisterBody
      profileLink={profileLink}
      onSave={onSave}
      updateContent={updateContents}
      submitButtonDisabled={submitButtonDisabled}
      updateTitle={updateTitle}
    />
  );
};

export default IssueRegisterModel;
