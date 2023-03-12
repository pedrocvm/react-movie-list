import 'match-media.mock';
import { renderWithTheme } from 'utils/tests/helpers';
import moviesMock from 'components/ui/MovieList/mock';
import MovieCardSlider from '.';

describe('<MovieCardSlider />', () => {
  it('should render correctly', () => {
    renderWithTheme(<MovieCardSlider movies={moviesMock} />);
  });
});
