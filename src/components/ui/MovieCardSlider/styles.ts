import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const CustomCard = styled.div`
  ${({ theme }) => css`
    position: relative;
    cursor: pointer;
    border-radius: ${theme.border.radius.rounded};

    > p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-75%, -50%);
      z-index: ${theme.layers.base};
      font-size: ${theme.font.sizes.xxlarge};
    }

    > div {
      opacity: 0.4;
    }

    img {
      border-radius: ${theme.border.radius.rounded};
    }
  `}
`;
