import { useQuery } from 'react-query';
import { MovieProps } from 'models/movie';
import {
  getMovies,
  getMostPopularMovies,
  getTopUpcommingMovies
} from 'services/movies';
import { GenreProps } from 'models/genre';

interface MovieData {
  results: MovieProps[];
  total_pages: number;
  total_results: number;
}

const useMovie = (page: number, genre: GenreProps) => {
  const {
    data: movies = { results: [], total_pages: 0 },
    isLoading: moviesLoading,
    error: moviesError
  } = useQuery<MovieData, Error>(['movies', { page, genre }], () =>
    getMovies(page, genre.id)
  );

  const {
    data: mostPopularMovies = [],
    isLoading: popularLoading,
    error: popularError
  } = useQuery<MovieProps[], Error>('mostPopularMovies', getMostPopularMovies);

  const {
    data: topUpcommingMovies = [],
    isLoading: upcomingLoading,
    error: upcomingError
  } = useQuery<MovieProps[], Error>('topUpcomingMovies', getTopUpcommingMovies);

  const totalPages = movies?.total_pages ?? 0;

  const loading = moviesLoading || popularLoading || upcomingLoading || !movies;

  const error =
    moviesError?.message || popularError?.message || upcomingError?.message;

  return {
    movies: movies?.results ?? [],
    mostPopularMovies,
    topUpcommingMovies,
    totalPages,
    loading,
    error
  };
};

export default useMovie;
