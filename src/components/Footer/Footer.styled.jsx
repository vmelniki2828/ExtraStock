import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 162px;

  @media (max-width: 770px) {
    height: 83px;
  }
`;

export const LeftText = styled.p`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  margin: 0;
  color: #b58ada;
  text-align: left;

  @media (max-width: 1200px) {
    font-size: 9.3px;
    line-height: 9px;
  }

  @media (max-width: 770px) {
    font-size: 4px;
    line-height: 4px;
  }
`;

export const ImageLogo = styled.img`
  width: 87px;
  height: 87px;

  @media (max-width: 1200px) {
    width: 44.95px;
    height: 44.95px;
  }

  @media (max-width: 770px) {
    width: 19.33px;
    height: 19.33px;
  }
`;

export const RightText = styled.p`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;

  text-align: right;
  text-decoration-line: underline;

  color: #b58ada;

  @media (max-width: 770px) {
    font-size: 9.3px;
    line-height: 16px;
  }

  @media (max-width: 1200px) {
    font-size: 4px;
    line-height: 7px;
  }
`;
