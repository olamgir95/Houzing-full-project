import styled from "styled-components";
import { ReactComponent as cardHouse } from "../../assets/icons/cardHouse.svg";
import { ReactComponent as cardMaps } from "../../assets/icons/cardMaps.svg";
import { ReactComponent as email } from "../../assets/icons/email.svg";
import { ReactComponent as location } from "../../assets/icons/location.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";
import { ReactComponent as up } from "../../assets/icons/up.svg";

const Container = styled.div`
  background: #0d263b;
  margin-bottom: -25px;
  .fend {
    padding: 16px 20px;
    padding-left: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    .logo {
      display: flex;
      align-items: center;
      h3 {
        color: white;
      }
    }
    .toCenter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 12px;
      > .copyr {
        display: inline-flex;
        align-items: center;
        column-gap: 73px;
        color: white;
        .up {
          display: inline-flex;
          align-items: center;
          padding: 22px 20px;
          background-color: #0061df;
          border-radius: 3px;
          cursor: pointer;
        }
      }
    }
  }
`;
const Main = styled.div`
  height: 417px;
  display: flex;
  position: relative;
  /* align-items: center; */
  justify-content: space-around;
  margin: 0 auto;
  width: 100%;
  margin-top: 46px;
  padding: 48px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 235px;
  width: 100%;
`;

Content.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;
Content.Item = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

const Icon = styled.div``;
Icon.Email = styled(email)`
  & path {
    fill: white;
  }
`;
Icon.Location = styled(location)`
  & path {
    fill: white;
  }
`;
Icon.Phone = styled(phone)`
  & path {
    fill: white;
  }
`;

Icon.House = styled(cardHouse)`
  margin-bottom: 24px;
`;
Icon.Maps = styled(cardMaps)`
  margin-bottom: 24px;
`;
const Social = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 40px;
`;
const Logo = styled(logoImg)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: #ffff;
  }
`;

const FacebookIcon = styled(facebook)``;
const TwitterIcon = styled(twitter)``;
const InstagramIcon = styled(instagram)``;
const LinkedinIcon = styled(linkedin)``;
const ArrowUpIcon = styled(up)``;

export {
  Container,
  Content,
  Icon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  Social,
  Logo,
  ArrowUpIcon,
  Main,
};
