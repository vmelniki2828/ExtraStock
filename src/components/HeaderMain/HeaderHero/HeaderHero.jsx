import {
  HeaderButton,
  HeaderHeroContainer,
  HeaderHeroContainerLeft,
  HeaderHeroContainerRight,
  HeaderHeroMainTitle,
  HeaderHeroSubTitle,
  HeaderImgTshorts,
  HeaderInput,
  HeaderInputContainer,
  PurpleSpan,
  StrongSpan,
} from './HeaderHero.styled';
import header_tshorts from '../../../images/header_tshorts.png';
import headerArrow from '../../../images/headerArrow.png';

const HeaderHero = () => {
  return (
    <HeaderHeroContainer>
      <HeaderHeroContainerLeft>
        <HeaderHeroMainTitle>
          Секонд-хенд і сток оптом
          <br />
          <StrongSpan>
            <PurpleSpan>від 1€/КГ</PurpleSpan>
          </StrongSpan>
        </HeaderHeroMainTitle>
        <HeaderHeroSubTitle>
          Від кращих фабрик! <br />
          Щотижневе оновлення!
        </HeaderHeroSubTitle>
        <HeaderInputContainer>
          <HeaderInput placeholder="Ім’я:" />
          <HeaderInput placeholder="Мобільний телефон:" />
        </HeaderInputContainer>

        <HeaderButton>
          Скачать прайс <img src={headerArrow} alt="headerArrow" />
        </HeaderButton>
      </HeaderHeroContainerLeft>
      <HeaderHeroContainerRight>
        <HeaderImgTshorts src={header_tshorts} alt={header_tshorts} />
      </HeaderHeroContainerRight>
    </HeaderHeroContainer>
  );
};

export default HeaderHero;
