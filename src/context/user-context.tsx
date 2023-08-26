import React, { useState, createContext, ReactNode } from 'react';

interface UserContextType {
  userIsLogged: boolean;
  setUserIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  userToken: string; // Adicione a propriedade userToken
  setUserToken: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = (props: UserProviderProps) => {
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [userToken, setUserToken] = useState(''); // Inicialize userToken

  return (
    <UserContext.Provider
      value={{
        userIsLogged,
        setUserIsLogged,
        userToken,      // Inclua userToken no valor do contexto
        setUserToken,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
