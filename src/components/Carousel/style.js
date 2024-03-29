import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/garage.svg";
import { ReactComponent as ruler } from "../../assets/icons/rules.svg";
const Container = styled.div`
  height: fit-content;
  position: relative;
  .ant-carousel .slick-dots{
    margin-left:46%;
    li button:before{
      display: none;
    }
  }
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
  background-color: rgba(0, 0, 0, 0.6);
`;
const Content = styled.div`
  .subTitle {
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
const Details = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding-top: 16px;
  color: inherit;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  /* identical to box height, or 109% */

  letter-spacing: -0.02em;

  color: #ffffff;
  .info {
    margin-top: 10px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    color: #ffffff;
  }
`;
Details.Item = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
const Icons = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  color: #ffffff;
`;
Icons.Bed = styled(bed)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 24px;
  color: white;
  
`;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;

export { Container, Arrow, Img, Blur, Content, Details, Icons };
