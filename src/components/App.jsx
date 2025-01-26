import { MainBg } from './App.styled';
import Benefits from './Benefits/Benefits';
import Download from './Download/Download';
import HeaderMain from './HeaderMain/HeaderMain';

export const App = () => {
  return (
    <div>
      <HeaderMain />
      <MainBg>
        <Benefits />
        <Download />
      </MainBg>
    </div>
  );
};
