import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/garage.svg";
import { ReactComponent as ruler } from "../../assets/icons/rules.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
const Container = styled.div`
  width: 100%;
  max-width: 280px;
  min-width: 230px;

  max-height: 380px;
  min-height: 350px;
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  border-radius: 3px;
`;

const Img = styled.img`
  border-radius: 3px;
  width: 100%;
`;
const Blur = styled.div`
  /* border-radius: 3px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0; */
  
`;

// const Content = styled.div`
//   display: flex;
//   flex-direction: ${({ footer }) => (footer ? "row" : "column")};
//   justify-content: ${({ footer }) => footer && "space-between"};
//   padding-top: 24px;
//   padding: 16px 20px;
//   background: white;
// `;
const Content = styled.div`
 
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
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
`;
const Icons = styled.div`
  color: red;
`;

export { Container, Img, Content, Icons, Blur };
