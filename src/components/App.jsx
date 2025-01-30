import { MainBg } from './App.styled';
import Benefits from './Benefits/Benefits';
import Delivery from './Delivery/Delivery';
import Download from './Download/Download';
import FAQ from './FAQ/FAQ';
import HeaderMain from './HeaderMain/HeaderMain';
import Social from './Social/Social';
import Success from './Success/Success';

export const App = () => {
  return (
    <div>
      <HeaderMain />
      <Benefits />
      <MainBg>
        <Download />
        <Success />
        <Delivery />
        <FAQ />
        <Social />
      </MainBg>
    </div>
  );
};
