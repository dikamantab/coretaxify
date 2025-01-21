import React, {  } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Fitur from './Components/Fitur/Fitur';
import Benefit from './Components/Benefit/Benefit';
import Articles from './Components/Articles/Articles';
import Partner from './Components/Partner/Partner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fitur" element={<Fitur />} />
        <Route path="/benefit" element={<Benefit />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/partner" element={<Partner />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;