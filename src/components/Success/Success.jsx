import {
  CircleGradient,
  DarkContainer,
  DownloadButton,
  DownloadButtonArrow,
  DownloadYellowText,
  InputContainer,
  SuccessBlackText,
  SuccessContainer,
  SuccessInput,
  SuccessWhiteSubText,
  SuccessWhiteText,
} from './Success.styled';
import whiteArrow from '../../images/whiteArrow.png';

const Success = () => {
  return (
    <SuccessContainer>
      <SuccessBlackText>Безкоштовна допомога</SuccessBlackText>
      <DarkContainer>
        <SuccessWhiteText>
          по торгівлі онлайн та магазину секонд-хенд.
        </SuccessWhiteText>
        <SuccessWhiteSubText>
          Зрозуміти як правильно зробити, і На що дуже важливо звернути увагу
          при торгівлі секонд-хенд і Сток. Ми безкоштовно відповімо на всі Ваші
          питання і підскажемо в якому напрямку потрібно рухатись при продажі
          для успішного розвитку та росту саме вашого магазину.
        </SuccessWhiteSubText>
        <DownloadYellowText>Замовити консультацію</DownloadYellowText>
        <InputContainer>
          <SuccessInput placeholder="ім’я..." />
          <SuccessInput placeholder="номер телефону..." />
          <DownloadButton>
            Надіслати запит
            <DownloadButtonArrow>
              <img src={whiteArrow} alt="dsad" />
            </DownloadButtonArrow>
          </DownloadButton>
        </InputContainer>
      </DarkContainer>
      <CircleGradient />
    </SuccessContainer>
  );
};

export default Success;
