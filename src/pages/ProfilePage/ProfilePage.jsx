import React from 'react';
import { Container } from 'components/styles/Container/Container';
import TitlePage from 'components/TitlePage/TitlePage';
import UserCard from 'components/UserCard/UserCard';
import UserForm from 'components/UserForm/UserForm';
import { WrapperProfilePage } from './ProfilePage.styled';

const ProfilePage = () => {
  return (
    <Container>
      <TitlePage>Profile Settings</TitlePage>
      <WrapperProfilePage>
        <UserCard />
        <UserForm />
      </WrapperProfilePage>
    </Container>
  );
};

export default ProfilePage;
