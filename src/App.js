import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import Strategy from './pages/Strategy';

//import About from './pages/About';
//import Products from './pages/Products';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage/>} />
        <Route path="/Strategy" element={<Strategy/>} />
        {/*
        <Route path="/about-us" element={<About />} />
        <Route path="/products" element={<Products />} />
        */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
