import React from 'react';
import Heading from 'components/ui/Heading';

import * as S from './styles';

const Footer = () => (
  <S.Wrapper>
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact Us
        </Heading>
        <span>sac@movielist.com</span>
      </S.Column>

      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <span>Instagram</span>
          <span>Twitter</span>
          <span>Youtube</span>
          <span>Facebook</span>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>

        <span>About us</span>
        <span>Privacy Policy</span>
        <span>Careers</span>
      </S.Column>

      <S.Column aria-labelledby="footer-contact">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>
      <p>
        Made with ❤ by
        <a
          href="https://linkedin.com/in/pedrocvm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pedro Matos
        </a>
      </p>
      <p>© 2023 All rights reserved.</p>
    </S.Copyright>
  </S.Wrapper>
);

export default Footer;
