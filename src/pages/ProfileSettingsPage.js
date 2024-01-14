import TitlePage from 'components/TitlePage/TitlePage';
import UserCard from 'components/UserCard/UserCard';
import UserForm from 'components/UserForm/UserForm';

const ProfileSettingsPage = () => {
  return (
    <>
      <TitlePage>Profile Settings</TitlePage>
      <UserCard />
      <UserForm />
    </>
  );
};
export default ProfileSettingsPage;
