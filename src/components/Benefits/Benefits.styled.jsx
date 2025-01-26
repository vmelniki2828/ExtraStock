import styled from 'styled-components';

export const BenefitsMainContainer = styled.div``;

export const BenefitsMainText = styled.h2`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  padding-top: 80px;
  margin: 0 0 20px 0;
  text-align: center;

  color: #000000;
`;

export const BenefitsSubText = styled.p`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 47px;
  line-height: 50px;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 80px;
  color: #000000;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 28px;
`;

export const BigCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background: #151515;
  border: 1px solid #d4d2e3;
  width: 282px;
  border-radius: 15px;
  padding: 75px 0 47px;
`;

export const BigCardIcon = styled.img`
  width: 88px;
  height: 88px;
  margin-bottom: 59.49px;
`;

export const BigCardText = styled.p`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32.6769px;
  line-height: 42px;
  /* or 128% */
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 13.52px 0;

  color: #ffffff;
`;

export const BigCardTextSpan = styled.span`
  font-size: 28.1385px;
`;

export const BigCardSubText = styled.p`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19.8737px;
  line-height: 25px;
  /* or 125% */
  text-align: center;
  width: 206px;
  color: #868686;
  margin: 0;
`;

export const SmallCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const SmallCardDark = styled.div`
  padding: 53px 29px 43px;

  background: #151515;
  border: 1px solid #868686;
  border-radius: 15px;
`;

export const SmallCardDarkText = styled.h3`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  width: 224px;
  color: #ffffff;
  margin: 0 0 6px 0;
`;

export const SmallCardDarkSubText = styled.p`
  margin: 0;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  width: 224px;
  color: #868686;
`;

export const SmallCardLight = styled.div`
  padding: 53px 29px 43px;

  background: #ffffff;
  border: 1px solid #9c28ff;
  border-radius: 15px;
`;

export const SmallCardLightText = styled.h3`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  width: 224px;
  color: #9C28FF;
  margin: 0 0 6px 0;
`;

export const SmallCardLightSubText = styled.p`
  margin: 0;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  width: 224px;
  color: #B58ADA;
`;

export const SmallIcon = styled.div`
  width: 72px;
  height: 72px;

  background: #f9f9ff;
  border-radius: 20px;
  margin-bottom: 28px;
`;
