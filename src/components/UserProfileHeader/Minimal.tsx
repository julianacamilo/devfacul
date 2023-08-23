import React from 'react';
import { ProfileHeader, UserProfile,IconWrapper, EllipseIcon, EditIcon } from './style';
import ellipse from "../../assets/img/ellip.svg";
import edit from "../../assets/img/edit.svg";

 interface MinimalUserProfileHeaderProps {
    photo: string;
    ellipse: string;
    edit: string;
    
  }
  
const MinimalUserProfileHeader: React.FC<MinimalUserProfileHeaderProps> = ({ photo, ellipse, edit }) => {
    return (
        <ProfileHeader>
        <UserProfile>
          <img src={photo} alt="" />
          <IconWrapper>
            <EllipseIcon src={ellipse} alt="Ellipse" />
            <EditIcon src={edit} alt="Edit" />
          </IconWrapper>
        </UserProfile>
      </ProfileHeader>
    );
  };

  export default MinimalUserProfileHeader;