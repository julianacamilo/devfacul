import React, { useContext } from "react";
import { HeaderWrapper,HeaderLogin,NavContent,PerfilContent, InputContent,ContainerInputWUser } from "./style";

import SearchIcon from '../../assets/img/Search.svg'
import { UserContext } from "../../context/user-context";
import caretIcon from '../../assets/img/CaretDown.svg'
import photo from '../../assets/img/profile-image.png';
function Header() {

  const { userIsLogged } = useContext(UserContext)!;
  console.log(userIsLogged);
  return (  
    <>
    {!userIsLogged && <HeaderWrapper>
      <div>
      <h2>UOLkut</h2>
        <nav>
          <a href="/">Sobre o Orkut</a>
          <a href="/">Centro de segurança</a>
        </nav>
      </div>
    </HeaderWrapper>}
    {userIsLogged && 
    <HeaderLogin>
      <div>
      <NavContent>  
        <h2>UOLkut</h2>
        <nav>
        <ul>
          <li><a href="/">Início</a></li>
          <li className="profile-link"><a href="/profile">Perfil</a></li>
          <li><a href="/community">Comunidades</a></li>
          <li><a href="/games">Jogos</a></li>
        </ul>
        </nav>
      </NavContent>
      <ContainerInputWUser>
      <InputContent >
        <img src={SearchIcon} alt="" />
        <input type="text" placeholder="Pesquisar no UOLkut" />
      </InputContent>
      <PerfilContent>
        <img src={photo} alt="" />
        <p>Gabriel Barbosa</p>
        <img src={caretIcon} alt="" />
        </PerfilContent>
      </ContainerInputWUser>
      </div>
    </HeaderLogin>}
    </>
  );
}

export default Header;