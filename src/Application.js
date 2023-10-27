import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes/routes';
import Loader from './components/common/Loader/Loader';

const Application = () => {
  const router = createBrowserRouter([...routes]);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default Application;
