import Header from 'components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
// import Loader from 'components/Loader';

const Layout = () => {
  return (
    <>
      <Header />
      {/* <Suspense fallback={<Loader />}> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
