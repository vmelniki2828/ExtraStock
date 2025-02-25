import React, { useState } from 'react';
import axios from 'axios';
import { z } from 'zod';
import { Toaster, toast } from 'sonner';
import {
  BigContainer,
  ContainerImg,
  DownloadButton,
  DownloadContainer,
  DownloadInput,
  DownloadInputContainer,
  DownloadMainSubTitle,
  DownloadMainTitle,
  DownloadPurpleSpan,
  MainBlockContainer,
  SmallCont,
  SmallContainers,
  SmallTextBox,
  TextBox,
  Form,
  DownloadButtonArrow,
} from './Download.styled';
import headerArrow from '../../images/headerArrow.png';
import g_tshort from '../../images/grey_tshort.png';
import g_trauthers from '../../images/trauthers.png';
import g_shouse from '../../images/shouse.png';
import price from '../../images/Price.pdf';

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

const Download = () => {
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
    <DownloadContainer id="price">
      <DownloadMainTitle>Секонд-хенд і Сток оптом</DownloadMainTitle>
      <DownloadMainSubTitle>
        Великий вибір товару.{' '}
        <DownloadPurpleSpan>
          Найкращі ціни для торгівлі в онлайн та магазині.{' '}
        </DownloadPurpleSpan>
        Отримаєте саме той товар
        <DownloadPurpleSpan> який Ви швидко продасте.</DownloadPurpleSpan>
      </DownloadMainSubTitle>

      <MainBlockContainer>
        <BigContainer>
          <ContainerImg src={g_tshort} alt="dsad" />
          <TextBox>
            <strong>СОРТОВКА ОПТОМ:</strong>
            <p>
              Кросівки. Жилетка дута. Спорт штани. Фліс. Худі. Футболки. Шорти.
              Куртка. Роба. Карго. Та багато іншого
            </p>
          </TextBox>
        </BigContainer>
        <SmallContainers>
          <SmallCont>
            <ContainerImg src={g_trauthers} alt="dsad" />
            <SmallTextBox>
              <strong>Сток Оптом:</strong>
              <p>Дорослий. Дитячий. Взуття. Домашні вжиток</p>
            </SmallTextBox>
          </SmallCont>
          <SmallCont>
            <ContainerImg src={g_shouse} alt="dsad" />
            <SmallTextBox>
              <strong>Оригінал Оптом:</strong>
              <p>Актуальні бренди, останні колекції, висока якість</p>
            </SmallTextBox>
          </SmallCont>
        </SmallContainers>
      </MainBlockContainer>
      <Form onSubmit={handleSubmit}>
        <DownloadInputContainer>
          <DownloadInput
            placeholder="Введіть ім'я :"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <DownloadInput
            placeholder="Введіть номер телефону:"
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </DownloadInputContainer>
        <Toaster position="top-center" richColors />
        <DownloadButton type="submit">
          Скачати прайс{' '}
          <DownloadButtonArrow src={headerArrow} alt="headerArrow" />
        </DownloadButton>
      </Form>
    </DownloadContainer>
  );
};

export default Download;
