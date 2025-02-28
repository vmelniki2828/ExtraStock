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

  @media (max-width: 1280px) {
    font-size: 27.9px;
    line-height: 21px;
  }
  @media (max-width: 770px) {
    font-size: 12px;
    line-height: 9px;
  }
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

  @media (max-width: 1280px) {
    width: 691.3px;

    margin-bottom: 25px;

    font-size: 17.05px;
    line-height: 21px;
  }

  @media (max-width: 770px) {
    width: 297.33px;

    margin-bottom: 11px;

    font-size: 7.33333px;
    line-height: 9px;
  }

  @media (max-width: 500px) {
    width: 300px;
  }
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

  @media (max-width: 1280px) {
    gap: 15px;
    margin-bottom: 25px;
  }
  @media (max-width: 770px) {
    gap: 6px;
    margin-bottom: 11px;
  }
`;

export const BigContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.856546px solid #000000;
  border-radius: 22px;
  padding: 10px;
  width: 844px;
  background-color: #ffffff;

  @media (max-width: 1280px) {
    width: 447px;
    border: 0.442549px solid #000000;
    border-radius: 11.3667px;
  }
  @media (max-width: 770px) {
    width: 192px;
    border: 0.190343px solid #000000;
    border-radius: 4.88889px;
  }
`;

export const ContainerImg = styled.img`
  width: 233px;
  height: 233px;
  margin-right: 15px;
  flex-shrink: 0;

  @media (max-width: 1280px) {
    width: 124px;
    height: 124px;
  }

  @media (max-width: 770px) {
    width: 54px;
    height: 54px;
  }
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

    @media (max-width: 1280px) {
      margin-bottom: 10.45px;

      font-size: 14.4611px;
      line-height: 18px;
    }

    @media (max-width: 770px) {
      margin-bottom: 4.67px;

      font-size: 6.21984px;
      line-height: 8px;
    }
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

    @media (max-width: 1280px) {
      width: 279px;

      font-size: 13.95px;
      line-height: 14px;
    }
    @media (max-width: 770px) {
      width: 120px;

      font-size: 6px;
      line-height: 6px;
    }
  }
`;

export const SmallContainers = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media (max-width: 1280px) {
    gap: 15px;
  }
  @media (max-width: 770px) {
    gap: 4px;
  }
`;

export const SmallCont = styled.div`
  display: flex;
  align-items: center;
  border: 0.856546px solid #000000;
  border-radius: 22px;
  padding: 10px;
  width: 618px;
  background-color: #ffffff;

  @media (max-width: 1280px) {
    width: 330.67px;
    border: 0.442549px solid #000000;
    border-radius: 11.3667px;
  }
  @media (max-width: 770px) {
    width: 142.22px;
    border: 0.190343px solid #000000;
    border-radius: 4.88889px;
  }
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

    @media (max-width: 1280px) {
      margin-bottom: 10.45px;

      font-size: 14.4611px;
      line-height: 18px;
    }

    @media (max-width: 770px) {
      margin-bottom: 4.67px;

      font-size: 8px;
      line-height: 8px;
    }
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

    @media (max-width: 1280px) {
      width: 130px;

      font-size: 13.95px;
      line-height: 14px;
    }
    @media (max-width: 770px) {
      width: 80px;
      font-size: 8px;
      line-height: 8px;
    }
  }
`;

export const DownloadInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-bottom: 40px;

  @media (max-width: 1280px) {
    gap: 27px;
    margin-bottom: 20px;
  }
  @media (max-width: 770px) {
    gap: 11px;
    margin-bottom: 9px;
  }
`;

export const DownloadInput = styled.input`
  width: 24.375rem;
  height: 2.5rem;

  background: rgba(255, 255, 255, 0.36);
  border: 0.0625rem solid #000000;
  border-radius: 2.5625rem;
  padding: 0 1.375rem 0 1rem;

  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.875rem;

  color: #b58ada;

  transition: border 0.3s ease-in-out;

  &:focus {
    border-color: #ffc300;
    outline: none;
  }

  @media (max-width: 1280px) {
    width: 13.8125rem;

    font-size: 0.581rem;
    line-height: 1rem;

    border: 0.0625rem solid #000000;
    border-radius: 1.324rem;
  }

  @media (max-width: 770px) {
    width: 148px;
    height: 30px;
    font-size: 10px;
    line-height: 0.4375rem;
    padding: 0 4.89px 0 3.56px;
    border: 0.0625rem solid #000000;
    border-radius: 0.569rem;
  }
`;

// export const DownloadInput = styled.input`
//   width: 390px;
//   height: 40px;

//   background: rgba(255, 255, 255, 0.36);
//   border: 1px solid #000000;
//   border-radius: 41px;
//   padding: 0 22px 0 16px;

//   font-family: 'Geologica', sans-serif;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 18px;
//   line-height: 30px;

//   color: #b58ada;

//   transition: border 0.3s ease-in-out; /* Плавный переход для бордера */

//   &:focus {
//     border-color: #ffc300;
//     outline: none; /* Убирает стандартное выделение */
//   }

//   @media (max-width: 1280px) {
//     width: 221px;

//     font-size: 9.3px;
//     line-height: 16px;

//     border: 1px solid #000000;
//     border-radius: 21.1833px;
//   }
//   @media (max-width: 770px) {
//     width: 95px;
//     height: 20px;
//     font-size: 4px;
//     line-height: 7px;

//     border: 1px solid #000000;
//     border-radius: 9.11111px;
//   }
// `;

export const DownloadButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
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

  cursor: pointer;

  color: #000000;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1280px) {
    width: 155px;
    height: 39px;

    font-size: 11px;
    line-height: 18px;
  }
  @media (max-width: 770px) {
    width: 180px;
    height: 45px;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DownloadButtonArrow = styled.img`
  width: 18px;
  height: 18px;
  @media (max-width: 1280px) {
    width: 9.3px;
    height: 9.3px;
  }
  @media (max-width: 770px) {
    width: 12px;
    height: 12px;
  }
`;
