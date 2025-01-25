import {
  HeaderHeroContainer,
  HeaderHeroContainerLeft,
  HeaderHeroContainerRight,
  HeaderHeroMainTitle,
  HeaderImgTshorts,
  PurpleSpan,
  StrongSpan,
} from './HeaderHero.styled';
import header_tshorts from '../../../images/header_tshorts.png';

const HeaderHero = () => {
  return (
    <HeaderHeroContainer>
      <HeaderHeroContainerLeft>
        <HeaderHeroMainTitle>ОДЕЖДА СЕКОНД-ХЕНД <StrongSpan>ОПТОМ ОТ <PurpleSpan>1€/КГ</PurpleSpan></StrongSpan></HeaderHeroMainTitle>
      </HeaderHeroContainerLeft>
      <HeaderHeroContainerRight>
        <HeaderImgTshorts src={header_tshorts} alt={header_tshorts} />
      </HeaderHeroContainerRight>
    </HeaderHeroContainer>
  );
};

export default HeaderHero;
