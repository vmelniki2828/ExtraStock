import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

export const CloseImg = styled(IoClose)``;

export const HeaderMainMenu = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 36px 30px 0;

  @media (max-width: 1440px) {
    max-width: 1200px;
    padding: 36px 24px 0;
  }

  @media (max-width: 744px) {
    max-width: 744px;
    padding: 24px 16px 0;
  }

  @media (max-width: 440px) {
    max-width: 100%;
    padding: 16px 16px 0 16px;
  }
`;

export const HeaderSocialList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 404px;

  @media (max-width: 1440px) {
    width: 304px;
  }

  @media (max-width: 744px) {
    width: 208px;
  }

  @media (max-width: 440px) {
    width: 140px;
  }
`;

export const HeaderSocialListMob = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 30px 0;
`;

export const HeaderImg = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transform: scale(1);
  background-color: transparent;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 1440px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 744px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 440px) {
    width: 15px;
    height: 15px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  @media (max-width: 1440px) {
    gap: 12px;
  }

  @media (max-width: 744px) {
    gap: 8px;
  }

  @media (max-width: 440px) {
    gap: 5px;
  }
`;

export const LogoText = styled.p`
  margin: 0;
  font-family: 'Alegre Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 53px;
  line-height: 61px;
  color: #ffffff;

  @media (max-width: 1440px) {
    font-size: 40px;
    line-height: 48px;
  }

  @media (max-width: 744px) {
    font-size: 27px;
    line-height: 32px;
  }

  @media (max-width: 440px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const HeaderLogo = styled.img`
  width: 46px;
  height: 46px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1440px) {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 744px) {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 440px) {
    width: 12px;
    height: 12px;
  }
`;

export const HeaderLogoMenu = styled.img`
  position: absolute;
  top: 12px;
  left: 30px;
  width: 50px;
  height: 50px;
`;

export const HeaderList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 447px;
  padding: 0 40px 0 0;
  list-style: none;

  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 28px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  transform: rotate(0.39deg);

  li {
    cursor: pointer;
  }

  @media (max-width: 1440px) {
    font-size: 18px;
    line-height: 22px;
    width: 350px;
    padding: 0;
  }

  @media (max-width: 744px) {
    font-size: 12px;
    line-height: 16px;
    width: 230px;
    padding: 0;
  }

  @media (max-width: 440px) {
    font-size: 6px;
    line-height: 8px;
    width: 100px;
    padding: 0;
  }
`;

export const Menu = styled.ul`
  display: none;

  @media (max-width: 744px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    margin: 0;
    width: 100%;
    margin-left: -16px;
    list-style: none;
    padding: 70px 0 0 0;
    border-radius: 0 0 10px 10px;
    background: rgb(65, 56, 18);
  }
`;

export const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  border-top: 1px solid black;
  background: #fff;
  cursor: pointer;

  &:hover {
    background-color: #ffcc00;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  background-color: #ffcc00;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
  }

  svg {
    color: #fff;
    font-size: 1.5rem;
  }
`;
