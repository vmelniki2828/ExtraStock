import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';

export const Plus = styled(FiPlus)`
  height: 30px;
  width: 30px;
  color: #9c28ff;
  transition: transform 0.3s ease;
`;

export const Cross = styled(RxCross2)`
  height: 30px;
  width: 30px;
  color: #9f9f9f;
  transition: transform 0.3s ease;
`;

export const AccordionContainer = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 1200px) {
    max-width: 100%;
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding: 62px 0;

  &:first-child {
    border-top: 1px solid #e0e0e0;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
  }

  @media (max-width: 480px) {
    padding: 30px 0;
  }
`;

export const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    flex-direction: column;

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

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 40px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 32px;
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
    width: 700px;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 24px;
    line-height: 32px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 28px;
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
  color: #929292;

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
    font-size: 20px;
    line-height: 26px;
  }

  @media (max-width: 768px) {
    padding-left: 0px;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding-left: 0;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
  }
`;
