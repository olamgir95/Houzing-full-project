import { Blur, Container, Content, Img } from "./style";
import noimg from "../../assets/imgs/category.png";

export const HouseCard = ({ data = {} }) => {
  const { name } = data;
  return (
    <Container>
      <Img src={noimg} />
      <Blur />
      <Content>{name || "Category Name"}</Content>
    </Container>
  );
};

export default HouseCard;
