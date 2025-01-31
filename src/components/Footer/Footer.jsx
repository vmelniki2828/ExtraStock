import { FooterContainer, LeftText, RightText } from './Footer.styled';
import e_logo from '../../images/E_logo.png';

const Footer = () => {
  return (
    <FooterContainer>
      <LeftText>Copyright © 2025 EXTRASTOCK</LeftText>
      <img src={e_logo} alt="e_logo" />
      <RightText>Terms and Conditions | Privacy Policy</RightText>
    </FooterContainer>
  );
};

export default Footer;
