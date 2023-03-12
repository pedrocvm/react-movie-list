import React from 'react';
import MovieCard, { MovieCardProps } from 'components/ui/MovieCard';
import Slider, { SliderSettings } from 'components/generics/Slider';
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';

import * as S from './styles';
import Card from 'components/generics/Card';

export type MovieCardSliderProps = {
  movies: MovieCardProps[];
};

const settings: SliderSettings = {
  slidesToShow: 3.5,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="Next Movie" size={30} />,
  prevArrow: <ArrowLeft aria-label="Previous Movie" size={30} />
};

const MovieCardSlider = ({ movies }: MovieCardSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}

      <S.CustomCard>
        <p>See all</p>
        <Card>
          <img
            src={`${process.env.REACT_APP_POSTER_URL}${
              movies[movies.length - 1].poster_path
            }`}
            alt="see all movies"
          />
        </Card>
      </S.CustomCard>
    </Slider>
  </S.Wrapper>
);

export default MovieCardSlider;
