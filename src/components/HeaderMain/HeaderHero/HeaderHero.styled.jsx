import styled from 'styled-components';

export const HeaderHeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 25px 0;
  width: 100%;

  @media (max-width: 1100px) {
    padding: 10px 0;
  }

  @media (max-width: 650px) {
    padding: 4.4px 0;
  }
`;

export const HeaderInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;

  @media (max-width: 1100px) {
    gap: 5.17px;
    margin-bottom: 15.5px;
  }

  @media (max-width: 650px) {
    gap: 2.2px;
    margin-bottom: 6.67px;
  }
`;

export const HeaderInput = styled.input`
  width: 390px;
  height: 40px;
  padding: 0 22px 0 16px;
  background: rgba(0, 0, 0, 0.36);
  border: 1px solid #ffc300;
  border-radius: 41px;

  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem; 
  line-height: 1.875rem; 
  margin: 0;

  color: #c9c9c9;

  @media (max-width: 1100px) {
    width: 13.3rem; 
    height: 1.29rem; 
    font-size: 0.581rem; 
    line-height: 0.968rem; 

    padding-right: 0.52rem; 
    padding-left: 0.52rem; 

    border: 0.032rem solid #ffc300; 
    border-radius: 1.324rem; 

  @media (max-width: 650px) {
    width: 110px; 
    height: 12px; 
    font-size: 7px; 
    line-height: 0.42rem; 
    padding-right: 4.89px; 
    padding-left: 3.56px;

    border: 0.014rem solid #ffc300; 
    border-radius: 0.57rem;
  }
`;

// export const HeaderInput = styled.input`
//   width: 390px;
//   height: 40px;
//   padding: 0 22px 0 16px;
//   background: rgba(0, 0, 0, 0.36);
//   border: 1px solid #ffc300;
//   border-radius: 41px;

//   font-family: 'Geologica', sans-serif;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 18px;
//   line-height: 30px;
//   margin: 0;

//   color: #c9c9c9;

//   @media (max-width: 744px) {
//     width: 212.86px;
//     height: 20.67px;
//     font-size: 9.3px;
//     line-height: 15.5px;

//     padding-right: 8.27px;
//     padding-left: 8.27px;

//     border: 0.516667px solid #ffc300;
//     border-radius: 21.1833px;
//   }

//   @media (max-width: 440px) {
//     width: 91.5px;
//     height: 8.89px;
//     font-size: 4px;
//     line-height: 6.7px;
//     padding-right: 3.56px;
//     padding-left: 3.56px;

//     border: 0.222222px solid #ffc300;
//     border-radius: 9.11111px;
//   }
// `;

export const HeaderHeroContainerLeft = styled.div`
  max-width: 500px;
  @media (max-width: 1100px) {
    width: 343.07px;
  }

  @media (max-width: 650px) {
    width: 152px;
  }
`;

export const HeaderHeroMainTitle = styled.h1`
  margin: 0;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 46px;
  line-height: 50px;
  color: #ffffff;

  @media (max-width: 1100px) {
    font-size: 24.0013px;
    line-height: 26px;
  }

  @media (max-width: 650px) {
    font-size: 15px;
    line-height: 11px;
  }
`;

export const HeaderHeroSubTitle = styled.p`
  margin: 0;
  width: 664px;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 41px;
  line-height: 50px;
  color: #ffffff;
  margin-bottom: 30px;

  @media (max-width: 1100px) {
    font-size: 18.0833px;
    line-height: 26px;
    margin-bottom: 14.9px;
  }

  @media (max-width: 650px) {
    font-size: 10px;
    line-height: 11px;
    margin-bottom: 6px;
  }
`;

export const LogoSpan = styled.span`
  color: #ae4fff;
`;

export const HeaderImgTshorts = styled.img`
  margin-right: -50px;
  width: 702px;

  @media (max-width: 1100px) {
    margin-right: 0;
    width: 362.7px;
  }

  @media (max-width: 650px) {
    width: 210px;
    margin-right: -20px;
  }
`;

export const StrongSpan = styled.span`
  font-weight: 600;
  font-size: 46px;
  line-height: 50px;

  @media (max-width: 1100px) {
    font-size: 24.0013px;
    line-height: 26px;
  }

  @media (max-width: 650px) {
    font-size: 10.3231px;
    line-height: 11px;
  }
`;

export const PurpleSpan = styled.span`
  color: #9c28ff;
`;

export const HeaderButton = styled.button`
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
  margin: 0;

  color: #000000;

  @media (max-width: 1100px) {
    padding: 12.4px 18.6px;
    gap: 4.13px;
    width: 119.63px;
    height: 34.8px;
    border-radius: 20.67px;
    font-size: 9.3px;
    line-height: 9px;
  }

  @media (max-width: 650px) {
    padding: 5.33px 8px;
    gap: 1.78px;
    width: 51.78px;
    height: 14.67px;
    border-radius: 8.89px;
    font-size: 4px;
    line-height: 4px;
  }
`;

export const HeaderButtonArrow = styled.img`
  width: 15px;
  height: 15px;
  @media (max-width: 1100px) {
    width: 9.3px;
    height: 9.3px;
  }

  @media (max-width: 650px) {
    width: 4px;
    height: 4px;
  }
`;
