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
  HeaderSocialListMob,
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
        <BurgerMenu
          onClick={() => {
            setMenuOpen(!menuOpen);
            console.log(menuOpen);
          }}
        />

        <HeaderSocialList>
          <a href="https://www.tiktok.com/@extrastock.com.ua?_t=ZM-8tWchnCRHXy&_r=1">
            <HeaderImg src={tiktok} alt="tiktok" />
          </a>
          <a href="https://youtube.com/@extrastock_com_ua?si=AFcN_XUCreTIZsyI">
            <HeaderImg src={youtube} alt="youtube" />
          </a>
          <a href="https://invite.viber.com/?g2=AQBLlxe5ksgOhkh9pYS%2FMIgVWUJGQcvTlsOlwp9Aj0iBb796MKW48I1LOPbxIWDp">
            <HeaderImg src={viber} alt="viber" />
          </a>
          <a href="https://t.me/extrastock">
            <HeaderImg src={tg} alt="tg" />
          </a>
          <a href="https://www.instagram.com/extrastock.com.ua?igsh=MTZvcDI2em94ampneg==">
            <HeaderImg src={inst} alt="inst" />
          </a>
        </HeaderSocialList>

        <HeaderList>
          <a
            href="#social"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <li>КОНТАКТИ</li>
          </a>
          <a href="#price" style={{ textDecoration: 'none', color: 'inherit' }}>
            <li>ПРАЙС</li>
          </a>
        </HeaderList>

        {menuOpen ? (
          <>
            <Menu>
              <a
                href="#social"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  width: '100%',
                }}
                onClick={() => setMenuOpen(false)}
              >
                <MenuItem>КОНТАКТИ</MenuItem>
              </a>
              <a
                href="#price"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  width: '100%',
                }}
                onClick={() => setMenuOpen(false)}
              >
                <MenuItem>ПРАЙС</MenuItem>
              </a>
              <HeaderLogoMenu src={logo} alt="Logo" />
              <HeaderSocialListMob>
                <a href="https://www.tiktok.com/@extrastock.com.ua?_t=ZM-8tWchnCRHXy&_r=1">
                  <HeaderImg src={tiktok} alt="tiktok" />
                </a>
                <a href="https://youtube.com/@extrastock_com_ua?si=AFcN_XUCreTIZsyI">
                  <HeaderImg src={youtube} alt="youtube" />
                </a>
                <a href="https://invite.viber.com/?g2=AQBLlxe5ksgOhkh9pYS%2FMIgVWUJGQcvTlsOlwp9Aj0iBb796MKW48I1LOPbxIWDp">
                  <HeaderImg src={viber} alt="viber" />
                </a>
                <a href="https://t.me/extrastock">
                  <HeaderImg src={tg} alt="tg" />
                </a>
                <a href="https://www.instagram.com/extrastock.com.ua?igsh=MTZvcDI2em94ampneg==">
                  <HeaderImg src={inst} alt="inst" />
                </a>
              </HeaderSocialListMob>
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
