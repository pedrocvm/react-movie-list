import React from 'react';
import { Container } from 'components/structure/Container';
import Header from 'components/structure/Header';
import Footer from 'components/structure/Footer';
import * as S from './styles';

export type BaseTemplateProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => (
  <S.Wrapper>
    <S.HeaderSection>
      <Container>
        <Header />
      </Container>
    </S.HeaderSection>

    <S.Content>
      <Container>{children}</Container>
    </S.Content>

    <S.FooterSection>
      <Container>
        <Footer />
      </Container>
    </S.FooterSection>
  </S.Wrapper>
);

export default Base;
