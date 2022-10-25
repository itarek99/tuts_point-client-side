import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main/Main';
import Home from './pages/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [{ path: '/', element: <Home /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
