import React, { useState, createContext, ReactNode, useEffect } from 'react';

interface UserContextType {
  userIsLogged: boolean;
  setUserIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  userToken: string;
  setUserToken: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = (props: UserProviderProps) => {
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [userToken, setUserToken] = useState('');

  // Recuperar o token do localStorage quando o componente é montado
  useEffect(() => {
    const storedToken = localStorage.getItem('userToken');
    if (storedToken) {
      setUserToken(storedToken);
      setUserIsLogged(true);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        userIsLogged,
        setUserIsLogged,
        userToken,
        setUserToken,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
