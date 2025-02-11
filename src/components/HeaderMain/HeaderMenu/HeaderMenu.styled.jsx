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

  @media (max-width: 1200px) {
    padding-top: 24px;
    max-width: 960px;
    margin: 0 auto;
    flex-direction: row;
  }

  @media (max-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 16px;
    max-width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const HeaderSocialList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;

  @media (min-width: 1200px) {
    padding-top: 0;
    gap: 50px;
  }
  @media (min-width: 700px) {
    padding-top: 0;
    gap: 20px;
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
  transform: scale(1); /* Начальный размер */
  background-color: transparent;
  transition: transform 0.3s ease-in-out; /* Плавность */
  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 1200px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 700px) {
    width: 9px;
    height: 9px;
  }
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

  @media (max-width: 1200px) {
    font-family: 'Alegre Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 27.3833px;
    line-height: 32px;
  }
  @media (max-width: 700px) {
    font-size: 11.7778px;
    line-height: 14px;
  }
`;

// export const BurgerMenu = styled(GiHamburgerMenu)`
//   display: none;
//   @media (max-width: 768px) {
//     color: #fff;
//     display: block;
//     width: 40px;
//     height: 40px; /* Slightly smaller logo on medium screens */
//     cursor: pointer;
//   }

//   @media (max-width: 480px) {
//     display: block;
//     color: #fff;
//     width: 50px;
//     height: 50px;
//     cursor: pointer;
//   }
// `;

export const HeaderLogo = styled.img`
  width: 46.5px;
  height: 46.5px;
  transition: transform 0.3s ease; /* Smooth transition for scaling */
  cursor: pointer;

  &:hover {
    transform: scale(1.1); /* Increase the size by 10% on hover */
  }

  @media (max-width: 1200px) {
    width: 24px;
    height: 24px;
  }
  @media (max-width: 700px) {
    width: 10px;
    height: 10px;
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
  gap: 145px;
  padding-right: 40px;
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

  @media (max-width: 1200px) {
    gap: 100px;
    display: flex;

    font-size: 11.3667px;
    line-height: 14px;
  }

  @media (max-width: 700px) {
    font-size: 4.88889px;
    line-height: 6px;
    gap: 30px;
  }
`;

export const Menu = styled.ul`
  display: none;
  @media (max-width: 768px) {
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
