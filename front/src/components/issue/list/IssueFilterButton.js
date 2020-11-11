import React from 'react';
import Dropdown from '../../commons/dropdown/Dropdown';
import FilterDropdownItem from '../../commons/dropdown/FilterDropdownItem';

const filterButtonContent = () => {
  return <div>Filters</div>;
};
const filterDropdownItemContent = [
  'Open issues and pull requests',
  'Your issues',
  'Your pull requests',
  'Everything assgined to you',
  'Everything mentioning you',
];

const IssueFilterButton = ({ clickFilterHandler }) => {
  return (
    <Dropdown headerText="Filter Issues" button={filterButtonContent()}>
      {[...filterDropdownItemContent].map((content) => {
        return (
          <FilterDropdownItem content={content} onClick={clickFilterHandler} />
        );
      })}
    </Dropdown>
  );
};

export default IssueFilterButton;
