import {
    CircleGradient,
  DarkContainer,
  DownArrow,
  DownloadButton,
  InputContainer,
  SuccessBlackText,
  SuccessContainer,
  SuccessInput,
  SuccessMainTitle,
  SuccessPurple,
  SuccessWhiteSubText,
  SuccessWhiteSubTextStrong,
  SuccessWhiteText,
} from './Success.styled';

const Success = () => {
  return (
    <SuccessContainer>
      <SuccessMainTitle>
        Хотите открыть <SuccessPurple>успешный магазин</SuccessPurple>{' '}
        секонд-хенд?
      </SuccessMainTitle>
      <SuccessBlackText>Бесплатный чек-лист по</SuccessBlackText>
      <DarkContainer>
        <SuccessWhiteText>открытию магазина секонд-хенд</SuccessWhiteText>
        <SuccessWhiteSubText>
          100% рецепта успеха в бизнесе не существует,
          <SuccessWhiteSubTextStrong>
            {' '}
            но сократить до минимума риски, понять как правильно делать то или
            иное жизнено важно.
          </SuccessWhiteSubTextStrong>{' '}
          Мы бесплатно отправим Вам чек-лист открытия{' '}
          <SuccessWhiteSubTextStrong>
            Успешного магазина секонд-хенд
          </SuccessWhiteSubTextStrong>
          . В нем перечислен ряд вопросов которые мы обсуждаем на наших
          вебинирах.
        </SuccessWhiteSubText>
        <InputContainer>
          <SuccessInput placeholder="ИМЯ..." />
          <SuccessInput placeholder="ЕЛЕКТРОННАЯ ПОЧТА..." />
          <SuccessInput placeholder="НОМЕР ТЕЛЕФОНА..." />
        </InputContainer>
        <DownloadButton>
          Скачать чек-лист
          <DownArrow />
        </DownloadButton>
      </DarkContainer>
      <CircleGradient />
    </SuccessContainer>
  );
};

export default Success;
