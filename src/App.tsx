import React from 'react';
import './App.css';
// import Homeback from './ViewBack/HomeBack/Homeback';


import Navbar from './View/Navbar/Navbar';
import Footer from './View/Footer/Footer';
import Contact from './View/Contact/Contact';
import Historique from './View/Historique/Historique';

function App() {
  return (
    <div>
  
      <Navbar/>
      <Historique/>
    </div>
  );
}

export default App;
