import { PurpleSpan } from 'components/HeaderMain/HeaderHero/HeaderHero.styled';
import {
  BenefitsMainContainer,
  BenefitsMainText,
  BenefitsSubText,
  BigCard,
  BigCardIcon,
  BigCardSubText,
  BigCardText,
  BigCardTextSpan,
  CardContainer,
  SmallCardDark,
  SmallCardDarkSubText,
  SmallCardDarkText,
  SmallCardLight,
  SmallCardLightSubText,
  SmallCardLightText,
  SmallCardsContainer,
  SmallIcon,
} from './Benefits.styled';
import handshake from '../../images/handshake.png';

const Benefits = () => {
  return (
    <BenefitsMainContainer>
      <BenefitsMainText>7 ОСНОВНЫХ ВЫГОД</BenefitsMainText>
      <BenefitsSubText>
        при работе с базой <PurpleSpan>ЭкстраСток</PurpleSpan>
      </BenefitsSubText>
      <CardContainer>
        <BigCard>
          <BigCardIcon src={handshake} />
          <BigCardText>
            Помощь в открытии успешных магазинов{' '}
            <BigCardTextSpan>секонд-хенд</BigCardTextSpan>
          </BigCardText>
          <BigCardSubText>
            Полный цикл сопровождения желающих начать свой бизнес
          </BigCardSubText>
        </BigCard>
        <SmallCardsContainer>
          <SmallCardDark>
            <SmallIcon />
            <SmallCardDarkText>Возможность просмотреть товар</SmallCardDarkText>
            <SmallCardDarkSubText>
              Любой мешок можно посмотреть на складе
            </SmallCardDarkSubText>
          </SmallCardDark>
          <SmallCardLight>
            <SmallIcon />
            <SmallCardLightText>
              Бесплатная <br />
              доставка
            </SmallCardLightText>
            <SmallCardLightSubText>
              при заказе от 10000 грн, доставка бесплатная
            </SmallCardLightSubText>
          </SmallCardLight>
        </SmallCardsContainer>
        <SmallCardsContainer>
          <SmallCardLight>
            <SmallIcon />
            <SmallCardLightText>
              Бронирование <br />
              товара
            </SmallCardLightText>
            <SmallCardLightSubText>
              Товар можно забронировать на сайте{' '}
            </SmallCardLightSubText>
          </SmallCardLight>
          <SmallCardDark>
            <SmallIcon />
            <SmallCardDarkText>Модных брендов на 20% больше</SmallCardDarkText>
            <SmallCardDarkSubText>
              Вещи из самых последних коллекций{' '}
            </SmallCardDarkSubText>
          </SmallCardDark>
        </SmallCardsContainer>
        <SmallCardsContainer>
          <SmallCardDark>
            <SmallIcon />
            <SmallCardDarkText>Более 50 наименований товара</SmallCardDarkText>
            <SmallCardDarkSubText>
              Большой выбор, постоянно обновляемый ассортимент
            </SmallCardDarkSubText>
          </SmallCardDark>
          <SmallCardLight>
            <SmallIcon />
            <SmallCardLightText>
              Возможность просмотреть товар
            </SmallCardLightText>
            <SmallCardLightSubText>
              Любой мешок можно посмотреть на складе
            </SmallCardLightSubText>
          </SmallCardLight>
        </SmallCardsContainer>
      </CardContainer>
    </BenefitsMainContainer>
  );
};

export default Benefits;
