import React from 'react';
import styled from 'styled-components';
import ButtonTheme from './buttons/theme';

const NUM_OF_DISPLAY_PAGE = 5;
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PaginationButton = styled.button`
  width: fit-content;
  border: 0.1rem solid;
  border-radius: 0.4rem;
  padding: 0.5rem 0.8rem;
  ${({ style }) => style};
  & + & {
    margin-left: 5px;
  }
`;

const PaginationItem = ({ page, moveTo, clickHandler, children, search }) => {
  const style =
    page && +page === moveTo ? ButtonTheme.blue : ButtonTheme.default;
  return (
    <PaginationButton
      style={style}
      data-page={moveTo + (search ? `&${search}` : '')}
      onClick={clickHandler}
    >
      {children}
    </PaginationButton>
  );
};

const PageButtonComponent = ({ page, lastPage, clickHandler, search }) => {
  const endPage = Math.ceil(page / NUM_OF_DISPLAY_PAGE) * NUM_OF_DISPLAY_PAGE;
  const startPage = endPage - NUM_OF_DISPLAY_PAGE + 1;
  const adjustedEndPage = Math.min(lastPage, endPage);

  const pages = new Array(adjustedEndPage - startPage + 1)
    .fill(startPage)
    .map((startOffset, idx) => startOffset + idx);

  return (
    <>
      {startPage > NUM_OF_DISPLAY_PAGE && (
        <PaginationItem
          moveTo={startPage - NUM_OF_DISPLAY_PAGE}
          clickHandler={clickHandler}
        >
          &lt; Prev
        </PaginationItem>
      )}
      {pages.map((curPage) => (
        <PaginationItem
          moveTo={curPage}
          search={search}
          page={page}
          clickHandler={clickHandler}
          key={`pagination-item_${curPage}`}
        >
          {curPage}
        </PaginationItem>
      ))}
      {adjustedEndPage < lastPage && (
        <PaginationItem
          moveTo={adjustedEndPage + 1}
          clickHandler={clickHandler}
        >
          Next &gt;
        </PaginationItem>
      )}
    </>
  );
};

const Pagination = ({ ...rest }) => {
  return (
    <PaginationContainer>
      <PageButtonComponent {...rest} />
    </PaginationContainer>
  );
};

export default Pagination;
