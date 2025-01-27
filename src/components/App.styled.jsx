import styled from 'styled-components';
import cat from '../images/cat.png'

export const MainBg = styled.div`
  background-image: url(${cat}); /* Укажите путь к картинке */
  background-size: 100% auto; /* Растягивает картинку на всю ширину, а высота подстраивается */
  background-repeat: repeat-y; /* Повтор по вертикали */
  background-position: top center; /* Центрирует картинку горизонтально, привязывая к верху */
  width: 100%; /* Занимает всю ширину окна */
  height: 100%; /* Занимает всю высоту окна */
  overflow:hidden;
`;

