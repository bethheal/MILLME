import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { AnimatePresence } from 'framer-motion';

const RootLayout = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <main>
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;
