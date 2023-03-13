import { MovieProps } from 'models/movie';
import { getNextMonth } from 'utils/formatters/dateFormatter';
import api from 'services/api.config';

export const getMovies = async (
  page: number,
  genre: number
): Promise<{
  results: MovieProps[];
  total_pages: number;
  total_results: number;
}> => {
  const endpoint = !!genre ? '/discover/movie' : '/movie/popular';
  const params = !!genre
    ? {
        with_genres: genre,
        page
      }
    : { page };

  const {
    data: { results, total_pages, total_results }
  } = await api.get(endpoint, {
    params
  });

  return {
    results,
    total_pages: total_pages >= 500 ? 500 : total_pages,
    total_results
  };
};

export const getMostPopularMovies = async (): Promise<MovieProps[]> => {
  const {
    data: { results }
  } = await api.get('/discover/movie', {
    params: {
      sort_by: 'popularity.desc',
      'vote_average.gte': 7,
      page: 1
    }
  });

  return results.slice(0, 10);
};

export const getTopUpcommingMovies = async (): Promise<MovieProps[]> => {
  const {
    data: { results }
  } = await api.get('/discover/movie', {
    params: {
      sort_by: 'popularity.desc',
      'primary_release_date.gte': getNextMonth(),
      page: 1
    }
  });

  return results.slice(0, 10);
};
