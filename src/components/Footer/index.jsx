import { Container, Content, Icon } from './style';

export const Footer = () => {
  return (
    <Container>
      <Content>
        <Content.Title>Contact Us</Content.Title>
        <Content.Item>
          <Icon.Email /> 329 Queensberry Street, North Melbourne VIC 3051, Australia.
        </Content.Item>
        <Content.Item>
          {' '}
          <Icon.Phone /> 123 456 7890
        </Content.Item>
        <Content.Item>
          <Icon.Email /> support@houzing.com
        </Content.Item>
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
    </Container>
  );
};

export default Footer;