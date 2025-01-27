import styled from 'styled-components';
import { IoIosArrowRoundForward } from 'react-icons/io';

export const HeaderHeroContainer = styled.div`
  width: 1320px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const HeaderHeroContainerLeft = styled.div``;

export const HeaderHeroMainTitle = styled.h1`
  margin: 0;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 46.4541px;
  line-height: 50px;

  color: #ffffff;
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
`;

export const HeaderHeroContainerRight = styled.div``;

export const HeaderImgTshorts = styled.img`
  margin-right: -50px;
`;

export const StrongSpan = styled.span`
  margin: 0;
  font-weight: 600;
  font-size: 46.4541px;
  line-height: 50px;
`;

export const PurpleSpan = styled.span`
  margin: 0;
  color: #9c28ff;
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
  transition: background-color 0.3s, color 0.3s, transform 0.3s, border 0.3s; /* Adding transition for smooth hover effect */

  &:hover {
    background-color: #ffc300; /* Change background color on hover */
    color: #333333; /* Change text color on hover */
    border-color: #ffc300; /* Change border color on hover */
    transform: scale(1.05); /* Slightly scale the button on hover */
  }
`;

export const ArrowImg = styled(IoIosArrowRoundForward)`
  background-color: #ffc300;
  width: 49px;
  height: 49px;
  border-radius: 32.5px;
  color: black;
`;
