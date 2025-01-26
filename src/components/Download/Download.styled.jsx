import styled from 'styled-components';

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

  color: #000000;
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

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: 43px;

  border: none; /* Убираем стандартную границу iframe */
`;
