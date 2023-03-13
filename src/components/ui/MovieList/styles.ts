import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    gap: ${theme.spacings.medium};
    display: flex;
    flex-wrap: wrap;
  `}
`;
