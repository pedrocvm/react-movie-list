import { Meta, Story } from '@storybook/react/types-6-0';
import moviesMock from 'components/ui/MovieList/mock';
import MovieCardSlider, { MovieCardSliderProps } from '.';

export default {
  title: 'Ui/MovieCardSlider',
  component: MovieCardSlider,
  args: {
    movies: moviesMock
  },
  argTypes: {}
} as Meta;

export const Basic: Story<MovieCardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <MovieCardSlider {...args} />
  </div>
);
