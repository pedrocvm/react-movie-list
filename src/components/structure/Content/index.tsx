import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from 'pages/Home';
import Movie from 'pages/Movie';
import { Container } from 'components/structure/Container';

const Content = () => (
  <Container>
    <Routes>
      <Route path="/" element={<Navigate to="/movies" />} />
      <Route path="/movies" element={<Home />} />
      <Route path="/movies/:id" element={<Movie />} />
    </Routes>
  </Container>
);

export default Content;
