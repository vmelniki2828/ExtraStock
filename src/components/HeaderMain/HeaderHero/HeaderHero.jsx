import {
    HeaderButton,
  HeaderHeroContainer,
  HeaderHeroContainerLeft,
  HeaderHeroContainerRight,
  HeaderHeroMainTitle,
  HeaderHeroSubTitle,
  HeaderImgTshorts,
  PurpleSpan,
  StrongSpan,
} from './HeaderHero.styled';
import header_tshorts from '../../../images/header_tshorts.png';

const HeaderHero = () => {
  return (
    <HeaderHeroContainer>
      <HeaderHeroContainerLeft>
        <HeaderHeroMainTitle>
          ОДЕЖДА СЕКОНД-ХЕНД{' '}
          <StrongSpan>
            ОПТОМ ОТ <PurpleSpan>1€/КГ</PurpleSpan>
          </StrongSpan>
        </HeaderHeroMainTitle>
        <HeaderHeroSubTitle>
          От ведущей английской фабрики <br />В наличии 40тонн на складе
          <br /> Еженедельные обновления
          <br /> Объем от 10кг
        </HeaderHeroSubTitle>
        <HeaderButton>замовити</HeaderButton>
      </HeaderHeroContainerLeft>
      <HeaderHeroContainerRight>
        <HeaderImgTshorts src={header_tshorts} alt={header_tshorts} />
      </HeaderHeroContainerRight>
    </HeaderHeroContainer>
  );
};

export default HeaderHero;
