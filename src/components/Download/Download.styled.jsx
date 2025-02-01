import styled from 'styled-components';

export const DownloadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const DownloadMainTitle = styled.h2`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 40px;
  margin: 3px 0 8px 0;
  color: #000000;
`;

export const DownloadMainSubTitle = styled.p`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 40px;
  margin: 0;
  width: 1338px;
  color: #000000;
  margin-bottom: 50px;
`;

export const DownloadPurpleSpan = styled.span`
  color: #9c28ff;
`;

export const MainBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: 50px;
`;

export const BigContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.856546px solid #000000;
  border-radius: 22px;
  padding: 10px;
  width: 844px;
  height: 233px;
  background-color: #ffffff;
`;

export const ContainerImg = styled.img`
  width: 233px;
  height: 233px;
  margin-right: 15px;
  flex-shrink: 0;
`;

export const TextBox = styled.div`
  flex-grow: 1;

  strong {
    display: block;
    margin-bottom: 21px;
    font-family: 'Geologica';
    font-style: normal;
    font-weight: 700;
    font-size: 27.9893px;
    line-height: 36px;
    text-transform: uppercase;
    color: #000000;
  }

  p {
    margin: 0;
    font-family: 'Geologica', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    line-height: 28px;
    color: #b58ada;
    width: 540px;
    margin: 0 auto;
  }
`;

export const SmallContainers = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const SmallCont = styled.div`
  display: flex;
  align-items: center;
  border: 0.856546px solid #000000;
  border-radius: 22px;
  padding: 10px;
  width: 618px;
  height: 233px;
  background-color: #ffffff;
`;

export const SmallTextBox = styled.div`
  flex-grow: 1;

  strong {
    display: block;
    margin-bottom: 21px;
    font-family: 'Geologica';
    font-style: normal;
    font-weight: 700;
    font-size: 27.9893px;
    line-height: 36px;
    text-transform: uppercase;
    color: #000000;
  }

  p {
    margin: 0;
    font-family: 'Geologica', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    line-height: 28px;
    color: #b58ada;
    width: 252px;
    margin: 0 auto;
  }
`;

export const DownloadInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-bottom: 40px;
`;

export const DownloadInput = styled.input`
  width: 390px;
  height: 40px;

  background: rgba(255, 255, 255, 0.36);
  border: 1px solid #000000;
  border-radius: 41px;
  padding: 0 22px 0 16px;

  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;

  color: #b58ada;

  transition: border 0.3s ease-in-out; /* Плавный переход для бордера */

  &:focus {
    border-color: #ffc300;
    outline: none; /* Убирает стандартное выделение */
  }
`;

export const DownloadButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 36px;
  gap: 8px;

  width: 231px;
  height: 66px;

  background: #ffc400;
  border-radius: 40px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  border: none;

  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  cursor: pointer;

  color: #000000;
`;


export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`;