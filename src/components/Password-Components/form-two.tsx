import React from 'react'
import { Container, FormContainer} from '../../pages/Register/style'
import logo from "../../assets/img/logo-orkut-simples.svg";
import { FormPassword } from '../../pages/Password/styles';
import { useNavigate } from 'react-router-dom';
export const NewPassword = () => {

  const navigate = useNavigate()
  
  // Function to handle verification form submission
    const handleSubmit = () => {
      navigate("/")
    }
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
          <button type="button" className='btn-one' onClick={handleSubmit}>
           Salvar
          </button>
          <div>
            <h3 onClick={handleSubmit}>Lembrou sua Senha?</h3>
            <button type="submit" className="btn-bck" onClick={handleSubmit}>Entrar com as credenciais</button>
          </div>
    </FormPassword>

  )
}
