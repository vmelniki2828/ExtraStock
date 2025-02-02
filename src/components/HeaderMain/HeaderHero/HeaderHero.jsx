import React, { useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import {
  HeaderButton,
  HeaderHeroContainer,
  HeaderHeroContainerLeft,
  HeaderHeroContainerRight,
  HeaderHeroMainTitle,
  HeaderHeroSubTitle,
  HeaderImgTshorts,
  HeaderInput,
  HeaderInputContainer,
  PurpleSpan,
  StrongSpan,
} from './HeaderHero.styled';
import header_tshorts from '../../../images/header_tshorts.png';
import headerArrow from '../../../images/headerArrow.png';

const HeaderHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
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
    try {
      await axios.post('http://localhost:5000/send', formData);

      toast.success('Дякуємо за заявку!');

      setFormData({
        name: '',
        contact: '',
      });
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
              placeholder="Ім’я:"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <HeaderInput
              placeholder="Мобільний телефон:"
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
          </HeaderInputContainer>
          <Toaster position="top-center" richColors />
          <HeaderButton type="submit">
            Скачати прайс <img src={headerArrow} alt="headerArrow" />
          </HeaderButton>
        </form>
      </HeaderHeroContainerLeft>
      <HeaderHeroContainerRight>
        <HeaderImgTshorts src={header_tshorts} alt={header_tshorts} />
      </HeaderHeroContainerRight>
    </HeaderHeroContainer>
  );
};

export default HeaderHero;
