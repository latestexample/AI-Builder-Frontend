import { lazy } from 'react';
import MainLayout from '../components/layouts/MainLayout/MainLayout';
import NotFound from '../components/pages/NotFound/NotFound';
import NotRecord from '../components/pages/NoRecord/NotRecord';
import Home from '../components/pages/Home/Home';
import Signup from '../components/pages/Signup/Signup';
import ProfileInformation from '../components/pages/ProfileInformation/ProfileInformation';
const LoginLayout = lazy(() =>
  import('../components/layouts/LoginLayout/LoginLayout'),
);
const Login = lazy(() => import('../components/pages/Login/Login'));
const Preview = lazy(() => import('../components/pages/Preview/Preview'));
const currentPath = window.location.pathname;
export const routes = [
  {
    path: '',
    element: <LoginLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/profile-information',
        element: <ProfileInformation />,
      },
    ],
  },
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: 'no-record',
        element: <NotRecord />,
      },
    ],
  },
  {
    path: 'template',
    element: '',
    children: [
      {
        path: 'preview',
        element: <Preview />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: 'no-record',
        element: <NotRecord />,
      },
    ],
  },
];
