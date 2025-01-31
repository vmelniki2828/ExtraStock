import styled from 'styled-components';

export const BenefitsMainContainer = styled.div`
  padding: 0 16px;
  margin-bottom: 120px;
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

  @media (max-width: 1024px) {
    font-size: 72px;
    padding-top: 60px;
  }

  @media (max-width: 768px) {
    font-size: 48px;
    padding-top: 40px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
    padding-top: 20px;
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

  @media (max-width: 1024px) {
    font-size: 36px;
    padding-bottom: 60px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    padding-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    padding-bottom: 20px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 23.98px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
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

  @media (max-width: 768px) {
    width: 240px;
    padding: 60px 0 40px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 40px 0 30px;
  }
`;

export const BigCardIcon = styled.img`
  width: 75.38px;
  height: 75.38px;
  margin: 64.24px 0 68.94px;

  @media (max-width: 768px) {
    width: 72px;
    height: 72px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    width: 56px;
    height: 56px;
    margin-bottom: 20px;
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
  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const BigCardSubText = styled.p`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17.02px;
  line-height: 21.28px;
  text-align: center;
  width: 206px;
  color: #868686;
  margin: 0;
  height: 86px;
  width: 176.45px;
  @media (max-width: 768px) {
    font-size: 16px;
    width: 180px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    width: 100%;
  }
`;

export const SmallCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22.27px;

  @media (max-width: 768px) {
    gap: 20px;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    gap: 20px;
    justify-content: space-between;
    width: 100%;
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

  @media (max-width: 768px) {
    padding: 40px 20px 30px;
  }

  @media (max-width: 480px) {
    padding: 30px 16px 20px;
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
  height: 35px;
  width: 193.58px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 15.5px;
    width: 180px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    width: 100%;
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
  height: 52px;
  margin: 0 0 0 24.84px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 12px;
    width: 180px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    width: 100%;
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
`;
