import { Blur, Container, Content, Img } from "./style";
import house from "../../assets/imgs/house.png";


export const CategoryCard = ({onClick, data = {} }) => {
  const { name } = data;
  return (
    <Container onClick={onClick}>
      <Img src={house} />
      <Blur />
      <Content>{name || "Category Name"}</Content>
    </Container>
  );
};

export default CategoryCard;
