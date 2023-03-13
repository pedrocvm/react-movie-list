import { GenreProps } from 'models/genre';
import api from 'services/api.config';

export const getGenres = async (): Promise<GenreProps[]> => {
  const {
    data: { genres }
  } = await api.get('/genre/movie/list');

  return genres;
};
