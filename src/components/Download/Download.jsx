import React, { useState } from 'react';
import axios from 'axios';
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
} from './Download.styled';
import vp from '../../images/imagePlaceholder.png';
import headerArrow from '../../images/headerArrow.png';

const Download = () => {
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
    <DownloadContainer id="price">
      <DownloadMainTitle>Секонд-хенд і Сток оптом.</DownloadMainTitle>
      <DownloadMainSubTitle>
        Великий вибір товару.{' '}
        <DownloadPurpleSpan>
          Найкращі ціни для торгівлі в онлайн та магазині.{' '}
        </DownloadPurpleSpan>
        Отримаєте саме той товар
        <DownloadPurpleSpan>який Ви швидко продасте.</DownloadPurpleSpan>
      </DownloadMainSubTitle>

      <MainBlockContainer>
        <BigContainer>
          <ContainerImg src={vp} alt="dsad" />
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
            <ContainerImg src={vp} alt="dsad" />
            <SmallTextBox>
              <strong>Сток Оптом:</strong>
              <p>Дорослий. Дитячий. Взуття. Домашні вжиток</p>
            </SmallTextBox>
          </SmallCont>
          <SmallCont>
            <ContainerImg src={vp} alt="dsad" />
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
          placeholder="Ім’я:"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <DownloadInput
          placeholder="Мобільний телефон:"
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
      </DownloadInputContainer>
<Toaster position="top-center" richColors />
      <DownloadButton type="submit">
        Скачать прайс <img src={headerArrow} alt="headerArrow" />
      </DownloadButton>
      </Form>
    </DownloadContainer>
  );
};

export default Download;
