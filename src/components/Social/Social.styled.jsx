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
  gap: 30.02px;
  margin-bottom: 50.09px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 19.47px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  width: 224.74px;
  height: 258.81px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const ItemContainerBottom = styled.div`
  display: flex;
  self-items: end;
  width: 224.74px;
  height: 63.28px;

  background: #ffffff;
  border: 0.811321px solid #000000;
  border-radius: 19.4717px;

  margin-top: auto;

  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22.717px;
  line-height: 31px;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #9c28ff;
`;

export const SocialBigContainers = styled.div`
  display: flex;
  flex-direction: row;
  gap: 37px;
`;

export const BigCon = styled.div`
  width: 591px;
  height: 319px;

  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 24px;
`;

export const BigConContact = styled(BigCon)`
  text-align: left;
`;

export const BigConContactText = styled.p`
  margin: 52px 0 0 52px;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 46px;

  color: #000000;
`;

export const TelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 50px 0 0 52px;
`;

export const TelItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

export const TelNum = styled.p`
  margin: 0;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 46px;

  color: #000000;
`;
