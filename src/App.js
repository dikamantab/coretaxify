import React, {  } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Fitur from './Components/Fitur/Fitur';
import Benefit from './Components/Benefit/Benefit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fitur" element={<Fitur />} />
        <Route path="/benefit" element={<Benefit />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;