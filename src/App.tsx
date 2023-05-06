import React from 'react';
import './App.css';
import Navbar from './View/Navbar/Navbar';
import Home from './View/Login/Home';
import Footer from './View/Footer/Footer';
import Contact from './View/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
