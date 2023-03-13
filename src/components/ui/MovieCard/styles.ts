import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;
`;

export const PosterWrapper = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius.rounded};
    overflow: hidden;
  `}
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius.rounded};
    padding: ${theme.spacings.xsmall};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
    background-color: ${theme.colors.white};
    overflow: auto;

    ${Image} {
      position: absolute;
      inset: 0;
      opacity: 0.2;
    }

    &::-webkit-scrollbar {
      width: 0;
    }
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
  `}
`;

export const Description = styled.div``;

export const AdditionalInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
  `}
`;
