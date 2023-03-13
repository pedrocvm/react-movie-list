import { screen } from '@testing-library/react';
import { dateFormatter } from 'utils/formatters/dateFormatter';
import { renderWithTheme } from 'utils/tests/helpers';

import MovieCard from '.';

const props = {
  id: 505642,
  title: 'Black Panther: Wakanda Forever',
  overview:
    "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
  poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
  vote_average: 7.331,
  vote_count: 4007,
  release_date: '2023-02-22'
};

describe('MovieCard', () => {
  it('should render with correct values', () => {
    renderWithTheme(<MovieCard {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByAltText(`outer-bg-${props.title}`)).toBeInTheDocument();

    expect(
      screen.getByText(
        /Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        `${props.vote_average.toFixed(2)} of ${props.vote_count} votes`
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(dateFormatter(props.release_date))
    ).toBeInTheDocument();
  });
});
