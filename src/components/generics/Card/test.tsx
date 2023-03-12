import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Card from '.';

describe('Card', () => {
  it('should render children', () => {
    const content = 'Card content';
    renderWithTheme(<Card>{content}</Card>);

    expect(screen.getByText(content)).toBeInTheDocument();
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

  it('should render back content and unflip card when the mouse leave', () => {
    renderWithTheme(
      <Card isFlippable>
        <div>Front content</div>
        <div>Back content</div>
      </Card>
    );

    const cardWrapper = screen.getByText(/front content/i).parentElement!;

    fireEvent.mouseLeave(cardWrapper);

    expect(screen.getByText(/front content/i)).toBeInTheDocument();
    expect(screen.getByText(/back content/i)).toHaveStyle({
      visibility: 'hidden'
    });
  });
});
