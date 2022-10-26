import { createBrowserRouter } from 'react-router-dom';
import CoursesLayout from '../layouts/CoursesLayout/CoursesLayout';
import Main from '../layouts/Main/Main';
import Blog from '../pages/Blog/Blog';
import Checkout from '../pages/Checkout/Checkout';
import Course from '../pages/Course/Course';
import Courses from '../pages/Courses/Courses';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Register from '../pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', loader: async () => fetch(`https://tuts-point-api.vercel.app/topic/all`), element: <Home /> },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/checkout/:id',
        loader: async ({ params }) => fetch(`https://tuts-point-api.vercel.app/course/${params.id}`),
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: 'course/:id',
        loader: async ({ params }) => fetch(`https://tuts-point-api.vercel.app/course/${params.id}`),
        element: <Course />,
      },
    ],
  },

  {
    path: '/topic',
    element: <CoursesLayout />,
    children: [
      {
        path: '/topic',
        loader: async () => fetch(`https://tuts-point-api.vercel.app/topic/all`),
        element: <Courses />,
      },
      {
        path: '/topic/:tag',
        loader: async ({ params }) => fetch(`https://tuts-point-api.vercel.app/topic/${params.tag}`),
        element: <Courses />,
      },
    ],
  },
  { path: '*', element: <ErrorPage /> },
]);
