import { Meta, Story } from '@storybook/react/types-6-0';
import { Settings } from 'react-slick';
import styled from 'styled-components';
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';

import Slider from '.';

export default {
  title: 'Generics/Slider',
  component: Slider,
  args: {},
  argTypes: {}
} as Meta;

const settings: Settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: (
    <ArrowRight className="next-arrow" aria-label="Next Movie" size={20} />
  ),
  prevArrow: (
    <ArrowLeft className="prev-arrow" aria-label="Previous Movie" size={20} />
  )
};

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`;

export const Basic: Story = () => (
  <div style={{ maxWidth: '138rem', margin: '0 auto' }}>
    <Slider settings={settings}>
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
      <Slide>5</Slide>
    </Slider>
  </div>
);
