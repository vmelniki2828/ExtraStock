import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

export const CloseImg = styled(IoClose)``;

export const HeaderMainMenu = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1320px;
  margin: 0 auto;
  padding: 36px 30px 0;

  @media (max-width: 1024px) {
    padding-top: 24px;
    max-width: 960px;
    margin: 0 auto;
    flex-direction: row;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: space-between;
    padding-top: 16px;
    max-width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }

  @media (max-width: 480px) {
    align-items: center;
    padding-top: 12px;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export const HeaderSocialList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export const HeaderImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15.4px;
`;

export const LogoText = styled.p`
  margin: 0;
  font-family: 'Alegre Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 53px;
  line-height: 61px;
  color: #ffffff;
`;

export const BurgerMenu = styled(GiHamburgerMenu)`
  display: none;
  @media (max-width: 768px) {
    color: #fff;
    display: block;
    width: 40px;
    height: 40px; /* Slightly smaller logo on medium screens */
  }

  @media (max-width: 480px) {
    display: block;
    color: #fff;
    width: 50px;
    height: 50px;
  }
`;

export const HeaderLogo = styled.img`
  width: 46.5px;
  height: 46.5px;
  transition: transform 0.3s ease; /* Smooth transition for scaling */
  cursor: pointer;

  &:hover {
    transform: scale(1.1); /* Increase the size by 10% on hover */
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px; /* Slightly smaller logo on medium screens */
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

export const HeaderLogoMenu = styled.img`
  position: absolute;
  top: 12px;
  left: 8px;
  width: 50px;
  height: 50px;
`;

export const HeaderList = styled.ul`
  display: flex;
  gap: 145px;
  padding: 0;
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

  @media (max-width: 1024px) {
    gap: 100px; /* Reduce gap for medium screens */
    font-size: 20px; /* Slightly smaller font */
    display: flex;
  }

  @media (max-width: 768px) {
    display: none;
  }

  // @media (max-width: 480px) {
  //   gap: 12px; /* Further reduce gap for smaller screens */
  //   font-size: 16px; /* Smallest font size */
  //   align-items: center; /* Center align for small screens */
  // }
`;

export const Menu = styled.ul`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    width: 100%;
    background: #fff;
    margin-left: -16px;
    list-style: none;
    padding: 70px 0 0 0;
    border-radius: 0 0 10px 10px;
    background: rgb(155, 124, 2);
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
  background-color: #ffcc00; /* Желтый цвет */
  border: none;
  border-radius: 50%; /* Круглая форма */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Тень для визуального объема */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1); /* Легкое увеличение при наведении */
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
  }

  svg {
    color: #fff; /* Цвет иконки внутри кнопки */
    font-size: 1.5rem;
  }
`;
