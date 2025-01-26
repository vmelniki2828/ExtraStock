import {
  GrayText,
  InstImg,
  ItemContainer,
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
      <SocialMainText>Мы в социальных сетях</SocialMainText>
      <SocialMainSubText>
        Присоединяйтесь к нашему сообществу в <br />
        Вайбере и  Телеграмм
      </SocialMainSubText>
      <SocialSmallContainers>
        <ItemContainerYouTube>
          <YouTubeImg src={youtube} alt="youtube" />
          <PurpleText>YouTube</PurpleText>
          <GrayText>все видео обзоры наших товаров</GrayText>
        </ItemContainerYouTube>
        <ItemContainerYouTube>
          <ViberImg src={viber} alt="viber" />
          <PurpleText>YouTube</PurpleText>
          <GrayText>все видео обзоры наших товаров</GrayText>
        </ItemContainerYouTube>
        <ItemContainerYouTube>
          <YouTubeImg src={youtube} alt="youtube" />
          <PurpleText>YouTube</PurpleText>
          <GrayText>все видео обзоры наших товаров</GrayText>
        </ItemContainerYouTube>
        <ItemContainerYouTube>
          <YouTubeImg src={youtube} alt="youtube" />
          <PurpleText>YouTube</PurpleText>
          <GrayText>все видео обзоры наших товаров</GrayText>
        </ItemContainerYouTube>
      </SocialSmallContainers>
    </SocialContainer>
  );
};

export default Social;
