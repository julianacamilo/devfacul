import { useEffect,useContext, useState} from 'react';
import SearchIcon from '../../assets/img/Search.svg';
import { Container,InputContainer} from './style';
import UserProfileHeader from '../../components/UserProfileHeader';
import ListOfFriends from '../../components/ListOfFriends';
import ListOfCommunity from '../../components/ListOfCommunity';
import ProfileInfo from '../../components/ProfileInfo';
import { useNavigate } from 'react-router';
import { UserContext } from '../../context/user-context';
import axios from 'axios';
function Profile() {
  const userContext = useContext(UserContext); 
 const {setUserIsLogged} = useContext(UserContext)!;
  
  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState({
    relationship: 'Solteiro', 
    country: 'Brasil',
  });

  // The fetchProfileData function is responsible for fetching user profile data.
  const fetchProfileData = async () => {
    try {
      if (userContext) {
        const response = await axios.get('http://localhost:3001/profile', {
          headers: {
            Authorization: `Bearer ${userContext.userToken}`, // Use userContext aqui
          },
        });

        const fetchedUserProfile = response.data.userProfile;
        setUserProfile(fetchedUserProfile);
      }
    } catch (error) {
      console.error('Erro ao buscar perfil:', error);
    }
  };

  // The useEffect effect is used to set the user as logged in and fetch the profile data.
  
  useEffect(() => {
 
    setUserIsLogged(true);
    fetchProfileData(); 
  }, [setUserIsLogged]);


  return ( 
    <Container>
      <div className='inputDiv'>
      <InputContainer>
      <img src={SearchIcon} alt="" />
      <input type="text" placeholder='Pesquisar no Orkut' />
      </InputContainer>
      </div>
      <div className='profileHeaderDiv'>
      <UserProfileHeader
             relationshipStatus={`${userProfile.relationship}, ${userProfile.country}`}
          buttonContent="Editar meu perfil"
          handleButton={() => { navigate('/edit-profile')}}
        />
      </div>
      <div className='ProfileInfoDiv'>
      <ProfileInfo /> 
      </div>

      <div className='ListFriendsDiv'>
      <ListOfFriends />
      </div>
      <div className='ListCommunityDiv'>
      <ListOfCommunity />
      </div>
      
      
     
    </Container>
   );
}

export default Profile;