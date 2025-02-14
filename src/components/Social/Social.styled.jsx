import styled from 'styled-components';
import { FaLocationDot } from 'react-icons/fa6';

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 200px;

  @media (max-width: 1200px) {
    padding-bottom: 59px;
  }

  @media (max-width: 770px) {
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

    margin: 0 0 8px;
  }

  @media (max-width: 770px) {
    font-size: 8px;
    line-height: 10px;

    margin: 0 0 3px;
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

    margin-bottom: 25px;
  }

  @media (max-width: 770px) {
    gap: 6px;

    margin-bottom: 11px;
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
    border: 0.419182px solid #000000;

    width: 116px;
    height: 133px;
    border-radius: 10.06px;
  }

  @media (max-width: 770px) {
    border: 0.180294px solid #000000;

    width: 60px;
    height: 60px;
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
    border: 0.419182px solid #000000;
    font-size: 11.7371px;
    line-height: 16px;
  }

  @media (max-width: 770px) {
    width: 59.94px;
    height: 12px;
    border-radius: 4.33px;
    border: 0.180294px solid #000000;

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

  @media (max-width: 1200px) {
    gap: 19px;
  }
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
    height: 225.82px;

    border: 0.516667px solid #000000;
    border-radius: 12.4px;

    flex-direction: unset;
  }

  @media (max-width: 770px) {
    width: 131px;
    height: 70px;

    border: 0.222222px solid #000000;
    border-radius: 5.33333px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
  }
`;

export const BigConMob = styled.div`
  display: none;

  @media (max-width: 770px) {
    width: 200px;
    height: 200px;

    border: 0.222222px solid #000000;
    border-radius: 5.33333px;
  }
`;

export const BigConContact = styled.div`
  text-align: left;

  width: 591px;
  height: 319px;

  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 24px;

  @media (max-width: 1200px) {
    width: 305.35px;
    height: 225.82px;

    border: 0.516667px solid #000000;
    border-radius: 12.4px;
  }

  @media (max-width: 770px) {
    width: 131px;
    height: 70px;

    border: 0.222222px solid #000000;
    border-radius: 5.33333px;
  }
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
    font-size: 26px;
    line-height: 24px;
  }
  @media (max-width: 770px) {
    margin: 8px 0 0 11px;

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

    gap: 40px;
    margin: 35px 0 0 20px;

    font-size: 11.7371px;
    line-height: 16px;
  }

  @media (max-width: 770px) {
    width: 49.94px;
    height: 14.06px;

    gap: 10px;
    margin: 8px 0 0 11px;

    font-size: 5.04822px;
    line-height: 7px;
  }
`;

export const TelItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;

  @media (max-width: 770px) {
    gap: 6px;
  }
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
    width: 45px;
    height: 44px;
    margin-top: 2px;
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
    font-size: 26px;
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
    width: 23px;
    height: 23px;
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
    margin-top: 4.13px;
  }

  @media (max-width: 770px) {
    display: none;
  }
`;

export const MapTextMob = styled.p`
  display: none;
  margin: 0;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #767676;
  margin-top: 8px;

  @media (max-width: 770px) {
    display: block;
    font-size: 4px;
    line-height: 5px;
    margin-top: 6px;
  }

  &:hover {
    color: #007bff;
    text-decoration: underline; 
  }
`;

export const Map = styled.iframe`
  width: 591px;
  height: 280px;
  border: 0;
  border-radius: 24px 24px 0 0;

  @media (max-width: 1200px) {
    width: 305px;
    height: 200px;

    border-radius: 12.4px 12.4px 0 0;
  }
  @media (max-width: 770px) {
    display: none;
  }
`;

export const LocationIcon = styled(FaLocationDot)`
  display: none;
  @media (max-width: 770px) {
    display: block;
    width: 15px;
  }
`;
