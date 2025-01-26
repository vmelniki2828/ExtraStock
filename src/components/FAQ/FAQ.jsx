import Accordion from './Accordion/Accordion';
import { FAQMainContainer, FAQMainText } from './FAQ.styled';

const FAQ = () => {
  return (
    <FAQMainContainer>
      <FAQMainText>FAQ. Справочная информация. Все о секонд-хенде.</FAQMainText>
      <Accordion />
    </FAQMainContainer>
  );
};

export default FAQ;
