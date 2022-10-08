import GenericCarousel from '../Carousel/';
import React from 'react';

import { Container } from './style';
// import HouseCard from '../HouseCard';
import  { CategoryCard } from '../CategoryCard';
import Category from '../Category';


export const Home = () => {
  return (
    <Container>
      <GenericCarousel/>
    
      <Category/>
      
    </Container>
  );
};

export default Home;