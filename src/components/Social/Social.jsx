import {
  GrayTextInst,
  GrayTextTg,
  GrayTextViber,
  GrayTextYouTube,
  InstImg,
  ItemContainerInst,
  ItemContainerTg,
  ItemContainerViber,
  ItemContainerYouTube,
  PurpleText,
  SocialContainer,
  SocialMainSubText,
  SocialMainText,
  SocialSmallContainers,
  TgImg,
  ViberImg,
  YouTubeImg,
} from './Social.styled';
import youtube from '../../images/youtube.png';
import viber from '../../images/viber.png';
import tg from '../../images/tg.png';
import inst from '../../images/insta.png';

const Social = () => {
  return (
    <SocialContainer>
      <SocialMainText>Ми в соціальних мережах</SocialMainText>
      <SocialMainSubText>
        Приєднуйтесь до нашої спільноти в <br />
        Вайбері та Телеграм
      </SocialMainSubText>
      <SocialSmallContainers>
        <ItemContainerYouTube>
          <YouTubeImg src={youtube} alt="youtube" />
          <PurpleText>YouTube</PurpleText>
          <GrayTextYouTube>все видео обзоры наших товаров</GrayTextYouTube>
        </ItemContainerYouTube>
        <ItemContainerViber>
          <ViberImg src={viber} alt="viber" />
          <PurpleText>Viber</PurpleText>
          <GrayTextViber>
            - всегда свежий прайс <br />- горячие, акционные позиции <br /> -
            актуальная информация о наличии товара
          </GrayTextViber>
        </ItemContainerViber>
        <ItemContainerTg>
          <TgImg src={tg} alt="tg" />
          <PurpleText>Telegram</PurpleText>
          <GrayTextTg>
            - возможность увидеть отзывы о товаре и оперативно общаться с
            поставщиком. <br />- информация о свежих видео обзорах на новинки
          </GrayTextTg>
        </ItemContainerTg>
        <ItemContainerInst>
          <InstImg src={inst} alt="inst" />
          <PurpleText>Instagram</PurpleText>
          <GrayTextInst>свежие фото горячих позиций</GrayTextInst>
        </ItemContainerInst>
      </SocialSmallContainers>
    </SocialContainer>
  );
};

export default Social;
