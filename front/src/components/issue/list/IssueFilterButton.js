import React from 'react';
import Dropdown from '../../commons/dropdown/Dropdown';
import FilterDropdownItem from '../../commons/dropdown/FilterDropdownItem';

const filterButtonContent = () => {
  return <div>Filters</div>;
};
const filterDropdownItemContent = [
  {
    title: 'Open issues',
    value: 'is:open',
  },
  {
    title: 'Your issues',
    value: 'author:@me',
  },

  {
    title: 'Everything assigned to you',
    value: 'assignee:@me',
  },
  {
    title: 'Closed issues',
    value: 'is:closed',
  },
];

const IssueFilterButton = ({ clickFilterHandler }) => {
  return (
    <Dropdown headerText="Filter Issues" button={filterButtonContent()}>
      {[...filterDropdownItemContent].map(({ value, title }) => {
        return (
          <FilterDropdownItem
            content={title}
            onClick={() => clickFilterHandler(value)}
          />
        );
      })}
    </Dropdown>
  );
};

export default IssueFilterButton;
