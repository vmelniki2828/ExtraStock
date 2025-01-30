import styled from 'styled-components';

export const DeliveryContainer = styled.div`
  margin: 159px auto 130px;
  width: 1330px;
  display: flex;
  position: relative;
`;

export const DeliveryTopText = styled.p`
  font-family: 'Geologica', sans-serig;
  font-style: normal;
  font-weight: 600;
  font-size: 53px;
  line-height: 65px;
  /* or 123% */
  text-transform: uppercase;

  color: #000000;
  margin: 0 0 60px 0;

  span {
    font-family: 'Geologica', sans-serif;
    font-weight: 700;
    font-size: 71px;
    text-transform: uppercase;

    color: #9c28ff;
  }
`;

export const DeliveryCenterText = styled.p`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 53px;
  line-height: 65px;
  text-transform: uppercase;
  margin: 0 0 60px 0;
  color: #000000;
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
`;

export const BusImg = styled.img`
  position: absolute;
  right: -360px;
  top: -50px;
`;
