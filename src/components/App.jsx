import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import DiaryPage from 'pages/DiaryPage/DiaryPage';
import ProductsPage from 'pages/ProductsPage/ProductsPage';
import ExercisesPage from 'pages/ExercisesPage/ExercisesPage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

import BodyParts from './BodyParts/BodyParts';
import Muscles from './Muscles/Muscles';
import Equipment from './Equipment/Equipment';

import 'react-datepicker/dist/react-datepicker.css';

import { lazy } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { refreshThunk } from '../redux/auth/thunks';
import PrivateRoute from 'guards/PrivateRoute';
import PublicRoute from 'guards/PublicRoute';
import { selectorAppState } from '../redux/appState/selectors';
import { Navigate } from 'react-router-dom/dist';
const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectorAppState);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      {!isLoading ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <WelcomePage />
                </PublicRoute>
              }
            />
            <Route
              path="signup"
              element={
                <PublicRoute>
                  <SignUpPage />
                </PublicRoute>
              }
            />
            <Route
              path="signin"
              element={
                <PublicRoute>
                  <SignInPage />
                </PublicRoute>
              }
            />
            <Route
              path="diary"
              element={
                <PrivateRoute>
                  <DiaryPage />
                </PrivateRoute>
              }
            />
            <Route
              path="products"
              element={
                <PrivateRoute>
                  <ProductsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="exercises"
              element={
                <PrivateRoute>
                  <ExercisesPage />
                </PrivateRoute>
              }
            >
              <Route index element={<Navigate to="body_parts" replace />} />
              <Route
                path="body_parts"
                element={
                  <PrivateRoute>
                    <BodyParts />
                  </PrivateRoute>
                }
              />
              <Route
                path="muscles"
                element={
                  <PrivateRoute>
                    <Muscles />
                  </PrivateRoute>
                }
              />
              <Route
                path="equipment"
                element={
                  <PrivateRoute>
                    <Equipment />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route
              path="profile"
              element={
                <PrivateRoute>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      ) : (
        <div>Loader</div>
      )}
    </>
  );
};
