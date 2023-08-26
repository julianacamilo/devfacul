import React from 'react';
import { ProfileHeader, UserProfile,IconWrapper, EditIcon } from './style';
import ellipse from "../../assets/img/ellip.svg";
import edit from "../../assets/img/edit.svg";

 interface MinimalUserProfileHeaderProps {
    photo: string;
    edit: string;
    
  }
  
const MinimalUserProfileHeader: React.FC<MinimalUserProfileHeaderProps> = ({ photo, edit }) => {
    return (
        <ProfileHeader>
        <UserProfile>
          <img src={photo} alt="" />
          <IconWrapper>
            <EditIcon src={edit} alt="Edit" />
          </IconWrapper>
        </UserProfile>
      </ProfileHeader>
    );
  };

  export default MinimalUserProfileHeader;