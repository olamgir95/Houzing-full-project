import GenericCarousel from '../Carousel/';
import React from 'react';

import { Container } from './style';
// import HouseCard from '../HouseCard';
import   Recomended  from '../Recomended';
import   Why  from '../Why';
import Category from '../Category';
import Recent from '../Recent';
import Banner from '../Banner';


export const Home = () => {
  return (
    <Container>
      <GenericCarousel/>
      <Recomended/>
      <Why/>
      <Category/>
      <Banner/>
      <Recent/>
      
    </Container>
  );
};

export default Home;