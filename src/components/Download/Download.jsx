import {
  BenArrowRight,
  DownloadContainer,
  DownloadLeftConatiner,
  DownloadLeftMaintitle,
  DownloadLeftSubtitle,
  DownloadRightConatiner,
  FormContainer,
  InputField,
  StyledIframe,
  SubmitButton,
  VideoContainer,
} from './Download.styled';

const Download = () => {
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
          <StyledIframe
            src={`https://www.youtube.com/embed/JcCZmNKVj_0`} // Используйте "embed" вместо "watch"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </DownloadRightConatiner>
    </DownloadContainer>
  );
};

export default Download;
