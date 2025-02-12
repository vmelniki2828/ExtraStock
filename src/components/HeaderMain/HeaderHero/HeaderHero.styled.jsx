import styled from 'styled-components';

export const HeaderHeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 25px 0;
  width: 100%;
`;

export const HeaderInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;

  @media (max-width: 744px) {
    gap: 5.17px;
    margin-bottom: 15.5px;
  }

  @media (max-width: 440px) {
    gap: 2.2px;
    margin-bottom: 6.67px;
  }
`;

export const HeaderInput = styled.input`
  width: 390px;
  height: 40px;
  padding: 0 22px 0 16px;
  background: rgba(0, 0, 0, 0.36);
  border: 1px solid #ffc300;
  border-radius: 41px;

  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  margin: 0;

  color: #c9c9c9;

  @media (max-width: 744px) {
    width: 212.86px;
    height: 20.67px;
    padding: 0 0 0 8.27px;
    font-size: 9.3px;
    line-height: 15.5px;
  }

  @media (max-width: 440px) {
    width: 91.5px;
    height: 8.89px;
    padding: 0 0 0 3.56px;
    font-size: 4px;
    line-height: 6.7px;
  }
`;

export const HeaderHeroContainerLeft = styled.div`
  max-width: 500px;
  @media (max-width: 744px) {
    width: 343.07px;
  }

  @media (max-width: 440px) {
    width: 147.56px;
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

  @media (max-width: 744px) {
    font-size: 24.0013px;
    line-height: 26px;
  }

  @media (max-width: 440px) {
    font-size: 10.3231px;
    line-height: 11px;
  }
`;

export const HeaderHeroSubTitle = styled.p`
  margin: 0;
  width: 664px;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 41px;
  line-height: 50px;
  color: #ffffff;
  margin-bottom: 30px;

  @media (max-width: 744px) {
    font-size: 18.0833px;
    line-height: 26px;
    margin-bottom: 14.9px;
  }

  @media (max-width: 440px) {
    font-size: 7.77778px;
    line-height: 11px;
    margin-bottom: 6px;
  }
`;

export const LogoSpan = styled.span`
  color: #ae4fff;
`;

export const HeaderImgTshorts = styled.img`
  margin-right: -50px;
  width: 702px;

  @media (max-width: 744px) {
    margin-right: 0;
    width: 362.7px;
  }

  @media (max-width: 440px) {
    width: 156px;
  }
`;

export const StrongSpan = styled.span`
  font-weight: 600;
  font-size: 46px;
  line-height: 50px;

  @media (max-width: 744px) {
    font-size: 24.0013px;
    line-height: 26px;
  }

  @media (max-width: 440px) {
    font-size: 10.3231px;
    line-height: 11px;
  }
`;

export const PurpleSpan = styled.span`
  color: #9c28ff;
`;

export const HeaderButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 36px;
  gap: 8px;

  width: 231px;
  height: 66px;

  background: #ffc400;
  border-radius: 40px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  border: none;

  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
  margin: 0;

  color: #000000;

  @media (max-width: 744px) {
    padding: 12.4px 18.6px;
    gap: 4.13px;
    width: 119.63px;
    height: 34.8px;
    border-radius: 20.67px;
    font-size: 9.3px;
    line-height: 9px;
  }

  @media (max-width: 440px) {
    padding: 5.33px 8px;
    gap: 1.78px;
    width: 51.78px;
    height: 14.67px;
    border-radius: 8.89px;
    font-size: 4px;
    line-height: 4px;
  }
`;

export const HeaderButtonArrow = styled.img`
  width: 15px;
  height: 15px;
  @media (max-width: 744px) {
    width: 9.3px;
    height: 9.3px;
  }

  @media (max-width: 440px) {
    width: 4px;
    height: 4px;
  }
`;
