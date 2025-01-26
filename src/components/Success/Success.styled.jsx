import styled from 'styled-components';
import { IoIosArrowRoundDown } from 'react-icons/io';

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  margin-bottom: 120px;
  position: relative;
`;

export const SuccessMainTitle = styled.h3`
  width: 690px;
  text-align: center;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 43px;
  line-height: 58px;
  margin: 0 0 60px 0;
  text-transform: uppercase;
  color: #000000;
`;

export const SuccessPurple = styled.span`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 58px;
  text-transform: uppercase;
  color: #9c28ff;
`;

export const SuccessBlackText = styled.p`
  width: 1338px;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 84px;
  line-height: 75px;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  color: #000000;
`;

export const SuccessWhiteText = styled.p`
  width: 1338px;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 84px;
  line-height: 75px;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  color: #ffffff;
`;

export const DarkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
`;

export const SuccessWhiteSubText = styled.p`
  margin: 0;
  width: 1260px;
  margin-top: 60px;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 43px;
  line-height: 58px;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
`;

export const SuccessWhiteSubTextStrong = styled.span`
  font-weight: 500;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 80px;
  gap: 30px;
`;

export const SuccessInput = styled.input`
  width: 326px;
  height: 88px;
  background: rgba(255, 255, 255, 0.08);
  border: 1.5035px solid #ffffff;
  border-radius: 75.1748px;
  padding: 0 36px;

  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 27px;
  line-height: 27px;
  text-transform: lowercase;

  color: #9c9c9c;
`;

export const DownloadButton = styled.div`
  margin: 0 auto;
  color: #fff;
  width: 395px;
  height: 87px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #ffc400;
  border-radius: 43.5px;

  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 33px;
  line-height: 18px;
  padding-left: 18px;

  color: #ffffff;
  margin-bottom: 77px;
  cursor: pointer;
`;

export const DownArrow = styled(IoIosArrowRoundDown)`
  background: transparent;
  border-radius: 43.5px;
  border: 1px solid #ffc300;
  width: 73px;
  height: 73px;
  margin-right: -4px;
`;

export const CircleGradient = styled.div`
  /* Rectangle 4450 */

  position: absolute;
  width: 1440px;
  height: 1008px;
  left: 0px;
bottom: 0;

  background: radial-gradient(
      60.49% 80.08% at 0.99% 100.5%,
      rgba(156, 40, 255, 0.13) 0%,
      rgba(156, 40, 255, 0) 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
`;
