import styled, { css } from 'styled-components';
import * as ButtonStyles from 'components/generics/Button/styles';

export const GenreSelectorWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xxsmall};
    flex-wrap: wrap;
  `}
`;

export const GenreSelector = styled.div<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    ${ButtonStyles.Wrapper} {
      background: ${selected
        ? `linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%)`
        : `${theme.colors.darkgray}`};

      &::before {
        background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
      }
    }
  `}
`;
