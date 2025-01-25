import { HeaderList, HeaderLogo, HeaderMainMenu } from './HeaderMenu.styled';
import logo from '../../../images/logo.png';

const HeaderMenu = () => {
  return (
    <HeaderMainMenu>
      <HeaderLogo src={logo} alt='Logo'/>
      <HeaderList>
        <li>ДОСТАВКА</li>
        <li>FAQ</li>
        <li>КОНТАКТИ</li>
        <li>ЗАМОВИТИ</li>
      </HeaderList>
    </HeaderMainMenu>
  );
};

export default HeaderMenu;
