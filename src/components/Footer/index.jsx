import {
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
  Main
} from "./style";

export const Footer = () => {
  const scrollToTop = () => {
    let target = document.documentElement;
    target.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Container>
      <Main>
      <Content>
        <Content.Title>Contact Us</Content.Title>
        <Content.Item>
          <Icon.Location />
          329 Queensberry Street, <br /> North Melbourne, Australia.
        </Content.Item>
        <Content.Item>
          <Icon.Phone /> 123 456 7890
        </Content.Item>
        <Content.Item>
          <Icon.Email /> support@houzing.com
        </Content.Item>
        <Social className="social">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <LinkedinIcon />
        </Social>
      </Content>
      <Content>
        <Content.Title>Wide Renge Of Properties</Content.Title>

        <Content.Item> Uzbekistan</Content.Item>
        <Content.Item> India</Content.Item>
        <Content.Item> UAE</Content.Item>
        <Content.Item> Korea</Content.Item>
      </Content>
      <Content>
        <Content.Title>Financing Made Easy</Content.Title>

        <Content.Item>Apartments </Content.Item>
        <Content.Item>Condos </Content.Item>
        <Content.Item>Houses </Content.Item>
        <Content.Item>Offices </Content.Item>
        <Content.Item>Retail </Content.Item>
      </Content>
      <Content>
        <Content.Title>Lists by Category</Content.Title>

        <Content.Item>About Us</Content.Item>
        <Content.Item>Terms & Conditions</Content.Item>
        <Content.Item>Support Center</Content.Item>
        <Content.Item>Contact Us</Content.Item>
      </Content>
      </Main>
      <div className="fend">
        <div className="toCenter">
          <div className="logo">
            <Logo /> <h3>Houzing</h3>
          </div>
          <div className="copyr">
            <span>Copyright © 2022 CreativeLayers. All Right Reserved.</span>
            <div className="up" onClick={scrollToTop}>
              <ArrowUpIcon />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
