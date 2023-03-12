import { Meta, Story } from '@storybook/react/types-6-0';
import MovieList, { MovieListProps } from '.';
import moviesMock from './mock';

export default {
  title: 'Ui/MovieList',
  component: MovieList,
  args: {
    movies: moviesMock
  },
  argTypes: {}
} as Meta;

export const Basic: Story<MovieListProps> = (args) => <MovieList {...args} />;
