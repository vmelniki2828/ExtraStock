import styled from 'styled-components';
import { IoArrowForwardOutline } from 'react-icons/io5';

export const DownloadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 120px;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 40px;
    padding-top: 80px;
  }

  @media (max-width: 768px) {
    gap: 30px;
    padding-top: 60px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    padding-top: 40px;
  }
`;

export const DownloadLeftConatiner = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;

export const DownloadLeftMaintitle = styled.h4`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  line-height: 56px;
  width: 574px;
  margin-bottom: 30px;
  color: #000000;

  @media (max-width: 1024px) {
    font-size: 48px;
    line-height: 50px;
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 20px;
  }
`;

export const DownloadLeftSubtitle = styled.h4`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  margin: 0 0 21px 0;
  color: #7a7a7a;

  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 28px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 16px;
  }
`;

export const DownloadRightConatiner = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 564.88px;
  height: 557px;
  max-width: 560px;
  aspect-ratio: 16 / 9;
  border: 1px solid #9c28ff;
  border-radius: 43px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  padding: 13px;

  @media (max-width: 1024px) {
    width: 80%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    padding: 8px;
    border-radius: 20px;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 1024px) {
    border-radius: 43px;
  }

  @media (max-width: 768px) {
    border-radius: 43px;
  }

  @media (max-width: 480px) {
    border-radius: 20px;
  }
`;

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000000;
  border-radius: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;
  width: 116px;
  height: 116px;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }

  svg {
    width: 70px;
    height: 70px;
    fill: white;
  }

  @media (max-width: 768px) {
    width: 90px;
    height: 90px;

    svg {
      width: 50px;
      height: 50px;
    }
  }

  @media (max-width: 480px) {
    width: 70px;
    height: 70px;

    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 30px;

  @media (max-width: 480px) {
    border-radius: 15px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  max-width: 400px;

  @media (max-width: 1200px) {
    align-items: center;
  }

  @media (max-width: 480px) {
    max-width: 80%;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 12px;
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
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 56px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 48px;
    font-size: 12px;
  }
`;

export const BenArrowRight = styled(IoArrowForwardOutline)`
  width: 22px;
  height: 22px;
  transition: transform 0.3s ease;

  ${SubmitButton}:hover & {
    transform: translateX(8px);
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;
