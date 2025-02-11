import styled from 'styled-components';

export const DeliveryContainer = styled.div`
  margin: 100px auto;
  max-width: 1330px;
  width: 90%;
  display: flex;
  justify-content: center;
  position: relative;
  gap: 30px;

  @media (max-width: 1200px) {
    align-items: center;
    gap: 20px;
  }
  @media (max-width: 770px) {
    gap: 10px;
  }
`;

export const DeliveryBlock = styled.div`
  position: relative;
  z-index: 2;
`;

export const DeliveryTopText = styled.p`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 53px;
  line-height: 65px;
  text-transform: uppercase;
  color: #000000;
  margin: 0 0 60px 0;

  text-align: left;

  span {
    font-weight: 700;
    font-size: 71px;
    color: #9c28ff;
  }

  @media (max-width: 1200px) {
    font-size: 27.3833px;
    line-height: 34px;

    margin: 0 0 40px 0;

    span {
      font-size: 36.6833px;
      line-height: 34px;
    }
  }

  @media (max-width: 770px) {
    font-size: 11.7778px;
    line-height: 14px;
    margin: 0 0 20px 0;

    span {
      font-size: 15.7778px;
      line-height: 14px;
    }
  }
`;

export const DeliveryCenterText = styled.p`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 53px;
  line-height: 65px;
  text-transform: uppercase;
  color: #000000;
  margin: 0 0 60px 0;

  text-align: left;

  @media (max-width: 1200px) {
    font-size: 27.3833px;
    line-height: 34px;
    margin: 0 0 40px 0;
  }

  @media (max-width: 768px) {
    font-size: 11.7778px;
    line-height: 14px;
    margin: 0 0 20px 0;
  }
`;

export const DeliveryBottomText = styled.p`
  margin: 0;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 53px;
  line-height: 65px;
  text-transform: uppercase;
  color: #000000;

  text-align: left;

  span {
    color: #9c28ff;
  }

  @media (max-width: 1200px) {
    font-size: 27.3833px;
    line-height: 34px;
  }

  @media (max-width: 770px) {
    font-size: 11.7778px;
    line-height: 14px;
  }
`;

export const BusImg = styled.img`
  position: absolute;
  right: -360px;
  top: -50px;
  width: 900px;
  max-width: 100%;

  @media (max-width: 1200px) {
    position: static;
    width: 450px;
  }

  @media (max-width: 770px) {
    width: 208px;
  }
`;
