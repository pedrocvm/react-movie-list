export type MovieProps = {
  id: number;
  title: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
};
