import styled from 'styled-components';

export const BenefitsMainContainer = styled.div`
  padding: 0 16px;
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
  gap: 28px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
  }
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
  width: 88px;
  height: 88px;
  margin-bottom: 59.49px;

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
  font-size: 32.6769px;
  line-height: 42px;
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 13.52px 0;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const BigCardTextSpan = styled.span`
  font-size: 28.1385px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const BigCardSubText = styled.p`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19.8737px;
  line-height: 25px;
  text-align: center;
  width: 206px;
  color: #868686;
  margin: 0;

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
  gap: 28px;

  @media (max-width: 768px) {
    gap: 20px;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    gap: 20px;
    justify-content: space-between;
    width:100%;
  }
`;

export const SmallCardDark = styled.div`
  padding: 53px 29px 43px;
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
  font-size: 20px;
  line-height: 20px;
  width: 224px;
  color: #ffffff;
  margin: 0 0 6px 0;

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
  font-size: 16px;
  line-height: 20px;
  width: 224px;
  color: #868686;
  margin: 0;

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

export const SmallIcon = styled.div`
  width: 72px;
  height: 72px;
  background: #f9f9ff;
  border-radius: 20px;
  margin-bottom: 28px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
  }
`;
