import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxlarge};
  `}
`;

export const MostPopularWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
  `}
`;

export const TopUpcommingWrapper = styled(MostPopularWrapper)``;

export const FilterListWrapper = styled.section``;

export const MovieListWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
  `}
`;
