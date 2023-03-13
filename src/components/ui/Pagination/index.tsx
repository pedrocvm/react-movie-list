import React, { useMemo } from 'react';
import Button from 'components/generics/Button';
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';

import * as S from './styles';

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  maxPageSelectors?: number;
  onPaginate: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  maxPageSelectors = 10,
  onPaginate
}: PaginationProps) => {
  const pageSelectors = useMemo(() => {
    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxPageSelectors / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxPageSelectors - 1);

    const pageItems = [];

    for (let i = startPage; i <= endPage; i++) {
      pageItems.push(i);
    }

    return pageItems;
  }, [currentPage, totalPages, maxPageSelectors]);

  return (
    <S.Wrapper>
      <S.PageSelector>
        <Button
          rounded
          icon={<ArrowLeft aria-label="Previous Page" size={25} />}
          disabled={currentPage === 1}
          onClick={() => onPaginate(currentPage - 1)}
        />
      </S.PageSelector>

      <S.PageSelectorWrapper>
        {currentPage >= 7 && (
          <>
            <S.PageSelector>
              <Button rounded onClick={() => onPaginate(1)}>
                1
              </Button>
            </S.PageSelector>
            ...
          </>
        )}
        {pageSelectors.map((page) => (
          <S.PageSelector key={page} selected={page === currentPage}>
            <Button rounded onClick={() => onPaginate(page)}>
              {page}
            </Button>
          </S.PageSelector>
        ))}

        {currentPage <= totalPages - 5 && (
          <>
            ...
            <S.PageSelector>
              <Button rounded onClick={() => onPaginate(totalPages)}>
                {totalPages}
              </Button>
            </S.PageSelector>
          </>
        )}
      </S.PageSelectorWrapper>

      <S.PageSelector>
        <Button
          rounded
          icon={<ArrowRight aria-label="Next Page" size={25} />}
          onClick={() => onPaginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </S.PageSelector>
    </S.Wrapper>
  );
};

export default Pagination;
