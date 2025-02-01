import {
  BigCon,
  BigConContact,
  BigConContactText,
  ItemContainer,
  ItemContainerBottom,
  MapText,
  SocialBigContainers,
  SocialContainer,
  SocialMainSubText,
  SocialMainText,
  SocialSmallContainers,
  TelContainer,
  TelItem,
  TelNum,
} from './Social.styled';
import youtube from '../../images/youtube.png';
import inst from '../../images/inst.png';
import tg from '../../images/tg.png';
import viber from '../../images/viber.png';
import tiktok from '../../images/tiktok.png';
import phone from '../../images/phone.png';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Social = () => {
  const containerStyle = {
    width: '590px',
    height: '279px',
    background: ' #9c28ff',
    // mixBlendMode: "color",
    border: '1px solid #000000',
    borderRadius: '24px 24px 0 0',
  };

  const center = {
    lat: 50.45825261911876,
    lng: 30.41964242710779,
  };

  return (
    <SocialContainer id="social">
      <SocialMainText>Ми в соціальних мережах</SocialMainText>
      <SocialMainSubText>
        Приєднуйтесь до нашої спільноти в <br />
        Вайбері та Телеграм
      </SocialMainSubText>
      <SocialSmallContainers>
        <a
          href="https://youtube.com/@extrastock_com_ua?si=AFcN_XUCreTIZsyI"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ItemContainer>
            <img src={youtube} alt="youtube" style={{ marginTop: '26.77px' }} />
            <ItemContainerBottom>YouTube</ItemContainerBottom>
          </ItemContainer>
        </a>
        <a
          href="https://www.instagram.com/extrastock.com.ua?igsh=MTZvcDI2em94ampneg=="
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ItemContainer>
            <img src={inst} alt="inst" style={{ marginTop: '7.31px' }} />
            <ItemContainerBottom>Instagram</ItemContainerBottom>
          </ItemContainer>
        </a>
        <a
          href="https://t.me/extrastock"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ItemContainer>
            <img src={tg} alt="tg" style={{ marginTop: '26.77px' }} />
            <ItemContainerBottom>Telegram</ItemContainerBottom>
          </ItemContainer>
        </a>
        <a
          href="https://invite.viber.com/?g2=AQBLlxe5ksgOhkh9pYS%2FMIgVWUJGQcvTlsOlwp9Aj0iBb796MKW48I1LOPbxIWDp"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ItemContainer>
            <img src={viber} alt="viber" style={{ marginTop: '24.91px' }} />
            <ItemContainerBottom>Viber</ItemContainerBottom>
          </ItemContainer>
        </a>
        <a
          href="https://www.tiktok.com/@extrastock.com.ua?_t=ZM-8tWchnCRHXy&_r=1"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ItemContainer>
            <img src={tiktok} alt="tiktok" style={{ marginTop: '29.21px' }} />
            <ItemContainerBottom>Tik Tok</ItemContainerBottom>
          </ItemContainer>
        </a>
      </SocialSmallContainers>
      <SocialBigContainers>
        <BigConContact>
          <BigConContactText>Контакти:</BigConContactText>
          <TelContainer>
            <a
              href="tel:+380994088848"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <TelItem>
                <img src={phone} alt="phone" />
                <TelNum>+380994088848</TelNum>
              </TelItem>
            </a>
            <a
              href="tel:+390971338350"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <TelItem>
                <img src={phone} alt="phone" />
                <TelNum>+390971338350</TelNum>
              </TelItem>
            </a>
          </TelContainer>
        </BigConContact>
        <BigCon>
          <LoadScript googleMapsApiKey="AIzaSyCIpjA5fg_xeksRJyRO25ZiDfCvV6feRz4">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
          <MapText>
            Знайдіть нас за адресою: м. Київ, вул. Миколи Василенко 2
          </MapText>
        </BigCon>
      </SocialBigContainers>
    </SocialContainer>
  );
};

export default Social;
