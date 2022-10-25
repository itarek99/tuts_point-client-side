import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CoursesLayout from './layouts/CoursesLayout/CoursesLayout';
import Main from './layouts/Main/Main';
import Courses from './pages/Courses/Courses';
import Home from './pages/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [{ path: '/', loader: async () => fetch(`http://localhost:5000/topic/all`), element: <Home /> }],
    },

    {
      path: '/topic',
      element: <CoursesLayout />,
      children: [
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
