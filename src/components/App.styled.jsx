import styled from 'styled-components';
import long_bd from '../images/long_bg.png'

export const MainBg = styled.div`
  background-image: url(${long_bd}); // Укажите путь к картинке
  background-size: cover; // Картинка будет покрывать весь фон
  background-repeat: no-repeat; // Избегает повторения изображения
  background-position: center; // Центрирует картинку
  width: 100%; // Занимает всю ширину окна
  height: 100%; // Занимает всю высоту окна
`;
