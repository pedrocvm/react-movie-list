import React, { useState } from 'react';
import MovieCardSlider from 'components/ui/MovieCardSlider';
import Heading from 'components/ui/Heading';
import FilterList from 'components/ui/FilterList';
import MovieList from 'components/ui/MovieList';
import Loading from 'components/ui/Loading';
import { GenreProps } from 'models/genre';
import useGenre from 'hooks/useGenre';
import useMovie from 'hooks/useMovie';
import Pagination from 'components/ui/Pagination';

import * as S from './styles';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreProps>({
    id: 0,
    name: 'All'
  });
  const { genres, loading: genreLoading, error: genreError } = useGenre();
  const {
    movies,
    loading: movieLoading,
    error: movieError,
    mostPopularMovies,
    topUpcommingMovies,
    totalPages
  } = useMovie(currentPage, selectedGenre);

  return (
    <S.Wrapper>
      <S.MostPopularWrapper>
        <Heading lineLeft>Most Popular</Heading>
        <>
          {movieError ? (
            <div>{movieError}</div>
          ) : movieLoading ? (
            <Loading />
          ) : (
            <MovieCardSlider movies={mostPopularMovies} />
          )}
        </>
      </S.MostPopularWrapper>

      <S.FilterListWrapper>
        <>
          {genreError ? (
            <div>{genreError}</div>
          ) : genreLoading ? (
            <Loading />
          ) : (
            <FilterList
              genres={genres}
              selectedGenre={selectedGenre}
              onSelect={(genre: GenreProps) => {
                setSelectedGenre(genre);
                setCurrentPage(1);
              }}
            />
          )}
        </>
      </S.FilterListWrapper>

      <S.MovieListWrapper>
        <Heading lineLeft>{selectedGenre.name} Movies</Heading>
        <>
          {movieError ? (
            <div>{movieError}</div>
          ) : movieLoading ? (
            <Loading />
          ) : !movies.length ? (
            <div>No movies for this category</div>
          ) : (
            <MovieList movies={movies} />
          )}
        </>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPaginate={(page: number) => setCurrentPage(page)}
        />
      </S.MovieListWrapper>

      <S.TopUpcommingWrapper>
        <Heading lineLeft>Top Upcomming</Heading>
        <>
          {movieError ? (
            <div>{movieError}</div>
          ) : movieLoading ? (
            <Loading />
          ) : (
            <MovieCardSlider movies={topUpcommingMovies} />
          )}
        </>
      </S.TopUpcommingWrapper>
    </S.Wrapper>
  );
};

export default Home;
