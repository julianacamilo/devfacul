import React from 'react'
import { Container, FormContainer} from '../../pages/Register/style'
import logo from "../../assets/img/logo-orkut-simples.svg";
import { FormPassword } from '../../pages/Password/styles';
export const NewPassword = () => {
  return (

  
<FormPassword>
    <img src={logo} alt="Logo" />
    <h2>Nova Senha</h2>
<div className="inputs">
     <input
            type="text"
            name="email"
            placeholder="Informe o código"
          />
          <input
            type="password"
            name="password"
            placeholder="Nova Senha"
          />
          <input
           type="password"
           name="password"
           placeholder="Confirmar a Senha"
          />
          </div>
          <button type="button" className='btn-one'>
           Salvar
          </button>
          <div>
            <h3>Lembrou sua Senha?</h3>
            <button type="submit" className="btn-two">Entrar com as credenciais</button>
          </div>
    </FormPassword>

  )
}
