import styled from "styled-components";

const Container = styled.div`
margin-top: 96px;
  height: fit-content;
  position: relative;
  Button{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color:white;
width: 180px;
height: 44px;
background: #0061DF;
border-radius: 2px;
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
  background-color: rgba(0, 0, 0, 0.5);
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
  font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 36px;
/* or 129% */
max-width: 555px;
width: 100%;
height: 72px;
text-align: center;
letter-spacing: -0.02em;

color: #FFFFFF;
`;




export { Container,  Img, Blur, Content  };
