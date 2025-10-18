import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Layout from './app/Layout';
import Home from './app/Home';
import Contact from './app/Contact';
import Explore from './app/Explore';
import NotFound from './app/NotFound';
import Detail from './app/Detail';

import LoginForm from './components/auth/login/LoginForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/detail/:type/:id",
        element: <Detail />,
      },
      {
        path: "/auth",
        element: <LoginForm/>,
      }
    ]
  },
]);

function App() {
  
  return (
    <>
    <RouterProvider router={router} />
    </>
    
  )
}


export default App
