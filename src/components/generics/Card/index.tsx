import React, { HTMLAttributes, useEffect, useState } from 'react';
import * as S from './styles';

export type CardProps = {
  isFlippable?: boolean;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Card = ({ isFlippable = false, children, ...props }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(isFlippable);

  useEffect(() => {
    setIsFlipped(isFlippable);
  }, [isFlippable]);

  return (
    <S.Wrapper
      isFlipped={isFlipped}
      onMouseLeave={() => setIsFlipped(false)}
      {...props}
    >
      {children}
    </S.Wrapper>
  );
};

export default Card;
