import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CoursesLayout from './layouts/CoursesLayout/CoursesLayout';
import Main from './layouts/Main/Main';
import Checkout from './pages/Checkout/Checkout';
import Course from './pages/Course/Course';
import Courses from './pages/Courses/Courses';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        { path: '/', loader: async () => fetch(`http://localhost:5000/topic/all`), element: <Home /> },
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
          path: '/checkout/:id',
          loader: async ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
          element: (
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          ),
        },
        {
          path: 'course/:id',
          loader: async ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
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
          loader: async () => fetch(`http://localhost:5000/topic/all`),
          element: <Courses />,
        },
        {
          path: '/topic/:tag',
          loader: async ({ params }) => fetch(`http://localhost:5000/topic/${params.tag}`),
          element: <Courses />,
        },
      ],
    },
    { path: '*', element: <ErrorPage /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />;
      <Toaster />
    </>
  );
}

export default App;
