import { renderWithTheme } from 'utils/tests/helpers';

import Loading from '.';

describe('<Loading />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Loading />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
