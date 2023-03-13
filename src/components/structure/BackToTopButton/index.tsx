import React, { useEffect, useState } from 'react';
import { ArrowBackIos as ArrowTop } from '@styled-icons/material-outlined/ArrowBackIos';

import * as S from './styles';
import Button from 'components/generics/Button';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <S.Wrapper onClick={handleClick} isVisible={isVisible}>
        <Button
          size="large"
          rounded
          icon={<ArrowTop size={25} />}
          aria-label="back to top button"
        />
      </S.Wrapper>
    </>
  );
};

export default BackToTopButton;
