import styled from 'styled-components';
import { IoIosArrowRoundForward } from 'react-icons/io';

export const HeaderHeroContainer = styled.div`
  width: 1320px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 16px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 8px;
  }
`;

export const HeaderHeroContainerLeft = styled.div`
  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

export const HeaderHeroMainTitle = styled.h1`
  margin: 0;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 46px;
  line-height: 50px;
  color: #ffffff;

  @media (max-width: 1024px) {
    font-size: 38px;
    line-height: 45px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const HeaderHeroSubTitle = styled.p`
  margin: 0;
  width: 664px;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 41px;
  line-height: 34px;
  color: #ffffff;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    width: 100%;
    font-size: 36px;
    line-height: 32px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 28px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 20px;
  }
`;

export const HeaderHeroContainerRight = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

export const HeaderImgTshorts = styled.img`
  margin-right: -50px;

  @media (max-width: 1024px) {
    margin-right: 0;
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 200px;
  }
`;

export const StrongSpan = styled.span`
  font-weight: 600;
  font-size: 46px;
  line-height: 50px;

  @media (max-width: 1024px) {
    font-size: 38px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const PurpleSpan = styled.span`
  color: #9c28ff;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const HeaderButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 258px;
  height: 65px;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 32.5px;
  padding-left: 24px;
  padding-right: 7px;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 34px;
  line-height: 95%;
  cursor: pointer;
  color: #ffffff;
  transition: background-color 0.3s, color 0.3s, transform 0.3s, border 0.3s;

  &:hover {
    background-color: #ffc300;
    color: #333333;
    border-color: #ffc300;
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    font-size: 28px;
    width: 220px;
    height: 55px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    width: 200px;
    height: 50px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    width: 180px;
    height: 45px;
  }
`;

export const ArrowImg = styled(IoIosArrowRoundForward)`
  background-color: #ffc300;
  width: 49px;
  height: 49px;
  border-radius: 32.5px;
  color: black;

  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;
