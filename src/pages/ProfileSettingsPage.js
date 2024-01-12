import TitlePage from 'components/TitlePage/TitlePage';
import UserCard from 'components/UserCard/UserCard';
import UserForm from 'components/UserForm/UserForm';

const ProfileSettingsPage = () => {
  return (
    <div>
      <TitlePage>TitlePage</TitlePage>
      <UserForm />
      <UserCard />
    </div>
  );
};
export default ProfileSettingsPage;
