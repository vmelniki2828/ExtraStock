import styled from 'styled-components';

export const HeaderHeroContainer = styled.div`
  width: 1320px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0;

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 40px;
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

  @media (max-width: 1024px) {
    width: 320px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 220px;
    margin: 0 auto;
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
  line-height: 50px;
  color: #ffffff;
  margin-bottom: 30px;

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

  @media (max-width: 1024px) {
    margin: 0 auto;
  }
`;
