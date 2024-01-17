import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import Loader from 'components/Loader';
// import Header from 'Header/Header';

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Suspense fallback={<Loader />}> */}
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
