 
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import React from 'react';
import ErrorPage from './pages/ErrorPage';
import { Password } from './pages/Password/Password';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<ErrorPage />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/edit-profile',
        element: <EditProfile />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/password',
        element: <Password />
      }
    ]
  }
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
