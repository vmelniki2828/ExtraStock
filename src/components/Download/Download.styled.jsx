import styled from 'styled-components';
import { IoArrowForwardOutline } from 'react-icons/io5';

export const DownloadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 68px;
  padding-top: 120px;
`;

export const DownloadLeftConatiner = styled.div``;

export const DownloadLeftMaintitle = styled.h4`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  line-height: 56px;
  width: 574px;
  margin-bottom: 30px;

  color: #000000;
`;

export const DownloadLeftSubtitle = styled.h4`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  margin: 0 0 21px 0;
  color: #7a7a7a;
`;

export const DownloadRightConatiner = styled.div``;

export const VideoContainer = styled.div`
  position: relative;
  width: 564.88px;
  height: 557px;
  max-width: 560px; /* Максимальная ширина видео */
  aspect-ratio: 16 / 9; /* Соотношение сторон для видео */
  border: 1px solid #9c28ff; /* Цвет и толщина бордера */
  border-radius: 43px;
  overflow: hidden; /* Обрезает содержимое, чтобы бордер выглядел аккуратно */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Тень вокруг бордера */
  padding: 13px;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Масштабирование картинки */
`;

// Кнопка Play
export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000000; /* Полупрозрачный чёрный фон */
  border-radius: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;
  width: 116px;
  height: 116px;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1); /* Увеличение кнопки при наведении */
  }

  svg {
    width: 70px;
    height: 70px;
    fill: white; /* Белая иконка Play */
  }
`;

// Iframe с видео
export const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 30px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  max-width: 400px;
`;

export const InputField = styled.input`
  width: 428px;
  padding: 12px 16px;
  background: #ffffff;
  border: 1px solid #868686;
  border-radius: 15px;
  font-size: 16px;
  font-family: 'DM Sans', sans-serif;
  color: #666;

  &:focus {
    outline: none;
    border-color: #ffc107;
  }

  &::placeholder {
    color: #c9c9c9;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 231px;
  height: 66px;
  padding: 12px 36px;
  background: #ffc400;
  color: #000;
  font-weight: bold;
  font-size: 16px;
  font-family: 'Arial', sans-serif;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 14px;

  &:hover {
    background-color: #e6a800;
    transform: scale(1.05); /* Subtle scaling on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adding a shadow to lift the button */
  }
`;

export const BenArrowRight = styled(IoArrowForwardOutline)`
  width: 22px;
  height: 22px;
  transition: transform 0.3s ease; /* Smooth transition for the arrow movement */

  ${SubmitButton}:hover & {
    transform: translateX(
      8px
    ); /* Arrow moves slightly to the right when button is hovered */
  }
`;
