import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { tokenSelector } from '../../redux/auth/selectors';

const PublicRoute = ({ children }) => {
  const isToken = useSelector(tokenSelector);
  const location = useLocation();

  return !isToken ? children : <Navigate to={location.state ?? '/profile'} />;
  // Потрібна умова. Якщо ProfilePage вже заповнена, то переадресація на DiaryPage, інакше на ProfilePage
};

export default PublicRoute;
