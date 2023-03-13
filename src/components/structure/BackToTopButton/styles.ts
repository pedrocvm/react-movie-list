import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import * as ButtonStyles from 'components/generics/Button/styles';

export const Wrapper = styled.div<{ isVisible: boolean }>`
  ${({ theme, isVisible }) => css`
    ${ButtonStyles.Wrapper} {
      background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
      position: fixed;
      bottom: ${theme.spacings.small};
      right: ${theme.spacings.small};
      z-index: ${theme.layers.base};
      opacity: ${isVisible ? 1 : 0};
      transition: ${theme.transition.default};
      display: none;

      ${media.greaterThan('medium')`
        display: block;
      `}

      &:hover {
        &::before {
          display: none;
        }
      }

      > svg {
        transform: rotate(90deg);
        width: 100%;
      }
    }
  `}
`;
