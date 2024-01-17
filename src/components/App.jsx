import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import DiaryPage from 'pages/DiaryPage/DiaryPage';
import ProductsPage from 'pages/ProductsPage/ProductsPage';
import ExercisesPage from 'pages/ExercisesPage/ExercisesPage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

import WelcomePage from 'pages/WelcomePage/WelcomePage';
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

    //<Routes>
      //<Route path="/" element={<Layout />}>
        //<Route index element={<WelcomePage />} />
        //<Route path="signup" element={<SignUpPage />} />
        //<Route path="signin" element={<SignInPage />} />
        //<Route path="diary" element={<DiaryPage />} />
        //<Route path="products" element={<ProductsPage />} />
        //<Route path="exercises" element={<ExercisesPage />}>
         // <Route path="body_parts" element={<BodyParts />} />
          //<Route path="muscles" element={<Muscles />} />
          //<Route path="equipment" element={<Equipment />} />
        //</Route>
        //<Route path="profile" element={<ProfilePage />} />
        //<Route path="*" element={<ErrorPage />} />
      //</Route>
    //</Routes>*/

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
                <Route path="body_parts" element={<BodyParts />} />
          <Route path="muscles" element={<Muscles />} />
          <Route path="equipment" element={<Equipment />} />
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
      ) : <div>Loader</div>}
    </>

  );
};
