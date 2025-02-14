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
  name: z.string().optional(),
  contact: z.string().email('Введіть дійсний email-адрес'),
  type: z.enum(['price']).default('price'),
});
const HeaderHero = () => {
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
      await axios.post('http://localhost:5000/send', formData);
      toast.success('Дякуємо за заявку!');
      setFormData({
        name: '',
        contact: '',
        type: 'consultation',
      });
      const downloadLink = document.createElement('a');
      downloadLink.href = price;
      downloadLink.download = price;
      downloadLink.click();
    } catch (error) {
      console.error(error);
      toast.error('Упс! Щось пішло не так! 😢');
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
