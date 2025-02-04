import styled from 'styled-components';
import cat from '../images/cat.png'

export const MainBg = styled.div`
  background-image: url(${cat}); 
  background-size: 100% auto; 
  background-repeat: repeat-y; 
  background-position: top center; 
  width: 100%; 
  overflow:hidden;
`;

