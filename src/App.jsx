// src/App.jsx
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Chat from './components/Chat/Chat';
import './App.css';
import ImageUpload from './components/Chat/ImageUpload';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
  {
    path: "/predict",
    element: <ImageUpload />,
  },
  
]);

function App() {
  return (
    
      <RouterProvider router={router} />
    
  );
}

export default App;
