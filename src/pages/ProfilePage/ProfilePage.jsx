import TitlePage from 'components/TitlePage/TitlePage';
import UserCard from 'components/UserCard/UserCard';
import UserForm from 'components/UserForm/UserForm';
import { Container } from 'components/styles/Container/Container';
import React from 'react';

const ProfilePage = () => {
  return (
    <Container>
      <TitlePage>Profile Settings</TitlePage>
      <UserCard />
      <UserForm />
    </Container>
  );
};

export default ProfilePage;
