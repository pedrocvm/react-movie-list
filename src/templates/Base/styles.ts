import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

export const HeaderSection = styled.div`
  ${({ theme }) => css`
    height: 6rem;
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.xlarge};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    flex: 1 0 auto;
  `}
`;

export const FooterSection = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    `}
  `}
`;
