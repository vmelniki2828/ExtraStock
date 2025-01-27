import styled from 'styled-components';

export const HeaderMainMenu = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1320px;
  margin: 0 auto;
  padding-top: 36px;
`;

export const HeaderLogo = styled.img`
  width: 46.5px;
  height: 46.5px;
  transition: transform 0.3s ease; /* Smooth transition for scaling */
  cursor: pointer;
  &:hover {
    transform: scale(1.1); /* Increase the size by 10% on hover */
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
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  transform: rotate(0.39deg);
`;
