import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Error from './pages/error/Error';
import Home from './pages/home/Home';
import Housing from './pages/housing/Housing';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="/housing/*" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
