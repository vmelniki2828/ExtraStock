import React, { useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import {
  CircleGradient,
  DarkContainer,
  DownloadButton,
  DownloadButtonArrow,
  DownloadYellowText,
  InputContainer,
  SuccessBlackText,
  SuccessContainer,
  SuccessInput,
  SuccessWhiteSubText,
  SuccessWhiteText,
} from './Success.styled';
import whiteArrow from '../../images/whiteArrow.png';

const Success = () => {
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
                <img src={whiteArrow} alt="dsad" />
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
