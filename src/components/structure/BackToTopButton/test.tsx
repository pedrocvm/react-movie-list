import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import BackToTopButton from '.';
import { renderWithTheme } from 'utils/tests/helpers';

describe('BackToTopButton', () => {
  it('should render button when component is mounted', () => {
    renderWithTheme(<BackToTopButton />);
    expect(screen.getByLabelText(/back to top button/i)).toBeInTheDocument();
  });

  it('should show button when pageYOffset is greater than 300', () => {
    Object.defineProperty(window, 'pageYOffset', {
      value: 350,
      writable: true
    });

    renderWithTheme(<BackToTopButton />);
    expect(screen.getByLabelText(/back to top button/i)).toBeInTheDocument();
  });

  it('should hide button when pageYOffset is less than 300', () => {
    Object.defineProperty(window, 'pageYOffset', {
      value: 250,
      writable: true
    });

    renderWithTheme(<BackToTopButton />);
    expect(screen.getByLabelText(/back to top button/i)).not.toBeVisible();
  });

  it('should scroll to top when button is clicked', () => {
    window.scrollTo = jest.fn();
    renderWithTheme(<BackToTopButton />);

    const button = screen.getByLabelText(/back to top button/i);
    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth'
    });
  });
});
