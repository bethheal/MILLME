import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const RootLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />

      
    </>
  );
};

export default RootLayout;
