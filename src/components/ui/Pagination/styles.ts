import styled, { css } from 'styled-components';
import * as ButtonStyles from 'components/generics/Button/styles';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    display: flex;
    gap: ${theme.spacings.xxsmall};
    align-items: center;
    justify-content: center;
  `}
`;

export const PageSelectorWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xxsmall};
    align-items: center;
    justify-content: center;

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`;

export const PageSelector = styled.div<{ selected?: boolean }>`
  ${({ theme, selected }) => css`
    ${ButtonStyles.Wrapper} {
      height: 4.5rem;
      width: 4.5rem;
      background: ${selected
        ? `linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%)`
        : `${theme.colors.darkgray}`};

      &::before {
        background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
      }

      &:disabled {
        background: ${theme.colors.gray};

        &::before {
          background: ${theme.colors.gray};
        }
      }
    }
  `}
`;
