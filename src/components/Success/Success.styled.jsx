import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 107px;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    padding-top: 100px;
    margin-bottom: 100px;
  }

  @media (max-width: 768px) {
    padding-top: 54px;
    margin-bottom: 80px;
  }

  @media (max-width: 770px) {
    padding-top: 27px;
    margin-bottom: 34px;
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
    font-size: 43.4px;
    line-height: 39px;
    width: 691px;
  }

  @media (max-width: 770px) {
    font-size: 18.6667px;
    line-height: 17px;
    width: 297px;
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
  padding: 0 0 100px 0;

  @media (max-width: 1200px) {
    padding: 0 0 54px 0;
  }

  @media (max-width: 770px) {
    padding: 0 0 22px 0;
  }
`;

export const SuccessWhiteSubText = styled.p`
  margin: 0 0 112px 0;
  width: 1252px;
  margin-top: 60px;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 250;
  font-size: 35px;
  line-height: 65px;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;

  @media (max-width: 1200px) {
    width: 646.87px;

    margin: 55px 0 55px 0;

    font-size: 18.0833px;
    line-height: 34px;
  }

  @media (max-width: 770px) {
    width: 278.22px;

    margin: 24px 0 24px 0;

    font-size: 7.77778px;
    line-height: 14px;
  }
`;

export const DownloadYellowText = styled.h3`
  margin: 0;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 84px;
  line-height: 75px;
  text-align: center;
  text-transform: uppercase;

  color: #ffc400;

  @media (max-width: 1200px) {
    font-size: 43.4px;
    line-height: 39px;

    margin-bottom: 31px;
  }
  @media (max-width: 770px) {
    font-size: 18.6667px;
    line-height: 17px;

    margin-bottom: 13px;
  }
`;

export const SuccessWhiteSubTextStrong = styled.span`
  font-weight: 500;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 30px;

  @media (max-width: 1200px) {
    gap: 6px;
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

  @media (max-width: 1200px) {
    width: 206px;
    height: 46px;
    font-size: 13.95px;
    line-height: 14px;
  }

  @media (max-width: 770px) {
    font-size: 6px;
    line-height: 6px;

    padding: 0;

    width: 88px;
    height: 20px;
  }
`;

export const DownloadButton = styled.button`
  padding: 0 7px 0 18px;
  margin: 0 auto;
  color: #fff;
  width: 370px;
  height: 85px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ffc400;
  border-radius: 43.5px;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: transparent;
  &:hover {
    background-color: #ffc400;
    border-color: #ffc400;
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1200px) {
    width: 213px;
    height: 44px;

    font-size: 17.05px;
    line-height: 9px;

    justify-content: space-between;
    padding-right: 10px;
  }

  @media (max-width: 770px) {
    width: 91px;
    height: 19px;

    font-size: 7.33333px;
    line-height: 4px;
    padding: 0 7px 0 6px;
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

export const DownloadButtonArrow = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 73px;
  height: 73px;
  background: linear-gradient(
    148.15deg,
    rgba(2, 1, 4, 0.66) -255.09%,
    rgba(255, 196, 0, 0) 88.45%
  );
  border: 1px solid #ffc400;
  border-radius: 43.5px;

  @media (max-width: 1200px) {
    width: 38px;
    height: 38px;
    margin: -5px;
  }
  @media (max-width: 770px) {
    width: 16px;
    height: 16px;
    margin: -5px;
  }
`;

export const ImgArrow = styled.img`
  width: 26px;
  @media (max-width: 1200px) {
    width: 13px;
  }
  @media (max-width: 770px) {
    width: 5px;
  }
`;
