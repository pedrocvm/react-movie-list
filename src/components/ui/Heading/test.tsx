import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Heading from '.';

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Movie List</Heading>);

    expect(screen.getByRole('heading', { name: /movie list/i })).toHaveStyle({
      color: '#FAFAFA'
    });
  });

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Movie List</Heading>);

    expect(screen.getByRole('heading', { name: /movie list/i })).toHaveStyle({
      color: '#030517'
    });
  });

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Movie List</Heading>);

    expect(screen.getByRole('heading', { name: /movie list/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    });
  });

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Movie List</Heading>);

    expect(
      screen.getByRole('heading', { name: /movie list/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    });
  });

  it('should render with a medium size by default', () => {
    renderWithTheme(<Heading>Movie List</Heading>);

    expect(screen.getByRole('heading', { name: /movie list/i })).toHaveStyle({
      'font-size': '2.8rem'
    });
  });

  it('should render with a small size', () => {
    renderWithTheme(
      <Heading lineLeft size="small">
        Movie List
      </Heading>
    );

    expect(screen.getByRole('heading', { name: /movie list/i })).toHaveStyle({
      'font-size': '1.6rem'
    });

    expect(
      screen.getByRole('heading', { name: /movie list/i })
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    });
  });

  it('should render with a huge size', () => {
    renderWithTheme(
      <Heading lineLeft size="huge">
        Movie List
      </Heading>
    );

    expect(screen.getByRole('heading', { name: /movie list/i })).toHaveStyle({
      'font-size': '4.8rem'
    });
  });

  it('should render a heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Movie List
      </Heading>
    );

    const heading = screen.getByRole('heading', { name: /movie list/i });

    expect(heading).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    });

    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    });

    expect(
      screen.getByRole('heading', { name: /movie list/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    });
  });
});
