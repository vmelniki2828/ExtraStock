import styled from 'styled-components';

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 200px;

  @media (max-width: 768px) {
    padding-bottom: 100px;
  }

  @media (max-width: 480px) {
    padding-bottom: 50px;
  }
`;

export const SocialMainText = styled.h3`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 46px;
  margin: 0 0 16px;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const SocialMainSubText = styled.p`
  margin: 0;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #8c8c8c;
  margin-bottom: 54px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 30px;
  }
`;

export const SocialSmallContainers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 37px;

  @media (max-width: 1250px) {
    display: grid; /* Используем CSS Grid */
    grid-template-columns: repeat(2, 1fr); /* Две колонки */
  }

  @media (max-width: 600px) {
    display: flex;

    flex-direction: column;
    gap: 16px;
  }
`;

export const ItemContainerYouTube = styled.div`
  padding: 69px 21.85px 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 40px 16px 16px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 30px 12px 12px;
    border-radius: 16px;
  }
`;

export const ItemContainerViber = styled(ItemContainerYouTube)`
  padding: 14px 21.85px 21px;

  @media (max-width: 768px) {
    padding: 20px 16px 16px;
  }

  @media (max-width: 480px) {
    padding: 15px 12px 12px;
  }
`;

export const ItemContainerTg = styled(ItemContainerYouTube)`
  padding: 21px 22px 21px;

  @media (max-width: 768px) {
    padding: 30px 16px 16px;
  }

  @media (max-width: 480px) {
    padding: 20px 12px 12px;
  }
`;

export const ItemContainerInst = styled(ItemContainerYouTube)`
  padding: 55px 21.85px 21px;

  @media (max-width: 768px) {
    padding: 35px 16px 16px;
  }

  @media (max-width: 480px) {
    padding: 25px 12px 12px;
  }
`;

export const PurpleText = styled.p`
  margin: 0;
  width: 231.31px;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  margin-bottom: 10px;
  color: #9c28ff;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const GrayTextYouTube = styled.p`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  margin: 0;
  width: 231.31px;
  color: #767676;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const GrayTextViber = styled(GrayTextYouTube)`
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const GrayTextTg = styled(GrayTextYouTube)`
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const GrayTextInst = styled(GrayTextYouTube)`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const YouTubeImg = styled.img`
  width: 110px;
  height: 82px;
  margin-bottom: 51px;

  @media (max-width: 768px) {
    width: 90px;
    height: 70px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    width: 70px;
    height: 50px;
    margin-bottom: 20px;
  }
`;

export const ViberImg = styled(YouTubeImg)`
  height: 128px;

  @media (max-width: 768px) {
    height: 100px;
  }

  @media (max-width: 480px) {
    height: 80px;
  }
`;

export const TgImg = styled(YouTubeImg)`
  height: 110px;

  @media (max-width: 768px) {
    height: 90px;
  }

  @media (max-width: 480px) {
    height: 70px;
  }
`;

export const InstImg = styled(YouTubeImg)`
  height: 110px;

  @media (max-width: 768px) {
    height: 90px;
  }

  @media (max-width: 480px) {
    height: 70px;
  }
`;
