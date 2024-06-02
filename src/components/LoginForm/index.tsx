import React, { useState, ChangeEvent, FormEvent, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user-context';
import Modal from "../../components/Modal";
import logo from "../../assets/img/logo-orkut-simples.svg";
import Cookies from 'js-cookie';
import {
    CreateAccountButton,
    CustomCheckboxInput,
    CustomCheckboxLabel,
    EmailInput,
    ErrorContainer,
    ErrorMessage,
    ForgotPasswordLink,
    Form,
    LoginButton,
    LoginFormContainer,
    LoginTitle,
    LogoImage,
    PasswordInput,
    RememberMeContainer,
    RememberMeText,
} from './style';
import axios from 'axios';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isLoginAttempted, setIsLoginAttempted] = useState(false);
    const [rememberPassword, setRememberPassword] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const { setUserIsLogged, setUserToken} = useContext(UserContext)!;

   
    
    useEffect(() => {
        setUserIsLogged(false);
    }, [setUserIsLogged]);

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
          const response = await axios.post('http://localhost:3001/login', {
            email,
            password,
          });
    
          if (response.status === 200) {
            const token = response.data.token;
            setUserIsLogged(true);
    
            setUserToken(token);
    
            navigate('/profile');
          } else {
            setLoginError('Credenciais inválidas');
          }
        } catch (error) {
          console.error('Erro ao fazer login:', error);
          setLoginError('Erro ao fazer login');
        }
      };
    const handleEmailBlur = () => {
        if (isFormSubmitted) {
            setEmailError(email ? '' : 'Campo de e-mail não pode ser vazio.');
        }
    };

    const handlePasswordBlur = () => {
        if (isFormSubmitted) {
            setPasswordError(password ? '' : 'Campo de senha não pode ser vazio.');
        }
    };

    const handleRememberMeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRememberPassword(e.target.checked);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleEmailBlur();
        handlePasswordBlur();

        // Verifique se há erros
        if (email && password && !emailError && !passwordError) {
            handleLogin();
        }

        setIsFormSubmitted(true);
    };

    const handleCreateProfile = () => {
        navigate('/register');
    };


    return (
        <LoginFormContainer>
            <LogoImage src={logo} alt="Logo" />
            <LoginTitle>Acesse</LoginTitle>
            <Form  onSubmit={handleSubmit}>
                <EmailInput
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleEmailBlur}
                    placeholder="E-mail"
                />
                 {isFormSubmitted && emailError && (
                    <ErrorContainer>
                        <ErrorMessage>{emailError}</ErrorMessage>
                    </ErrorContainer>
                )}
                <PasswordInput
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={handlePasswordBlur}
                    placeholder="Senha"
                />
                {isFormSubmitted && passwordError && (
                    <ErrorContainer>
                        <ErrorMessage>{passwordError}</ErrorMessage>
                    </ErrorContainer>
                )}
                {isLoginAttempted && loginError && (
                    <ErrorContainer>
                        <ErrorMessage>{loginError}</ErrorMessage>
                    </ErrorContainer>
                )}
                <RememberMeContainer>
                    <CustomCheckboxInput
                        id="rememberMe"
                        type="checkbox"
                        checked={rememberPassword}
                        onChange={handleRememberMeChange}
                    />
                    <CustomCheckboxLabel htmlFor="rememberMe" />
                    <label htmlFor="rememberMe">
                        <RememberMeText>Lembrar minha senha</RememberMeText>
                    </label>
                </RememberMeContainer>

                <LoginButton type="submit">Entrar na conta</LoginButton>
                <CreateAccountButton type="button" onClick={handleCreateProfile}>
                    Criar uma conta
                </CreateAccountButton>
                <ForgotPasswordLink title="Esqueci a minha senha" href="http://localhost:3000/password" >
                    Esqueci a minha senha
               
                </ForgotPasswordLink>
              
            </Form>
        </LoginFormContainer>
    );
}

export default LoginForm;