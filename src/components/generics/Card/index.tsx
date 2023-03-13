import React, { HTMLAttributes, useEffect, useState } from 'react';
import * as S from './styles';

export type CardProps = {
  isFlippable?: boolean;
  children: React.ReactNode;
  onFlip?: () => void;
} & HTMLAttributes<HTMLDivElement>;

const Card = ({
  isFlippable = false,
  onFlip,
  children,
  ...props
}: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(isFlippable);

  useEffect(() => {
    setIsFlipped(isFlippable);
  }, [isFlippable]);

  return (
    <S.Wrapper isFlipped={isFlipped} onMouseLeave={onFlip} {...props}>
      {children}
    </S.Wrapper>
  );
};

export default Card;
