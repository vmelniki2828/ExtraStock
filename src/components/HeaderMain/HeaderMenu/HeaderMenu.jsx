import {
  BurgerMenu,
  CloseBtn,
  CloseImg,
  HeaderList,
  HeaderLogo,
  HeaderLogoMenu,
  HeaderMainMenu,
  Menu,
  MenuItem,
} from './HeaderMenu.styled';
import logo from '../../../images/logo.png';
import { useState } from 'react';

const HeaderMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderMainMenu>
        <HeaderLogo src={logo} alt="Logo" />
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
        <HeaderList>
          <li>ДОСТАВКА</li>
          <li>FAQ</li>
          <li>КОНТАКТИ</li>
          <li>ЗАМОВИТИ</li>
        </HeaderList>
      </HeaderMainMenu>
    </>
  );
};

export default HeaderMenu;
