import React, { useState } from 'react';
import { MovieProps } from 'models/movie';
import * as S from './styles';
import Card from 'components/generics/Card';
import { truncateText } from 'utils/formatters/truncateText';
import { dateFormatter } from 'utils/formatters/dateFormatter';

export type MovieCardProps = Pick<
  MovieProps,
  | 'id'
  | 'title'
  | 'overview'
  | 'poster_path'
  | 'vote_average'
  | 'vote_count'
  | 'release_date'
>;

const MovieCard = ({
  title,
  overview,
  poster_path,
  vote_average,
  vote_count,
  release_date
}: MovieCardProps) => {
  const [isFlippable, setIsFlippable] = useState(false);

  return (
    <Card isFlippable={isFlippable} title={title} data-testid="movie-card">
      <S.PosterWrapper onClick={() => setIsFlippable(true)}>
        <S.Image
          src={`${process.env.REACT_APP_POSTER_URL}${poster_path}`}
          alt={title}
        />
      </S.PosterWrapper>

      <S.ContentWrapper>
        <S.Title>{title}</S.Title>

        <S.Description>
          {truncateText(overview, 320)}
          {overview.length > 320 && <S.ReadMore>Read more</S.ReadMore>}
        </S.Description>

        <S.AdditionalInfo>
          <strong>Rating</strong>
          {vote_average.toFixed(2)} of {vote_count} votes
        </S.AdditionalInfo>

        <S.AdditionalInfo>
          <strong>Release Date</strong>
          {dateFormatter(release_date)}
        </S.AdditionalInfo>
      </S.ContentWrapper>
    </Card>
  );
};

export default MovieCard;
