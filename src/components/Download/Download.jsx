import { useState } from 'react';
import {
  BenArrowRight,
  DownloadContainer,
  DownloadLeftConatiner,
  DownloadLeftMaintitle,
  DownloadLeftSubtitle,
  DownloadRightConatiner,
  FormContainer,
  InputField,
  PlayButton,
  StyledIframe,
  SubmitButton,
  Thumbnail,
  VideoContainer,
} from './Download.styled';
import imagePlaceholder from '../../images/imagePlaceholder.png';

const Download = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <DownloadContainer>
      <DownloadLeftConatiner>
        <DownloadLeftMaintitle>Секонд-хенд и СТОК оптом.</DownloadLeftMaintitle>
        <DownloadLeftSubtitle>
          Огромный выбор позиций. <br />
          Лучшее для Вашего магазина по низким ценам.
        </DownloadLeftSubtitle>
        <FormContainer>
          <InputField type="email" placeholder="Электронная почта:" />
          <InputField type="tel" placeholder="Мобильный телефон:" />
          <SubmitButton>
            Скачать прайс <BenArrowRight />
          </SubmitButton>
        </FormContainer>
      </DownloadLeftConatiner>
      <DownloadRightConatiner>
        <VideoContainer>
          {!isPlaying ? (
            <>
              <Thumbnail src={imagePlaceholder} alt="Видео превью" />
              <PlayButton onClick={() => setIsPlaying(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </PlayButton>
            </>
          ) : (
            <StyledIframe
              src="https://www.youtube.com/embed/JcCZmNKVj_0?autoplay=1"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </VideoContainer>
      </DownloadRightConatiner>
    </DownloadContainer>
  );
};

export default Download;
