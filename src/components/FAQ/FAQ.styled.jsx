import styled from 'styled-components';

export const FAQMainContainer = styled.div`
  margin-bottom: 120px;

  @media (max-width: 1200px) {
    margin-bottom: 62px;
  }

  @media (max-width: 770px) {
    margin-bottom: 26px;
  }
`;

export const FAQMainText = styled.h3`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 46px;
  text-align: center;
  margin: 0;
  color: #131313;

  @media (max-width: 1200px) {
    font-size: 18.6px;
    line-height: 24px;
  }

  @media (max-width: 770px) {
    font-size: 8px;
    line-height: 10px;
  }
`;
