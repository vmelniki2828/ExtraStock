import React, { useState } from 'react';
import { z } from 'zod';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import {
  CircleGradient,
  DarkContainer,
  DownloadButton,
  DownloadButtonArrow,
  DownloadYellowText,
  ImgArrow,
  InputContainer,
  SuccessBlackText,
  SuccessContainer,
  SuccessInput,
  SuccessWhiteSubText,
  SuccessWhiteText,
} from './Success.styled';
import whiteArrow from '../../images/whiteArrow.png';

const formSchema = z.object({
  name: z.string().min(1, "Ім'я обов'язкове").max(50, 'Максимум 50 символів'),
  contact: z
    .string()
    .min(1, "Контакт обов'язковий")
    .regex(
      /^\+?[1-9]\d{1,14}$/,
      'Введіть дійсний номер телефону у міжнародному форматі (наприклад, +380123456789)'
    ),
  type: z.enum(['consultation', 'other']).default('consultation'),
});

const Success = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    type: 'consultation',
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
          type: 'consultation',
          name: '',
          contact: '',
        });
      } else {
        throw new Error(data.error || 'Упс! Щось пішло не так!');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <SuccessContainer>
      <SuccessBlackText>Безкоштовна допомога</SuccessBlackText>
      <DarkContainer>
        <SuccessWhiteText>
          по торгівлі онлайн та магазину секонд-хенд.
        </SuccessWhiteText>
        <SuccessWhiteSubText>
          Зрозуміти як правильно зробити, і На що дуже важливо звернути увагу
          при торгівлі секонд-хенд і Сток. Ми безкоштовно відповімо на всі Ваші
          питання і підскажемо в якому напрямку потрібно рухатись при продажі
          для успішного розвитку та росту вашого онлайн чи офлайн магазину та
          продажі через соц мережі.
        </SuccessWhiteSubText>
        <DownloadYellowText>Замовити консультацію</DownloadYellowText>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <SuccessInput
              placeholder="ім’я..."
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <SuccessInput
              placeholder="номер телефону..."
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
            <Toaster position="top-center" richColors />
            <DownloadButton type="submit">
              Надіслати запит
              <DownloadButtonArrow>
                <ImgArrow src={whiteArrow} alt="dsad" />
              </DownloadButtonArrow>
            </DownloadButton>
          </InputContainer>
        </form>
      </DarkContainer>
      <CircleGradient />
    </SuccessContainer>
  );
};

export default Success;
