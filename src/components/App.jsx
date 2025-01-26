import { MainBg } from './App.styled';
import Benefits from './Benefits/Benefits';
import Download from './Download/Download';
import FAQ from './FAQ/FAQ';
import HeaderMain from './HeaderMain/HeaderMain';
import Social from './Social/Social';
import Success from './Success/Success';

export const App = () => {
  return (
    <div>
      <HeaderMain />
      <MainBg>
        <Benefits />
        <Download />
        <Success />
        <FAQ/>
        <Social />
      </MainBg>
    </div>
  );
};
