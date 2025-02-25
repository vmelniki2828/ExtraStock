import React, { useState } from 'react';
import axios from 'axios';
import { z } from 'zod';
import { Toaster, toast } from 'sonner';
import {
  HeaderButton,
  HeaderButtonArrow,
  HeaderHeroContainer,
  HeaderHeroContainerLeft,
  HeaderHeroMainTitle,
  HeaderHeroSubTitle,
  HeaderImgTshorts,
  HeaderInput,
  HeaderInputContainer,
  PurpleSpan,
  StrongSpan,
} from './HeaderHero.styled';
import header_tshorts from '../../../images/heroPicture.png';
import headerArrow from '../../../images/headerArrow.png';
import price from '../../../images/Price.pdf';

const formSchema = z.object({
  name: z.string().min(1, "Ім'я обов'язкове").max(50, 'Максимум 50 символів'),
  contact: z
    .string()
    .min(1, "Контакт обов'язковий")
    .regex(
      /^\+?[1-9]\d{1,14}$/,
      'Введіть дійсний номер телефону у міжнародному форматі (наприклад, +380123456789)'
    ),
  type: z.enum(['price', 'other']).default('price'),
});

const HeaderHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    type: 'price',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const parseResult = formSchema.safeParse(formData);
    if (!parseResult.success) {
      parseResult.error.errors.forEach(err => toast.error(err.message));
      return;
    }

    try {
      const response = await fetch('/mailer.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Проверка содержимого ответа сервера
      const textResponse = await response.text(); // Получаем ответ как текст
      console.log('Response text:', textResponse); // Логируем его

      // Преобразуем в JSON, если это возможно
      const data = JSON.parse(textResponse);

      if (response.ok) {
        toast.success('Дякуємо за заявку!');
        setFormData({
          type: 'price',
          name: '',
          contact: '',
        });

        const downloadLink = document.createElement('a');
        downloadLink.href = price;
        downloadLink.download = price;
        downloadLink.click();
      } else {
        throw new Error(data.error || 'Упс! Щось пішло не так!');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <HeaderHeroContainer>
      <HeaderHeroContainerLeft>
        <HeaderHeroMainTitle>
          Секонд-хенд і сток оптом
          <br />
          <StrongSpan>
            <PurpleSpan>від 1€/КГ</PurpleSpan>
          </StrongSpan>
        </HeaderHeroMainTitle>
        <HeaderHeroSubTitle>
          Від кращих фабрик! <br />
          Щотижневе оновлення!
        </HeaderHeroSubTitle>
        <form onSubmit={handleSubmit}>
          <HeaderInputContainer>
            <HeaderInput
              placeholder="Введіть ім'я:"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <HeaderInput
              placeholder="Введіть номер телефону:"
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
          </HeaderInputContainer>
          <Toaster position="top-center" richColors />
          <HeaderButton type="submit">
            Скачати прайс{' '}
            <HeaderButtonArrow src={headerArrow} alt="headerArrow" />
          </HeaderButton>
        </form>
      </HeaderHeroContainerLeft>
      <HeaderImgTshorts src={header_tshorts} alt={header_tshorts} />
    </HeaderHeroContainer>
  );
};

export default HeaderHero;
