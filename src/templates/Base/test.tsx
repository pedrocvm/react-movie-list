import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Base from '.';

jest.mock('components/structure/Header', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Header"></div>;
    }
  };
});

jest.mock('components/structure/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>;
    }
  };
});

describe('<Base />', () => {
  it('should render the Header, Footer and Children', () => {
    renderWithTheme(
      <Base>
        <h1>Heading</h1>
      </Base>
    );

    expect(screen.getByTestId('Mock Header')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Heading/i }));
  });
});
