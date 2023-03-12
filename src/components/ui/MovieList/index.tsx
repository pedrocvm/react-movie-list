import React from 'react';
import MovieCard, { MovieCardProps } from 'components/ui/MovieCard';
import * as S from './styles';

export type MovieListProps = {
  movies: MovieCardProps[];
};

const MovieList = ({ movies }: MovieListProps) => (
  <S.Wrapper>
    {movies.map((movie) => (
      <MovieCard key={movie.id} {...movie} />
    ))}
  </S.Wrapper>
);

export default MovieList;
