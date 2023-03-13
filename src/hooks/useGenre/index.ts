import { useQuery } from 'react-query';
import { GenreProps } from 'models/genre';
import { getGenres } from 'services/genres';

const useGenre = () => {
  const {
    data: genres = [],
    isLoading: loading,
    error
  } = useQuery<GenreProps[], Error>('genres', getGenres);

  return { genres, loading, error: error?.message };
};

export default useGenre;
