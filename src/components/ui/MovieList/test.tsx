import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import MovieList from '.';
import moviesMock from './mock';

describe('<MovieList />', () => {
  it('should render correctly', () => {
    renderWithTheme(<MovieList movies={moviesMock} />);

    expect(screen.getAllByTestId(/movie-card/i)).toHaveLength(6);
  });
});
