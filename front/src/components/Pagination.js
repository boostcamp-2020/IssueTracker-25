import React from 'react';
import styled from 'styled-components';

const NUM_OF_DISPLAY_PAGE = 10;
const PaginationContainer = styled.div``;

const PaginationItem = ({ page, children }) => {
  return (
    <button type="button">
      <a href={`/issues?page=${page}`}>{children}</a>
    </button>
  );
};

const PageButtonComponent = ({ curPage, lastPage }) => {
  const startPage = curPage - (curPage % NUM_OF_DISPLAY_PAGE) + 1;
  const endPage = Math.min(lastPage, startPage + NUM_OF_DISPLAY_PAGE - 1);
  const pages = new Array(endPage - startPage + 1)
    .fill(startPage)
    .map((startOffset, idx) => startOffset + idx);

  return (
    <>
      {startPage > NUM_OF_DISPLAY_PAGE && (
        <PaginationItem page={startPage - 1}>&lt;&lt;</PaginationItem>
      )}
      {pages.map((page) => (
        <PaginationItem page={page}>{page}</PaginationItem>
      ))}
      {endPage < lastPage && (
        <PaginationItem page={endPage + 1}>&gt;&gt;</PaginationItem>
      )}
    </>
  );
};

const Pagination = ({ page, lastPage }) => {
  return (
    <PaginationContainer>
      <PageButtonComponent curPage={page} lastPage={lastPage} />
    </PaginationContainer>
  );
};

export default Pagination;
