import React, { useState } from 'react';
import { Container } from '../../pages/Register/style';
import LoginBackground from '../LoginBackground';
import logo from "../../assets/img/logo-orkut-simples.svg";
import { FormPassword } from '../../pages/Password/styles';
import { NewPassword } from './form-two';

export const PasswordUpdate = () => {
  const [showVerificationForm, setShowVerificationForm] = useState(false);

  const handleSendCode = () => {
    setShowVerificationForm(true);
  };

  return (
    <Container>
      <LoginBackground/>
      {showVerificationForm ? (
        <NewPassword />
      ) : (
        <FormPassword>
          <img src={logo} alt="Logo" />
          <h2>Recupere sua Senha</h2>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
          />
          <button type="button" className='btn-submit' onClick={handleSendCode}>
            Enviar Código
          </button>
          <div>
            <h3>Lembrou sua Senha?</h3>
            <button type="submit" className="btn-bck">Entrar com as credenciais</button>
          </div>
        </FormPassword>
      )}
    </Container>
  );
}
