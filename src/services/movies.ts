import { MovieProps } from 'models/movie';
import api from './api.config';

export const getMovies = async (page: number): Promise<MovieProps[]> => {
  const {
    data: { results }
  } = await api.get('/movie/popular', {
    params: { page }
  });

  return results;
};
