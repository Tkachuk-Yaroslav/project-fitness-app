import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { tokenSelector } from '../../redux/auth/selectors';

const PrivateRoute = ({ children }) => {
  const isToken = useSelector(tokenSelector);
  const {user} = useSelector(state => state.auth);
  const location = useLocation();
  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        user
      });
    });
  };

  return isToken ? renderChildren() : <Navigate to="/" state={location} />;
};

export default PrivateRoute;
