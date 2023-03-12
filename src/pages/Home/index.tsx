import React from 'react';
import MovieCardSlider from 'components/ui/MovieCardSlider';
import moviesMock from 'components/ui/MovieList/mock';
import * as S from './styles';
import Heading from 'components/ui/Heading';

const Home = () => {
  return (
    <>
      <S.MostPopularWrapper>
        <Heading lineLeft>Most Popular</Heading>
        <MovieCardSlider movies={moviesMock} />
      </S.MostPopularWrapper>
    </>
  );
};

export default Home;
