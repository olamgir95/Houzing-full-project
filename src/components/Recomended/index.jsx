import React from "react";
import CardGroup from "../CardGroup";
import { Container, Content } from "./style";

export const Recommended = () => {
  return (
    <Container>
      <Content>
        <h1 className="title">Recommended</h1>
        <div className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Content>
      <CardGroup recommended />
    </Container>
  );
};

export default Recommended;
