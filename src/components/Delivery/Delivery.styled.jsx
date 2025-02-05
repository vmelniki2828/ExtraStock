import styled from 'styled-components';

export const DeliveryContainer = styled.div`
  margin: 100px auto;
  max-width: 1330px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  position: relative;
  gap: 30px;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
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

  span {
    font-weight: 700;
    font-size: 71px;
    color: #9c28ff;
  }

  @media (max-width: 1200px) {
    font-size: 42px;
    line-height: 52px;

    span {
      font-size: 55px;
    }
  }

  @media (max-width: 768px) {
    font-size: 34px;
    line-height: 44px;

    span {
      font-size: 45px;
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

  @media (max-width: 1200px) {
    font-size: 42px;
    line-height: 52px;
  }

  @media (max-width: 768px) {
    font-size: 34px;
    line-height: 44px;
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

  span {
    color: #9c28ff;
  }

  @media (max-width: 1200px) {
    font-size: 42px;
    line-height: 52px;
  }

  @media (max-width: 768px) {
    font-size: 34px;
    line-height: 44px;
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

  @media (max-width: 768px) {
    width: 320px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;
