import React from 'react';
import MovieCard, { MovieCardProps } from 'components/ui/MovieCard';
import Slider, { SliderSettings } from 'components/generics/Slider';
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';

import * as S from './styles';

export type MovieCardSliderProps = {
  movies: MovieCardProps[];
};

const settings: SliderSettings = {
  slidesToShow: 3.5,
  slidesToScroll: 3,
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
  nextArrow: (
    <S.CustomArrow>
      <ArrowRight aria-label="Next Movie" size={25} />
    </S.CustomArrow>
  ),
  prevArrow: (
    <S.CustomArrow>
      <ArrowLeft aria-label="Previous Movie" size={25} />
    </S.CustomArrow>
  )
};

const MovieCardSlider = ({ movies }: MovieCardSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default React.memo(MovieCardSlider);
