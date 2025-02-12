import styled from 'styled-components';

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 200px;

  @media (max-width: 768px) {
    padding-bottom: 59px;
  }

  @media (max-width: 480px) {
    padding-bottom: 25px;
  }
`;

export const SocialMainText = styled.h3`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 46px;
  margin: 0 0 16px;
  color: #000000;

  @media (max-width: 1200px) {
    font-size: 18.6px;
    line-height: 24px;
  }

  @media (max-width: 770px) {
    font-size: 8px;
    line-height: 10px;
  }
`;

export const SocialMainSubText = styled.p`
  margin: 0;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #8c8c8c;
  margin-bottom: 54px;

  @media (max-width: 1200px) {
    font-size: 9.3px;
    line-height: 16px;
    margin-bottom: 31px;
  }

  @media (max-width: 770px) {
    font-size: 4px;
    line-height: 7px;
    margin-bottom: 12px;
  }
`;

export const SocialSmallContainers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30.02px;
  margin-bottom: 50.09px;

  @media (max-width: 1200px) {
    gap: 15.51px;
  }

  @media (max-width: 770px) {
    gap: 6px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 19.47px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  width: 224.74px;
  height: 258.81px;

  @media (max-width: 1200px) {
    width: 116px;
    height: 133px;
    border-radius: 10.06px;
  }

  @media (max-width: 770px) {
    width: 49px;
    height: 57px;
    border-radius: 4.33px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const ItemContainerBottom = styled.div`
  display: flex;
  self-items: end;
  width: 224.74px;
  height: 63.28px;

  background: #ffffff;
  border: 0.811321px solid #000000;
  border-radius: 19.4717px;

  margin-top: auto;

  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22.717px;
  line-height: 31px;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #9c28ff;

  @media (max-width: 1200px) {
    width: 116.11px;
    height: 32.7px;
    border-radius: 10.06px;

    font-size: 11.7371px;
    line-height: 16px;
  }

  @media (max-width: 770px) {
    width: 49.94px;
    height: 14.06px;
    border-radius: 4.33px;

    font-size: 5.04822px;
    line-height: 7px;
  }
`;

export const SocialBigContainers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 37px;

  @media (max-width: 770px) {
    gap: 8px;
  }
`;

export const BigCon = styled.div`
  width: 591px;
  height: 319px;

  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 24px;

  @media (max-width: 1200px) {
    width: 305.35px;
    height: 164.82px;
  }

  @media (max-width: 770px) {
    width: 131.33px;
    height: 70.89px;
  }
`;

export const BigConContact = styled(BigCon)`
  text-align: left;
`;

export const BigConContactText = styled.p`
  margin: 52px 0 0 52px;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 46px;

  color: #000000;

  @media (max-width: 1200px) {
    margin: 26px 0 0 26px;
    font-size: 20.6667px;
    line-height: 24px;
  }
  @media (max-width: 770px) {
    margin: 11px 0 0 11px;

    font-size: 8.88889px;
    line-height: 10px;
  }
`;

export const TelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 50px 0 0 52px;
  justify-content: start;

  @media (max-width: 1200px) {
    width: 116.11px;
    height: 32.7px;

    gap: 23px;
    margin: 25px 0 0 25px;

    font-size: 11.7371px;
    line-height: 16px;
  }

  @media (max-width: 770px) {
    width: 49.94px;
    height: 14.06px;

    gap: 10px;
    margin: 11px 0 0 11px;

    font-size: 5.04822px;
    line-height: 7px;
  }
`;

export const TelItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

export const ImageItem = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 20px;

  @media (max-width: 1200px) {
    width: 77.5px;
    height: 77.5px;
    margin-top: 10px;
  }

  @media (max-width: 770px) {
    width: 33.33px;
    height: 33.33px;
    margin-top: 5px;
  }
`;

export const TelNum = styled.p`
  margin: 0;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 46px;

  color: #000000;

  @media (max-width: 1200px) {
    font-size: 20.6667px;
    line-height: 24px;
  }

  @media (max-width: 770px) {
    font-size: 8.88889px;
    line-height: 10px;
  }
`;

export const TelImg = styled.img`
  width: 39px;
  height: 39px;

  @media (max-width: 1200px) {
    width: 19px;
    height: 19px;
  }

  @media (max-width: 770px) {
    width: 8px;
    height: 8px;
  }
`;

export const MapText = styled.p`
  margin: 0;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #767676;
  margin-top: 8px;

  @media (max-width: 1200px) {
    font-size: 9.3px;
    line-height: 12px;
  }

  @media (max-width: 770px) {
    font-size: 4px;
    line-height: 5px;
  }
`;

export const Map = styled.iframe`
  width: 591px;
  height: 280px;
  border: 0;
  border-radius: 24px 24px 0 0;

  @media (max-width: 1200px) {
    width: 305.87px;
    height: 130.82px;
  }
  @media (max-width: 770px) {
    width: 131.56px;
    height: 44.89px;
  }
`;
