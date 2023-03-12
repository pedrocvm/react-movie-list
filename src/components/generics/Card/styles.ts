import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{
  isFlipped?: boolean;
  isFlippable?: boolean;
}>`
  ${({ theme, isFlipped }) => css`
    width: 30rem;
    height: 45rem;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    border-radius: ${theme.border.radius.rounded};
    position: relative;
    transform-style: preserve-3d;
    transform: ${isFlipped ? 'rotateY(180deg)' : 'none'};
    transition: ${theme.transition.smooth};
    cursor: pointer;

    > div {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
    }

    > div:last-child {
      transform: rotateY(180deg);
      transition: inherit;
      visibility: ${isFlipped ? 'visible' : 'hidden'};
    }
  `}
`;
