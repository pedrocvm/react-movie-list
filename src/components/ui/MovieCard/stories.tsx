import { Meta, Story } from '@storybook/react/types-6-0';
import MovieCard, { MovieCardProps } from '.';

export default {
  title: 'Ui/MovieCard',
  component: MovieCard,
  args: {
    id: 505642,
    title: 'Black Panther: Wakanda Forever',
    overview:
      "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
    vote_average: 7.331,
    vote_count: 4007,
    release_date: '2023-02-22'
  },
  argTypes: {}
} as Meta;

export const Basic: Story<MovieCardProps> = (args) => <MovieCard {...args} />;
