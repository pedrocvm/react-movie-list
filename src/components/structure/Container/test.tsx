import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';

import { Container } from '.';

describe('<Container />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <Container>
        <h1>Movies</h1>
      </Container>
    );

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="sc-beySbM cNRsmj"
      >
        <h1>
          Movies
        </h1>
      </div>
    `);
  });
});
