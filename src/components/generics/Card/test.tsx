import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Card from '.';

describe('Card', () => {
  it('should render children', () => {
    const content = 'Card content';
    const { container } = renderWithTheme(<Card>{content}</Card>);

    expect(screen.getByText(content)).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="sc-beySbM xVQZr"
      >
        Card content
      </div>
    `);
  });

  it('should render front content when not flipped and not flip card when isFlippable is not passed', () => {
    renderWithTheme(
      <Card>
        <div>Front content</div>
        <div>Back content</div>
      </Card>
    );

    expect(screen.getByText(/Front content/i)).toBeInTheDocument();
    expect(screen.getByText(/Back content/i)).toHaveStyle({
      visibility: 'hidden'
    });
  });
});
