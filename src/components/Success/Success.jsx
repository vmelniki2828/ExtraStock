import {
  DarkContainer,
  SuccessBlackText,
  SuccessContainer,
  SuccessMainTitle,
  SuccessPurple,
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
      </DarkContainer>
    </SuccessContainer>
  );
};

export default Success;
