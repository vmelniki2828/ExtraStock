import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

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
