import { PurpleSpan } from 'components/HeaderMain/HeaderHero/HeaderHero.styled';
import {
  BenefitsMainContainer,
  BenefitsMainText,
  BenefitsSubText,
  BigCard,
  BigCardIcon,
  BigCardSubText,
  BigCardText,
  CardContainer,
  SmallCardDark,
  SmallCardDarkSubText,
  SmallCardDarkText,
  SmallCardLight,
  SmallCardLightSubText,
  SmallCardLightText,
  SmallCardsContainer,
  SmallIcon,
  YellowSpan,
} from './Benefits.styled';
import handshake from '../../images/handshake.png';
import delivery from '../../images/delivery.png';
import garbage from '../../images/garbage.png';
import mask from '../../images/mask.png';
import earth from '../../images/earth.png';
import money from '../../images/money.png';
import house from '../../images/warehouse.png';
import camera from '../../images/camera.png';
import cp from '../../images/cp.png';

const Benefits = () => {
  return (
    <BenefitsMainContainer>
      <BenefitsMainText>9 ОСНОВНЫХ ВЫГОД</BenefitsMainText>
      <BenefitsSubText>
        під час роботи з базою{' '}
        <PurpleSpan>
          Екстра<YellowSpan>Сток</YellowSpan>
        </PurpleSpan>
      </BenefitsSubText>
      <CardContainer>
        <BigCard>
          <BigCardIcon src={handshake} />
          <BigCardText>
            Допомога <br /> При <br />
            відкритті магазину
          </BigCardText>
          <BigCardSubText>
            Повний цикл супроводу для бажаючих почати свій бізнес{' '}
          </BigCardSubText>
        </BigCard>
        <SmallCardsContainer>
          <SmallCardDark>
            <SmallIcon src={delivery} alt="delivery" />
            <SmallCardDarkText>Швидка доставка</SmallCardDarkText>
            <SmallCardDarkSubText>
              Отримуйте свої замовлення без зайвого очікування!
            </SmallCardDarkSubText>
          </SmallCardDark>
          <SmallCardLight>
            <SmallIcon src={garbage} alt="garbage" />
            <SmallCardLightText>
              Зашиті мішки які не вскривались в Україні{' '}
            </SmallCardLightText>
            <SmallCardLightSubText>
              Товар, який був відкритим тільки для вас.
            </SmallCardLightSubText>
          </SmallCardLight>
        </SmallCardsContainer>
        <SmallCardsContainer>
          <SmallCardLight>
            <SmallIcon src={mask} alt="mask" />
            <SmallCardLightText>Речі з біркою </SmallCardLightText>
            <SmallCardLightSubText>
              Оригінальні речі з бірками – жодних компромісів!{' '}
            </SmallCardLightSubText>
          </SmallCardLight>
          <SmallCardDark>
            <SmallIcon src={earth} alt="earth" />
            <SmallCardDarkText>Прямі поставки</SmallCardDarkText>
            <SmallCardDarkSubText>
              Товари надходять безпосередньо від постачальників.
            </SmallCardDarkSubText>
          </SmallCardDark>
        </SmallCardsContainer>
        <SmallCardsContainer>
          <SmallCardDark>
            <SmallIcon src={money} alt="money" />
            <SmallCardDarkText>Ходовий товар</SmallCardDarkText>
            <SmallCardDarkSubText>
              Товари високої якості, які користуються найбільшим попитом!{' '}
            </SmallCardDarkSubText>
          </SmallCardDark>
          <SmallCardLight>
            <SmallIcon src={house} alt="house" />
            <SmallCardLightText>Можна приїхати на склад </SmallCardLightText>
            <SmallCardLightSubText>
              Можливість особисто відвідати склад для огляду товару.{' '}
            </SmallCardLightSubText>
          </SmallCardLight>
        </SmallCardsContainer>
        <SmallCardsContainer>
          <SmallCardLight>
            <SmallIcon src={camera} alt="camera" />
            <SmallCardLightText>Відеоогляд</SmallCardLightText>
            <SmallCardLightSubText>
              Відеоогляди товарів для детального ознайомлення.{' '}
            </SmallCardLightSubText>
          </SmallCardLight>
          <SmallCardDark>
            <SmallIcon src={cp} alt="cp" />
            <SmallCardDarkText>
              Більше брендів в кожному мішку
            </SmallCardDarkText>
            <SmallCardDarkSubText>
              Кожен мішок містить продукцію від кількох брендів.{' '}
            </SmallCardDarkSubText>
          </SmallCardDark>
        </SmallCardsContainer>
      </CardContainer>
    </BenefitsMainContainer>
  );
};

export default Benefits;
