import {
  BigContainer,
  ContainerImg,
  DownloadButton,
  DownloadContainer,
  DownloadInput,
  DownloadInputContainer,
  DownloadMainSubTitle,
  DownloadMainTitle,
  DownloadPurpleSpan,
  MainBlockContainer,
  SmallCont,
  SmallContainers,
  SmallTextBox,
  TextBox,
} from './Download.styled';
import vp from '../../images/imagePlaceholder.png';
import headerArrow from '../../images/headerArrow.png';

const Download = () => {
  return (
    <DownloadContainer id="price">
      <DownloadMainTitle>Секонд-хенд і Сток оптом.</DownloadMainTitle>
      <DownloadMainSubTitle>
        Великий вибір товару.{' '}
        <DownloadPurpleSpan>
          Найкращі ціни для торгівлі в онлайн та магазині.{' '}
        </DownloadPurpleSpan>
        Отримаєте саме той товар
        <DownloadPurpleSpan>який Ви швидко продасте.</DownloadPurpleSpan>
      </DownloadMainSubTitle>

      <MainBlockContainer>
        <BigContainer>
          <ContainerImg src={vp} alt="dsad" />
          <TextBox>
            <strong>СОРТОВКА ОПТОМ:</strong>
            <p>
              Кросівки. Жилетка дута. Спорт штани. Фліс. Худі. Футболки. Шорти.
              Куртка. Роба. Карго. Та багато іншого
            </p>
          </TextBox>
        </BigContainer>
        <SmallContainers>
          <SmallCont>
            <ContainerImg src={vp} alt="dsad" />
            <SmallTextBox>
              <strong>Сток Оптом:</strong>
              <p>Дорослий. Дитячий. Взуття. Домашні вжиток</p>
            </SmallTextBox>
          </SmallCont>
          <SmallCont>
            <ContainerImg src={vp} alt="dsad" />
            <SmallTextBox>
              <strong>Оригінал Оптом:</strong>
              <p>Актуальні бренди, останні колекції, висока якість</p>
            </SmallTextBox>
          </SmallCont>
        </SmallContainers>
      </MainBlockContainer>

      <DownloadInputContainer>
        <DownloadInput placeholder="Ім’я:" />
        <DownloadInput placeholder="Мобільний телефон:" />
      </DownloadInputContainer>

      <DownloadButton>
        Скачать прайс <img src={headerArrow} alt="headerArrow" />
      </DownloadButton>
    </DownloadContainer>
  );
};

export default Download;
