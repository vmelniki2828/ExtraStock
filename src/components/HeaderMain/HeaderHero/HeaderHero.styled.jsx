import styled from 'styled-components';

export const HeaderHeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  padding: 25px;

  @media (max-width: 1200px) {
    padding: 80px;
  }
  @media (max-width: 770px) {
    padding: 55px;
  }
`;

export const HeaderInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
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

  @media (max-width: 1200px) {
    font-size: 9.3px;
    line-height: 16px;

    width: 220px;
  }

  @media (max-width: 770px) {
    width: 95px;
    height: 23px;
  }
`;

export const HeaderHeroContainerLeft = styled.div`
  @media (min-width: 1400px) {
    width: 650px;
  }
  @media (min-width: 1024px) {
    width: 550px;
  }
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

  @media (max-width: 1200px) {
    font-size: 24.0013px;
    line-height: 26px;
  }

  @media (max-width: 700px) {
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

  @media (max-width: 1200px) {
    width: 100%;

    font-size: 18.0833px;
    line-height: 26px;
  }

  @media (max-width: 770px) {
    font-size: 7.77778px;
    line-height: 11px;

    margin-bottom: 30px;
  }
`;

export const LogoSpan = styled.span`
  color: #ae4fff;
`;

export const HeaderHeroContainerRight = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

export const HeaderImgTshorts = styled.img`
  margin-right: -50px;

  @media (max-width: 1400px) {
    margin-right: 0;
    width: 400px;
  }

  @media (max-width: 770px) {
    width: 180px;
  }
`;

export const StrongSpan = styled.span`
  font-weight: 600;
  font-size: 46px;
  line-height: 50px;

  @media (max-width: 1200px) {
    font-size: 24.0013px;
    line-height: 26px;
  }

  @media (max-width: 770px) {
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

  @media (max-width: 1200px) {
    padding: 24px 36px;
    gap: 8px;
    width: 170px;
    height: 34px;
    font-size: 9px;
    line-height: 14px;
  }
  @media (max-width: 770px) {
    padding: 20px 28px;
    width: 100px;
    height: 7px;
    font-size: 10px;
    line-height: 11px;
  }
`;
