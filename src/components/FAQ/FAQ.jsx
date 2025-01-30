import Accordion from './Accordion/Accordion';
import { FAQMainContainer, FAQMainText } from './FAQ.styled';

const FAQ = () => {
  return (
    <FAQMainContainer>
      <FAQMainText>FAQ. Довідкова інформація. Все про секонд-хенд.</FAQMainText>
      <Accordion />
    </FAQMainContainer>
  );
};

export default FAQ;
