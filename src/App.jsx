import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About/about';
import RootLayout from './layouts/RootLayout';
import Products from './pages/Products/products';
import Contact from './pages/Contact/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'products', element: <Products /> },
      { path: 'contact', element: <Contact/> },


    ],
    
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
