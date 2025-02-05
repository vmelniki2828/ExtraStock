import {
  BusImg,
  DeliveryBlock,
  DeliveryBottomText,
  DeliveryCenterText,
  DeliveryContainer,
  DeliveryTopText,
} from './Delivery.styled';
import bus from '../../images/bus.png';

const Delivery = () => {
  return (
    <DeliveryContainer>
      <DeliveryBlock>
        <DeliveryTopText>
          <span>Доставка і передоплата.</span>
          <br />
          Доставка відбувається поштою <br />
          або можливо самостійно <br />
          забрати на складі.
        </DeliveryTopText>
        <DeliveryCenterText>
          Можна замовити товар
          <br /> по післяплати.
        </DeliveryCenterText>
        <DeliveryBottomText>
          <span>Безкоштовна доставка</span>
          <br />
          при замовленні <br />
          від 10000грн і повній оплаті.
        </DeliveryBottomText>
      </DeliveryBlock>
      <BusImg src={bus} alt="bus" />
    </DeliveryContainer>
  );
};

export default Delivery;
