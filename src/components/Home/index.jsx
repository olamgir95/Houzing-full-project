import GenericCarousel from '../Carousel/';
import React from 'react';

import { Container } from './style';
// import HouseCard from '../HouseCard';
import HouseCard from '../CategoryCard';


export const Home = () => {
  return (
    <Container>
      <GenericCarousel/>
      <HouseCard/>
    </Container>
  );
};

export default Home;