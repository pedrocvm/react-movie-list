import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

export type WrapperProps = {
  hasIcon: boolean;
} & Omit<ButtonProps, 'children'>;

const wrapperModifiers = {
  small: (theme: DefaultTheme, rounded?: boolean) => css`
    height: 3rem;
    width: ${rounded ? '3rem' : ''};
    font-size: ${theme.font.sizes.xsmall};
  `,

  medium: (theme: DefaultTheme, rounded?: boolean) => css`
    height: 4rem;
    width: ${rounded ? '4rem' : ''};
    font-size: ${theme.font.sizes.small};
    padding: ${!rounded
      ? `${theme.spacings.xxsmall} ${theme.spacings.medium}`
      : 0};
  `,

  large: (theme: DefaultTheme, rounded?: boolean) => css`
    height: 5rem;
    width: ${rounded ? '5rem' : ''};
    font-size: ${theme.font.sizes.medium};
    padding: ${!rounded
      ? `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`
      : 0};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      background: none;
      filter: brightness(80%);
    }
  `,

  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal, rounded, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: ${theme.font.family};
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border: none;
    cursor: pointer;
    border-radius: ${rounded
      ? `${theme.border.radius.full}`
      : `${theme.border.radius.rounded}`};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    position: relative;

    &::before {
      position: absolute;
      content: '';
      inset: 0;
      z-index: 1;
      opacity: 0;
      transition: opacity 0.25s linear;
      background: ${minimal
        ? 'none'
        : 'linear-gradient(180deg, #e35565 0%, #d058a6)'};
      border-radius: ${rounded
        ? `${theme.border.radius.full}`
        : `${theme.border.radius.rounded}`};
    }

    &:hover {
      &::before {
        opacity: 1;
      }
    }

    > span,
    > svg {
      z-index: ${theme.layers.base};
    }

    ${!!size && wrapperModifiers[size!](theme, rounded)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${!!minimal && wrapperModifiers.minimal(theme)};
    ${disabled && wrapperModifiers.disabled()}
  `}
`;
