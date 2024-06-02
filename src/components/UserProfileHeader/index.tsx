import React from 'react';
import { ProfileHeader, UserProfile } from './style';
import photo from '../../assets/img/profile-image.png';
import MinimalUserProfileHeader from './Minimal';
import edit from "../../assets/img/edit.svg";

interface UserProfileHeaderProps {
  relationshipStatus: string;

  buttonContent: string;
  handleButton?: () => void;
  minimal?: boolean;
}

const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({
  relationshipStatus,
  buttonContent,
  handleButton,
  minimal = false,
}) => {
  if (minimal) {
    return <MinimalUserProfileHeader photo={photo} edit={edit} />;
  }

  const staticName = "Juliana Barros"; // Nome estático

  return (
    <ProfileHeader>
      <UserProfile>
        <img src={photo} alt="" />
        <h2>{staticName}</h2>
        <p>{relationshipStatus}</p>
      </UserProfile>
      <button onClick={handleButton}>{buttonContent}</button>
    </ProfileHeader>
  );
};

export default UserProfileHeader;
