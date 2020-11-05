import React from 'react';
import styled from 'styled-components';

const NUM_OF_DISPLAY_PAGE = 10;
const PaginationContainer = styled.div``;

const PaginationItem = ({ moveTo, clickHandler, children }) => {
  return (
    <button type="button" data-page={moveTo} onClick={clickHandler}>
      {children}
    </button>
  );
};

const PageButtonComponent = ({ page, lastPage, clickHandler }) => {
  const startPage = page - (page % NUM_OF_DISPLAY_PAGE) + 1;
  const endPage = Math.min(lastPage, startPage + NUM_OF_DISPLAY_PAGE - 1);
  const pages = new Array(endPage - startPage + 1)
    .fill(startPage)
    .map((startOffset, idx) => startOffset + idx);

  return (
    <>
      {startPage > NUM_OF_DISPLAY_PAGE && (
        <PaginationItem moveTo={startPage - 1} clickHandler={clickHandler}>
          &lt;&lt;
        </PaginationItem>
      )}
      {pages.map((curPage) => (
        <PaginationItem
          moveTo={curPage}
          clickHandler={clickHandler}
          key={`pagination-item_${curPage}`}
        >
          {curPage}
        </PaginationItem>
      ))}
      {endPage < lastPage && (
        <PaginationItem moveTo={endPage + 1} clickHandler={clickHandler}>
          &gt;&gt;
        </PaginationItem>
      )}
    </>
  );
};

const Pagination = ({ page, lastPage, clickHandler }) => {
  return (
    <PaginationContainer>
      <PageButtonComponent
        page={page}
        lastPage={lastPage}
        clickHandler={clickHandler}
      />
    </PaginationContainer>
  );
};

export default Pagination;
