import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  height: 571px;
  position: relative;
`;
const Arrow = styled(arrow)`
  width: 45px;
  height: 45px;
  top: 50%;
  position: absolute;
  padding: 15px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: ${({ right }) => (right ? "matrix(-1, 0, 0, 1, 0, 0)" : 0)};
  right: ${({ right }) => right && "20px"};
  left: ${({ left }) => left && "20px"};
  cursor: pointer;
  :hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;
const Img = styled.img`
  width: 100%;
  height: 571px;
`;
const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;
const Content = styled.div`
.subTitle{
  color: white;
  font-size: 20px;
  margin-top: 20px;
}
  top: 134px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
`;
Content.Title = styled.h1`
  color: inherit;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  /* identical to box height, or 109% */

  letter-spacing: -0.02em;

  color: #ffffff;
`;

Content.Desc = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  color: #ffffff;
`;

export { Container, Arrow, Img, Blur, Content };
