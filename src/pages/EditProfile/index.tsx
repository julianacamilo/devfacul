import React, { useContext, useEffect } from "react";
import EditForm from "../../components/EditForm";
import { Container, ProfileSide} from "./style";
import UserProfileHeader from '../../components/UserProfileHeader';
import { UserContext } from "../../context/user-context";
import Modal from "../../components/Modal";
import MinimalUserProfileHeader from "../../components/UserProfileHeader/Minimal";
import photo from '../../assets/img/profile-image.png';
import ellipse from "../../assets/img/ellip.svg";
import edit from "../../assets/img/edit.svg";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


interface FormData {
  date: string;
  profession: string;
  country: string;
  city: string;
  relationship: string;
}

const EditProfile: React.FC = () => {
  const initialProfileData = {
    date: '',
    profession: '',
    country: '',
    city: '',
    relationship: '',
  };

  // UserContext context is used to get user login information.

  const { setUserIsLogged, userToken } = useContext(UserContext)!; 

  const navigate = useNavigate();

  useEffect(() => {
    setUserIsLogged(true);
  }, [setUserIsLogged]);

  // The handleEditFormSubmit function is responsible for sending a PUT request to update the user's profile.

  const handleEditFormSubmit = async (formData: FormData) => {
    try {
      // Sending a PUT request to update the profile
      const response = await axios.put(
        'http://localhost:3001/profile', 
        formData,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      

      if (response.status === 200) {
        console.log('Profile updated successfully');
        navigate('/profile'); // Navigating back to the profile
       
      } else {
        console.error('Failed to update profile');
      
      }
    } catch (error) {
      console.error('Erro ao atualizar o perfil:', error);
    }
  };
  return (
    <>
    <Container>
      <ProfileSide>
      <MinimalUserProfileHeader photo={photo} edit={edit}/>
      </ProfileSide>
      <EditForm initialData={initialProfileData} onSubmit={handleEditFormSubmit} />

    </Container>
  
    </>
  );
}

export default EditProfile;