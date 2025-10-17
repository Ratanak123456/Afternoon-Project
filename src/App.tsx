import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./app/Layout";
import Home from "./app/Home";
import Contact from "./app/Contact";
import Explore from "./app/Explore";
import NotFound from "./app/NotFound";
import Detail from "./app/Detail";
import LoginForm from "./components/auth/login/LoginForm";
import AuthMiddleware from "./components/auth/middleware/AuthMiddleware";

const router = createHashRouter([
  // Public Routes (Accessible without authentication)
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />, // Home component layout
      },
    ],
  },
  { path: "/Auth", element: <LoginForm /> },
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
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
        path: "/",
        element: <AuthMiddleware />, // Protect all child routes
        children: [
          {
            path: "/detail/:type/:id",
            element: <Detail />,
          },
        ],
      },
      // Redirect all unknown routes to login
      {
        path: "*",
        element: <Layout />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
