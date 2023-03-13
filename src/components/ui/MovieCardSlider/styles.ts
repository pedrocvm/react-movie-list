import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const CustomArrow = styled.button`
  ${({ theme }) => css`
    border: none;
    outline: none;
    box-shadow: none;

    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius.full};
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
  `}
`;
