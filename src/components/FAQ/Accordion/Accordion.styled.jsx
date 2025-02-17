import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';

export const Plus = styled(FiPlus)`
  height: 30px;
  width: 30px;
  color: #9c28ff;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    height: 14.72px;
    width: 14.72px;
  }

  @media (max-width: 480px) {
    height: 6.33px;
    width: 6.33px;
  }
`;

export const Cross = styled(RxCross2)`
  height: 30px;
  width: 30px;
  color: #9f9f9f;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    height: 14.72px;
    width: 14.72px;
  }

  @media (max-width: 480px) {
    height: 6.33px;
    width: 6.33px;
  }
`;

export const AccordionContainer = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 1200px) {
    max-width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 770px) {
    max-width: 630.34px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    max-width: 271.11px;
    padding: 10px;
  }
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding: 62px 0;

  &:first-child {
    border-top: 1px solid #e0e0e0;
  }

  @media (max-width: 1200px) {
    padding: 40px 0;
    width: 600px;
  }

  @media (max-width: 770px) {
    padding: 15px 0;
    width: 310px;
  }
`;

export const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 1200px) {
    align-items: center;

    gap: 10px;
  }
`;

export const Number = styled.span`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 50px;

  color: #9c28ff;

  @media (max-width: 1200px) {
    font-size: 22.7333px;
    line-height: 26px;
  }

  @media (max-width: 770px) {
    font-size: 9.77778px;
    line-height: 11px;
  }
`;

export const Text = styled.p`
  margin: 0;
  width: 855px;
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;

  color: #131313;

  @media (max-width: 1200px) {
    font-size: 14.4667px;
    line-height: 20px;
  }

  @media (max-width: 770px) {
    font-size: 9.22222px;
    line-height: 8px;
  }
`;

export const Icon = styled.span`
  @media (max-width: 768px) {
    align-self: center;
  }

  @media (max-width: 480px) {
    align-self: center;
  }
`;
export const Answer = styled.div`
  margin-top: 54px;
  padding-left: 200px;

  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 30px;
  color: #4c4c4c;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media (max-width: 1200px) {
    padding-left: 0px;
    text-align: center;

    font-size: 11.8833px;
    line-height: 16px;
  }

  @media (max-width: 770px) {
    padding-left: 0px;
    font-size: 8.11111px;
    line-height: 10px;

    margin-top: 12px;

    text-align: center;
  }
`;
