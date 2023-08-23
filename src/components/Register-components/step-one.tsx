import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Container, FormContainer } from '../../pages/Register/style';
import logo from "../../assets/img/logo-orkut-simples.svg";
import { StyledImage } from '../LoginBackground/style';
import LoginBackground from '../LoginBackground';

interface Props {
  handleNext: () => void;
}

 interface FormData {
  email: string;
  password: string;
  date: string;
  profession: string;
  country: string;
  city: string;
  relationship: string;
}

const Step1 = ({ handleNext }: Props) => {
 const initialFormData: FormData = {
    email: '',
    password: '',
    date: '',
    profession: '',
    country: '',
    city: '',
    relationship: '',
  };

   const [formData, setFormData] = useState<FormData>(initialFormData);
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});

 const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (formData.email.trim() === '') {
      errors.email = 'O campo de email precisa ser preenchido';
    } else if (!formData.email.includes('@')) {
      errors.email = 'Endereço de email inválido';
    }

    if (formData.password.trim() === '') {
      errors.password = 'A senha precisa ser preenchida';
    } else if (formData.password.length < 6) {
      errors.password = 'A senha deve ter pelo menos 6 caracteres';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log('Form validation failed.');
      return;
    }

    console.log('Form submitted successfully.');
    setFormData(initialFormData);
    handleNext();
  };

  
const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

  return (

  <Container>
    <LoginBackground />
    <FormContainer onSubmit={handleSubmit}>
      <img src={logo} alt="Logo" />
      <h2>Cadastre-se no Uolkurt</h2>
      <input
        type="text"
        name="email"
        placeholder="E-mail"
        className="group1"
        value={formData.email}
        onChange={handleChange}
      />
      {formErrors.email && <span>{formErrors.email}</span>}
      <input
        type="password"
        name="password"
        placeholder="Senha"
        className="group1"
        value={formData.password}
        onChange={handleChange}
      />
      
      {formErrors.password && <span>{formErrors.password}</span>}
      <div className="input-group">
  <div className="group2">
  <input
    type="text"
    name="date"
    className="group2-input"
    value={formData.date}
    onChange={handleChange}
    placeholder="Nascimento"
    style={{ marginBottom: "0" }}
  />



<label className="data-label">
DDD/MM/AAAA
</label>

    <input
      type="text"
      name="country"
      placeholder="País"
      className="group2-input"

      value={formData.country}
      onChange={handleChange}
    />
  </div>
  <div className="group3">
    <input
      type="text"
      name="profession"
      placeholder="Profissão"
      className="group3-input"
      value={formData.profession}
      onChange={handleChange}
    />
    <input
      type="text"
      name="city"
      placeholder="Cidade"
      className="group3-input"
      value={formData.city}
      onChange={handleChange}
    />
       <select
      name="relationship"
      value={formData.relationship}
      onChange={handleSelectChange} // Usando o novo manipulador de eventos
    >
      <option value="">Relacionamento</option>
      <option value="Solteiro">Solteiro</option>
      <option value="Viúvo">Viúvo</option>
      <option value="Casado">Casado</option>
    </select>
    {formErrors.relationship && <span>{formErrors.relationship}</span>}
  </div>
</div>

   
      <button type="submit">Criar conta</button>
    </FormContainer>
    </Container>
  );
};

export default Step1;