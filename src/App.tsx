import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import Layout from './app/Layout';
import Home from './app/Home';
import Contact from './app/Contact';
import Explore from './app/Explore';
import NotFound from './app/NotFound';

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
