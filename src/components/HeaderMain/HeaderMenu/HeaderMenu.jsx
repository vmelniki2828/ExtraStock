import {
  BurgerMenu,
  CloseBtn,
  CloseImg,
  HeaderImg,
  HeaderList,
  HeaderLogo,
  HeaderLogoMenu,
  HeaderMainMenu,
  HeaderSocialList,
  LogoContainer,
  LogoText,
  Menu,
  MenuItem,
} from './HeaderMenu.styled';
import logo from '../../../images/logo.png';
import { useState } from 'react';
import tiktok from '../../../images/headerTikTok.png';
import youtube from '../../../images/headerYouTube.png';
import viber from '../../../images/headerViber.png';
import tg from '../../../images/headerTg.png';
import inst from '../../../images/headerInst.png';
import { LogoSpan } from '../HeaderHero/HeaderHero.styled';

const HeaderMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderMainMenu>
        <LogoContainer>
          <HeaderLogo src={logo} alt="Logo" />
          <LogoText>
            EXTRA<LogoSpan>STOCK</LogoSpan>
          </LogoText>
        </LogoContainer>

        <HeaderSocialList>
          <HeaderImg src={tiktok} alt="tiktok" />
          <HeaderImg src={youtube} alt="youtube" />
          <HeaderImg src={viber} alt="viber" />
          <HeaderImg src={tg} alt="tg" />
          <HeaderImg src={inst} alt="inst" />
        </HeaderSocialList>

        <HeaderList>
          <li>КОНТАКТИ</li>
          <li>ПРАЙС</li>
        </HeaderList>

        <BurgerMenu
          onClick={() => {
            setMenuOpen(!menuOpen);
            console.log(menuOpen);
          }}
        />
        {menuOpen ? (
          <>
            <Menu>
              <MenuItem>Главная</MenuItem>
              <MenuItem>О нас</MenuItem>
              <MenuItem>Услуги</MenuItem>
              <MenuItem>Контакты</MenuItem>
              <HeaderLogoMenu src={logo} alt="Logo" />
              <CloseBtn
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                <CloseImg />
              </CloseBtn>
            </Menu>
          </>
        ) : (
          <></>
        )}
      </HeaderMainMenu>
    </>
  );
};

export default HeaderMenu;
