import { MainBg } from './App.styled';
import Benefits from './Benefits/Benefits';
import Download from './Download/Download';
import HeaderMain from './HeaderMain/HeaderMain';
import Success from './Success/Success';

export const App = () => {
  return (
    <div>
      <HeaderMain />
      <MainBg>
        <Benefits />
        <Download />
        <Success />
      </MainBg>
    </div>
  );
};
