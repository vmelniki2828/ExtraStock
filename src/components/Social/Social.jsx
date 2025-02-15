import {
  BigCon,
  BigConContact,
  BigConContactText,
  ImageItem,
  // ImageMap,
  ItemContainer,
  ItemContainerBottom,
  // LocationIcon,
  Map,
  MapContainer,
  MapIcon,
  MapText,
  // MapTextMob,
  SocialBigContainers,
  SocialContainer,
  SocialMainSubText,
  SocialMainText,
  SocialSmallContainers,
  TelContainer,
  TelImg,
  TelItem,
  TelNum,
} from './Social.styled';
import youtube from '../../images/youtube.png';
import inst from '../../images/inst.png';
import tg from '../../images/tg.png';
import viber from '../../images/viber.png';
import tiktok from '../../images/tiktok.png';
import phone from '../../images/phone.png';
// import mapIcon from '../../images/map_photo.jpg';
// import { useEffect, useState } from 'react';

const Social = () => {
  return (
    <SocialContainer id="social">
      <SocialMainText>Ми в соціальних мережах</SocialMainText>
      <SocialMainSubText>
        Приєднуйтесь до нашої спільноти в <br />
        Вайбері, Телеграм, Tik Tok, а також на наш Instagram та YouTube
      </SocialMainSubText>
      <SocialSmallContainers>
        <a
          href="https://youtube.com/@extrastock_com_ua?si=AFcN_XUCreTIZsyI"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ItemContainer>
            <ImageItem src={youtube} alt="youtube" />
            <ItemContainerBottom>YouTube</ItemContainerBottom>
          </ItemContainer>
        </a>
        <a
          href="https://www.instagram.com/extrastock.com.ua?igsh=MTZvcDI2em94ampneg=="
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ItemContainer>
            <ImageItem src={inst} alt="inst" />
            <ItemContainerBottom>Instagram</ItemContainerBottom>
          </ItemContainer>
        </a>
        <a
          href="https://t.me/extrastock"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ItemContainer>
            <ImageItem src={tg} alt="tg" />
            <ItemContainerBottom>Telegram</ItemContainerBottom>
          </ItemContainer>
        </a>
        <a
          href="https://invite.viber.com/?g2=AQBLlxe5ksgOhkh9pYS%2FMIgVWUJGQcvTlsOlwp9Aj0iBb796MKW48I1LOPbxIWDp"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ItemContainer>
            <ImageItem src={viber} alt="viber" />
            <ItemContainerBottom>Viber</ItemContainerBottom>
          </ItemContainer>
        </a>
        <a
          href="https://www.tiktok.com/@extrastock.com.ua?_t=ZM-8tWchnCRHXy&_r=1"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ItemContainer>
            <ImageItem src={tiktok} alt="tiktok" />
            <ItemContainerBottom>Tik Tok</ItemContainerBottom>
          </ItemContainer>
        </a>
      </SocialSmallContainers>
      <SocialBigContainers>
        <BigConContact>
          <div>
            <BigConContactText>Контакти:</BigConContactText>
            <TelContainer>
              <a
                href="tel:+380994088848"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <TelItem>
                  <TelImg src={phone} alt="phone" />
                  <TelNum>+380994088848</TelNum>
                </TelItem>
              </a>
              <a
                href="tel:+390971338350"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <TelItem>
                  <TelImg src={phone} alt="phone" />
                  <TelNum>+390971338350</TelNum>
                </TelItem>
              </a>
            </TelContainer>
          </div>
          <div>
            <MapContainer>
              <BigConContactText>Адреса:</BigConContactText>
              <TelContainer>
                <a
                  href="https://maps.app.goo.gl/5XQ1qFkqrUjU13bq8"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <TelItem>
                    <MapIcon />
                    <TelNum> м. Київ, вул. Миколи Василенко 2</TelNum>
                  </TelItem>
                </a>
              </TelContainer>
            </MapContainer>
          </div>
        </BigConContact>
        <BigCon>
          <Map
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.085470004345!2d30.417056776060996!3d50.458133086811195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc45d5e6f69f%3A0x7621fe40f77c50b!2z0YPQuy4g0J3QuNC60L7Qu9Cw0Y8g0JLQsNGB0LjQu9C10L3QutC-LCAyLCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1738621056994!5m2!1sru!2sua"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></Map>

          {/* <a
            href="https://maps.app.goo.gl/5XQ1qFkqrUjU13bq8"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ImageMap src={mapIcon} alt="map photo" />
          </a> */}
          <MapText>
            Знайдіть нас за адресою: м. Київ, вул. Миколи Василенко 2
          </MapText>
        </BigCon>
      </SocialBigContainers>
    </SocialContainer>
  );
};

export default Social;
