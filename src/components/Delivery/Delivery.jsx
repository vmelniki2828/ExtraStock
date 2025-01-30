import {
  BusImg,
  DeliveryBottomText,
  DeliveryCenterText,
  DeliveryContainer,
  DeliveryTopText,
} from './Delivery.styled';
import bus from '../../images/bus.png'

const Delivery = () => {
  return (
    <DeliveryContainer>
      <div>
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
      </div>
      <BusImg src={bus} alt='bus'/>
    </DeliveryContainer>
  );
};

export default Delivery;
