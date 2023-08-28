import React, { useState, createContext, ReactNode, useEffect } from 'react';

interface UserContextType {
  userIsLogged: boolean;
  setUserIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  userToken: string;
  setUserToken: React.Dispatch<React.SetStateAction<string>>;
}

//context called UserContext is defined to store information about the user's login state and his authentication token.

export const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
  children: ReactNode;
}

//The UserProvider provider wraps child components with context, allowing them to access and update user information.
//O estado de login e o token são gerenciados usando os hooks useState, e o efeito useEffect é usado para verificar se há um token no localStorage e, se houver, definir o estado de login e o token.

export const UserProvider = (props: UserProviderProps) => {
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [userToken, setUserToken] = useState('');


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
