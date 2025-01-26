import { MainBg } from './App.styled';
import Benefits from './Benefits/Benefits';
import HeaderMain from './HeaderMain/HeaderMain';

export const App = () => {
  return (
    <div>
      <HeaderMain />
      <MainBg>
        <Benefits />
      </MainBg>
    </div>
  );
};
