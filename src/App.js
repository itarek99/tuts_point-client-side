import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CoursesLayout from './layouts/CoursesLayout/CoursesLayout';
import Main from './layouts/Main/Main';
import Course from './pages/Course/Course';
import Courses from './pages/Courses/Courses';
import Home from './pages/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        { path: '/', loader: async () => fetch(`http://localhost:5000/topic/all`), element: <Home /> },
        {
          path: '/login',
          element: <h1 className='pt-20'>Login</h1>,
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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
