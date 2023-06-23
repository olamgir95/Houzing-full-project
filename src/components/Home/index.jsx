import React from "react";
import Banner from "../Banner";
import GenericCarousel from "../Carousel/";
import Category from "../Category";
import Recent from "../Recent";
import Recomended from "../Recomended";
import Why from "../Why";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <GenericCarousel />
      <Recomended />
      <Why />
      <Category />
      <Banner />
      <Recent />
    </Container>
  );
};

export default Home;
