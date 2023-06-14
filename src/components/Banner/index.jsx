import React from "react";
import { Blur, Container, Img, Content } from "./style";

import img1 from "..//..//assets/imgs/house2.png";

import { Button } from "../Generic";

const Banner = () => {
  return (
    <Container>
      <Img src={img1} />

      <Blur />
      <Content>
        <Content.Title>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
        </Content.Title>

        <Button className="button">Read More</Button>
      </Content>
    </Container>
  );
};

export default Banner;
