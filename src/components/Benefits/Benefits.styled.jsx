import styled from 'styled-components';

export const BenefitsMainContainer = styled.div`
  padding: 0 16px;
  margin-bottom: 120px;

  @media (max-width: 744px) {
    margin-bottom: 62px;
  }

  @media (max-width: 440px) {
    margin-bottom: 26px;
  }
`;

export const BenefitsMainText = styled.h2`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  padding-top: 80px;
  margin: 0 0 20px 0;
  text-align: center;

  color: #000000;

  @media (max-width: 1280px) {
    font-size: 49.6px;
    line-height: 40px;
    padding-top: 41px;
  }

  @media (max-width: 766px) {
    font-size: 21.3333px;
    line-height: 20px;
    padding-top: 17px;
  }
`;

export const YellowSpan = styled.span`
  color: #ffc300;
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

  @media (max-width: 1280px) {
    font-size: 24.2833px;
    line-height: 26px;
    padding-bottom: 41px;
  }

  @media (max-width: 766px) {
    font-size: 10.4444px;
    line-height: 11px;
    padding-bottom: 17px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 23.98px;

  @media (max-width: 1280px) {
    gap: 12.39px;
  }

  @media (max-width: 766px) {
    gap: 5.33px;
  }
`;

export const BigCard = styled.div`
  width: 241.55px;
  height: 508.79px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background: #151515;
  border: 1px solid #d4d2e3;
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1280px) {
    width: 124.8px;
    height: 262.87px;
    border-radius: 6.64px;
  }

  @media (max-width: 766px) {
    width: 53.68px;
    height: 113.06px;
    border-radius: 2.86px;
  }
`;

export const BigCardIcon = styled.img`
  width: 75.38px;
  height: 75.38px;
  margin: 64.24px 0 68.94px;

  @media (max-width: 1280px) {
    width: 38px;
    height: 38px;
    margin-top: 35px;
    margin-bottom: 35px;
  }

  @media (max-width: 766px) {
    width: 16px;
    height: 16px;
    margin-top: 14px;
    margin-bottom: 15px;
  }
`;

export const BigCardText = styled.p`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 27.99px;
  line-height: 35.76px;
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 30.31px 0;
  color: #ffffff;
  width: 186.6px;

  @media (max-width: 1280px) {
    font-size: 14.46px;
    line-height: 18.5px;
    margin: 0 0 16.06px 0;
    width: 96.41px;
  }

  @media (max-width: 766px) {
    font-size: 6.22px;
    line-height: 7.9px;
    margin: 0 0 6.74px 0;
    width: 41.47px;
  }
`;

export const BigCardSubText = styled.p`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17.02px;
  line-height: 21.28px;
  text-align: center;
  color: #868686;
  margin: 0;
  height: 86px;
  width: 176.45px;

  @media (max-width: 1280px) {
    font-size: 8.8px;
    line-height: 11px;
    width: 91.17px;
    height: 44px;
  }

  @media (max-width: 766px) {
    font-size: 3.78px;
    line-height: 4.7px;
    width: 39.21px;
    height: 19px;
  }
`;

export const SmallCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22.27px;

  @media (max-width: 1280px) {
    gap: 12.39px;
  }

  @media (max-width: 766px) {
    gap: 5.33px;
  }
`;

export const CardBlock = styled.div`
  display: flex;
  gap: 23.98px;

  @media (max-width: 1280px) {
    gap: 12.39px;
  }

  @media (max-width: 766px) {
    gap: 5.33px;
  }
`;

export const SmallCardDark = styled.div`
  width: 240.26px;
  height: 240.26px;
  background: #151515;
  border: 1px solid #868686;
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1280px) {
    width: 122.68px;
    height: 122.68px;
    border-radius: 6.64px;
  @media (max-width: 766px) {
    width: 51.06px;
    height: 51.06px;
    border-radius: 2.86px;
  }
`;

export const SmallCardLight = styled(SmallCardDark)`
  background: #ffffff;
  border: 1px solid #9c28ff;
`;

export const SmallCardDarkText = styled.h3`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 17.13px;
  line-height: 17.13px;
  color: #ffffff;
  margin: 0 0 13px 24.84px;
  width: 193.58px;
  display: flex;
  align-items: center;

  @media (max-width: 1280px) {
    width: 100.58px;
    margin: 0 0 8px 12.84px;
    font-size: 8.85097px;
    line-height: 9px;
  }

  @media (max-width: 766px) {
    width: 43.58px;
    margin: 0 0 5px 5.84px;
    font-size: 3.80687px;
    line-height: 4px;
  }
`;

export const SmallCardDarkSubText = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 13.7px;
  line-height: 17.13px;
  color: #868686;
  width: 193.58px;
  margin: 0 0 0 24.84px;
  display: flex;
  align-items: center;

  @media (max-width: 1280px) {
    font-size: 7.08078px;
    line-height: 9px;
    width: 105px;
    margin: 0 0 0 12.84px;
  }

  @media (max-width: 766px) {
    font-size: 3px;
    line-height: 3px;
    width: 43px;
    margin: 0 0 0 5.84px;
  }
`;

export const SmallCardLightText = styled(SmallCardDarkText)`
  color: #9c28ff;
`;

export const SmallCardLightSubText = styled(SmallCardDarkSubText)`
  color: #b58ada;
`;

export const SmallIcon = styled.img`
  height: 70px;
  max-width: 100px;
  margin: 28.86px 0 19.65px 21.23px;

  @media (max-width: 1280px) {
    margin: 14.91px 0 10.15px 10.97px;
    max-width: 65px;
    height: 36.17px;
  }
  @media (max-width: 766px) {
    margin: 6.41px 0 1px 4.27px;
    max-width: 30px;
    height: 15.56px;
  }
`;
