import styled from 'styled-components';

export const AccordionContainer = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 20px;
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding: 62px 0;

  &:first-child {
    border-top: 1px solid #e0e0e0; /* Верхний бордер только для первого элемента */
  }
`;

export const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const Number = styled.span`
  font-family: 'Geologica', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 50px;

  color: #9c28ff;
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
`;

export const Icon = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #9c28ff;
  transition: transform 0.3s ease;
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
`;
