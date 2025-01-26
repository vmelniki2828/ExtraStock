import styled from 'styled-components';
import { IoArrowForwardOutline } from "react-icons/io5";

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

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: 43px;

  border: none; /* Убираем стандартную границу iframe */
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
  }
`;

export const BenArrowRight = styled(IoArrowForwardOutline)`
    width:22px;
    height:22px;
`