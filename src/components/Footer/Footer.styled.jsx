import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 162px;
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

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    text-align: center;
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

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 18px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    line-height: 18px;
    text-align: center;
  }
`;
