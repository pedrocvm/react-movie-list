import React from 'react';
import * as S from './styles';
import Button from 'components/generics/Button';
import { GenreProps } from 'models/genre';

export type FilterListProps = {
  genres: GenreProps[];
  selectedGenre: GenreProps;
  onSelect: (genre: GenreProps) => void;
};

const FilterList = ({ genres, selectedGenre, onSelect }: FilterListProps) => (
  <>
    <S.GenreSelectorWrapper>
      <S.GenreSelector
        selected={selectedGenre.id === 0}
        onClick={() => onSelect({ id: 0, name: 'All' })}
      >
        <Button>All</Button>
      </S.GenreSelector>

      {genres?.map((genre) => (
        <S.GenreSelector
          key={genre.id}
          selected={selectedGenre.id === genre.id}
        >
          <Button onClick={() => onSelect(genre)}>{genre.name}</Button>
        </S.GenreSelector>
      ))}
    </S.GenreSelectorWrapper>
  </>
);

export default FilterList;
