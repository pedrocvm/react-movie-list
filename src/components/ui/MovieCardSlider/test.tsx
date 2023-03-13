import 'match-media.mock';
import { renderWithTheme } from 'utils/tests/helpers';

import MovieCardSlider from '.';
import moviesMock from 'components/ui/MovieList/mock';

describe('<MovieCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(
      <MovieCardSlider movies={moviesMock} />
    );

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
    expect(container.firstChild).toMatchSnapshot();
  });
});
