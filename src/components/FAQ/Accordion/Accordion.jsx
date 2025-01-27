import React, { useState } from 'react';
import {
  AccordionContainer,
  AccordionItem,
  Answer,
  Cross,
  Icon,
  Number,
  Plus,
  Question,
  Text,
} from './Accordion.styled';

const Accordion = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = index => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Можно ли посмотреть товар перед покупкой?',
      answer: 'Да, весь товар можно посмотреть у нас на складе.',
    },
    {
      question: 'Как долго идет посылка по Украине?',
      answer: 'Посылка доставляется в среднем за 2-5 рабочих дней.',
    },
    {
      question:
        'Что бы оформить доставку, какую сумму предоплаты нужно перевести на карту?',
      answer: 'Предоплата составляет 50% от общей стоимости заказа.',
    },
    {
      question:
        'Какие у меня гарантии в том, что я получу товар оплатив его переводом на карту?',
      answer: 'Предоплата составляет 50% от общей стоимости заказа.',
    },
    {
      question: 'Какой минимальный заказ?',
      answer: 'Предоплата составляет 50% от общей стоимости заказа.',
    },
    {
      question: 'Какой транспортной компанией Вы отправляете товар?',
      answer: 'Предоплата составляет 50% от общей стоимости заказа.',
    },
    {
      question: 'Что такое оригинал?',
      answer: 'Предоплата составляет 50% от общей стоимости заказа.',
    },
    {
      question: 'Что такое сортировка?',
      answer: 'Предоплата составляет 50% от общей стоимости заказа.',
    },
    {
      question: 'Что лучше оригинал или сортировка?',
      answer: 'Предоплата составляет 50% от общей стоимости заказа.',
    },
    {
      question: 'Что значит контейнерная и домашняя сборка оригинала.',
      answer: 'Предоплата составляет 50% от общей стоимости заказа.',
    },
    {
      question:
        'Какие бывают виды и сорта секонд-хенда. Сток, крем,1-2 сорт и тд.?',
      answer: 'Предоплата составляет 50% от общей стоимости заказа.',
    },
  ];

  return (
    <AccordionContainer>
      {faqItems.map((item, index) => (
        <AccordionItem key={index}>
          <Question onClick={() => toggleItem(index)}>
            <Number>{String(index + 1).padStart(2, '0')}</Number>
            <Text>{item.question}</Text>
            <Icon>{openItem === index ? <Cross/> : <Plus/>}</Icon>
          </Question>
          {openItem === index && <Answer>{item.answer}</Answer>}
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
