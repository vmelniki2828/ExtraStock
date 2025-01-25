import HeaderHero from './HeaderHero/HeaderHero';
import { HeaderMainContainer } from './HeaderMain.styled';
import HeaderMenu from './HeaderMenu/HeaderMenu';

const HeaderMain = () => {
  return (
    <HeaderMainContainer>
      <HeaderMenu />
      <HeaderHero />
    </HeaderMainContainer>
  );
};

export default HeaderMain;
