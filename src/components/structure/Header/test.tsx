import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Header from '.';

describe('<Header />', () => {
  it('should render the logo', () => {
    renderWithTheme(<Header />);

    expect(
      screen.getByRole('img', { name: /movie list logo/i })
    ).toBeInTheDocument();
  });
});
