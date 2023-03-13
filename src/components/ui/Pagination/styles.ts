import styled, { css } from 'styled-components';
import * as ButtonStyles from 'components/generics/Button/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xxsmall};
    align-items: center;
    justify-content: center;
    margin-top: ${theme.spacings.small};
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
