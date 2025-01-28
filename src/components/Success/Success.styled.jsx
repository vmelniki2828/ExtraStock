import styled from 'styled-components';
import { IoIosArrowRoundDown } from 'react-icons/io';

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  margin-bottom: 120px;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    padding-top: 100px;
    margin-bottom: 100px;
  }

  @media (max-width: 768px) {
    padding-top: 80px;
    margin-bottom: 80px;
  }

  @media (max-width: 480px) {
    padding-top: 60px;
    margin-bottom: 60px;
  }
`;

export const SuccessMainTitle = styled.h3`
  width: 690px;
  text-align: center;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 43px;
  line-height: 58px;
  margin: 0 0 60px 0;
  text-transform: uppercase;
  color: #000000;

  @media (max-width: 1024px) {
    font-size: 38px;
    line-height: 50px;
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 32px;
    line-height: 45px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 40px;
    margin-bottom: 40px;
  }
`;

export const SuccessPurple = styled.span`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 58px;
  text-transform: uppercase;
  color: #9c28ff;

  @media (max-width: 1024px) {
    font-size: 38px;
    line-height: 50px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 45px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 40px;
  }
`;

export const SuccessBlackText = styled.p`
  width: 1338px;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 84px;
  line-height: 75px;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  color: #000000;

  @media (max-width: 1200px) {
    width: 85%;
    font-size: 70px;
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 50px;
    line-height: 60px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
    line-height: 45px;
  }
`;

export const SuccessWhiteText = styled(SuccessBlackText)`
  color: #ffffff;
`;

export const DarkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  padding: 40px 0;

  @media (max-width: 768px) {
    padding: 30px 0;
  }

  @media (max-width: 480px) {
    padding: 20px 0;
  }
`;

export const SuccessWhiteSubText = styled.p`
  margin: 0;
  width: 1260px;
  margin-top: 60px;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 43px;
  line-height: 58px;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;

  @media (max-width: 1200px) {
    width: 90%;
    font-size: 36px;
    line-height: 50px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 40px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    line-height: 35px;
  }
`;

export const SuccessWhiteSubTextStrong = styled.span`
  font-weight: 500;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 80px;
  gap: 30px;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 20px;
  }
`;

export const SuccessInput = styled.input`
  width: 326px;
  height: 88px;
  background: rgba(255, 255, 255, 0.08);
  border: 1.5035px solid #ffffff;
  border-radius: 75.1748px;
  padding: 0 36px;

  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 27px;
  line-height: 27px;
  text-transform: lowercase;

  color: #9c9c9c;

  @media (max-width: 768px) {
    width: 80%;
    height: 70px;
    font-size: 22px;
  }

  @media (max-width: 480px) {
    width: 50%;
    font-size: 18px;
    height: 60px;
  }
`;

export const DownloadButton = styled.div`
  margin: 0 auto;
  color: #fff;
  width: 395px;
  height: 87px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #ffc400;
  border-radius: 43.5px;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 33px;
  line-height: 18px;
  padding-left: 18px;
  color: #ffffff;
  margin-bottom: 77px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffc400;
    border-color: #ffc400;
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1024px) {
    width: 350px;
    height: 80px;
    font-size: 28px;
    justify-content: space-between;
    padding-right: 10px;
  }

  @media (max-width: 768px) {
    width: 50%;
    height: 70px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    height: 60px;
    font-size: 10px;
  }
`;

export const DownArrow = styled(IoIosArrowRoundDown)`
  background: transparent;
  border-radius: 43.5px;
  border: 1px solid #ffc300;
  width: 73px;
  height: 73px;
  margin-right: -4px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

export const CircleGradient = styled.div`
  position: absolute;
  width: 1440px;
  height: 1008px;
  left: 0px;
  bottom: 0;
  pointer-events: none;

  background: radial-gradient(
    60.49% 80.08% at 0.99% 100.5%,
    rgba(156, 40, 255, 0.13) 0%,
    rgba(156, 40, 255, 0) 100%
  );

  @media (max-width: 768px) {
    width: 1000px;
    height: 800px;
  }

  @media (max-width: 480px) {
    width: 700px;
    height: 600px;
  }
`;
