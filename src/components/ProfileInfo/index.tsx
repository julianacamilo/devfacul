import React, { useState, useEffect, useContext } from 'react';
import {
  ProfileInfoSection,
  PhraseContainer,
  QualitiesContainer,
  StarContainer,
  PersonalInformation,
  UserInterests,
  Triangle,
} from './style';
import starIcon from '../../assets/img/Star.svg';
import heartIcon from '../../assets/img/Heart.svg';
import smileyIcon from '../../assets/img/Smiley.svg';
import thumbsUpIcon from '../../assets/img/ThumbsUp.svg';
import { UserContext, UserProvider } from '../../context/user-context';
import Cookies from 'js-cookie';
import axios from 'axios';
import EditForm from '../EditForm';

   export interface UserProfile {
  relationship: string;
  date: string;
  profession: string;
  city: string;
  country: string;

}

function ProfileInfo() {
  const userContext = useContext(UserContext);

  const [userProfile, setUserProfile] = useState({
    relationship: '',
    date: '',
    profession: '',
    city: '',
    country: '',

  });
  const [isLoading, setIsLoading] = useState(true); 

  // Function to fetch user profile data

  const fetchProfileData = async () => {
    if (!userContext) {
      console.error('Context not available');
      return;
    }
    console.log('Token:', userContext.userToken);
    try {
      const response = await axios.get('http://localhost:3001/profile', {
        headers: {
          Authorization: `Bearer ${userContext.userToken}`,
        },
      });
      console.log('Profile Data:', response.data); 
      const fetchedUserProfile = response.data.userProfile;
      setUserProfile(fetchedUserProfile);
      setIsLoading(false);
    } catch (error) {
      console.error('Erro ao buscar perfil:', error);
      setIsLoading(false);
    }
  };

 
// Effect to fetch profile data when assembling the component

  useEffect(() => {
    fetchProfileData();
  }, []);


// Function to handle updating profile data
  const handleUpdateProfile = (updatedData: UserProfile) => {
    setUserProfile(updatedData); 
  };
  return (
   
      <ProfileInfoSection>
           {isLoading ? ( 
                <p>Loading...</p>
            ) : (
              <>
              
        <h2>Boa tarde!</h2>
       
        <Triangle />
        <PhraseContainer>
          <p>Programar sem café é igual poeta sem poesia.</p>
        </PhraseContainer>

        <QualitiesContainer>
          <div>
            <h3>Fãs</h3>
            <StarContainer>
              <img src={starIcon} alt="" />
              <p>85</p>
            </StarContainer>
          </div>

          <div>
            <h3>Confiável</h3>
            <img src={smileyIcon} alt="" />
            <img src={smileyIcon} alt="" />
          </div>
          <div>
            <h3>Legal</h3>
            <img src={thumbsUpIcon} alt="" />
            <img src={thumbsUpIcon} alt="" />
            <img src={thumbsUpIcon} alt="" />
          </div>

          <div>
            <h3>Sexy</h3>
            <img src={heartIcon} alt="" />
            <img src={heartIcon} alt="" />
          </div>
        </QualitiesContainer>

        <PersonalInformation>
          <div>
            <h3>Relacionamento:</h3>
            <p>{userProfile?.relationship}</p>
          </div>
          <div>
            <h3>Aniversário:</h3>
            <p>{userProfile?.date}</p>
          </div>
          <div>
            <h3>Idade:</h3>
            <p>20</p>
          </div>
          <div>
            <h3>Quem sou eu:</h3>
            <p>{userProfile?.profession}</p>
          </div>
         
          <div>
            <h3>Moro:</h3>
            <p>{userProfile?.city}</p>
          </div>
          <div>
            <h3>País:</h3>
            <p>{userProfile?.country}</p>
          </div>
          

          <UserInterests>
            <div>
              <h3>Músicas:</h3>
              <p>Trap</p>
              <p>Rap</p>
              <p>Indie</p>
              <button>Ver todos</button>
            </div>
            <div>
              <h3>Filmes:</h3>
              <p>A rede social</p>
              <p>Meu amigo Totoro</p>
              <button>Ver todos</button>
            </div>
          </UserInterests>
    
        </PersonalInformation>
        </>
            )}

      </ProfileInfoSection>

  );
}

export default ProfileInfo;