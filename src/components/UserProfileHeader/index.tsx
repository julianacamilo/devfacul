import React from 'react';
import { ProfileHeader, UserProfile } from './style';
import photo from '../../assets/img/profile-image.png';
import MinimalUserProfileHeader from './Minimal';
import ellipse from "../../assets/img/ellip.svg";
import edit from "../../assets/img/edit.svg";

interface UserProfileHeaderProps {
  name: string;
  status: string;
  buttonContent: string;
  handleButton?: () => void;
  minimal?: boolean; // Add a minimal prop to indicate if it should be minimal
}


const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({
  name,
  status,
  buttonContent,
  handleButton,
  minimal = false, // Set a default value
}) => {
  if (minimal) {
    return <MinimalUserProfileHeader photo={photo} ellipse={ellipse} edit={edit} />;
  }

  return (
    <ProfileHeader>
      <UserProfile>
        <img src={photo} alt="" />
        <h2>{name}</h2>
        <p>{status}</p>
      </UserProfile>
      <button onClick={handleButton}>{buttonContent}</button>
    </ProfileHeader>
  );
};

export default UserProfileHeader;
