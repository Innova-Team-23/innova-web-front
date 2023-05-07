import React from 'react';
import './App.css';
import Homeback from './ViewBack/HomeBack/Homeback';
import Home from './View/Home/Home';
import Login from './View/Login/Login';
import Registre from './View/Login/Registre';
import Profil from './ViewBack/Profil/Profil';
import Historique from './View/Historique/Historique';
import Apropos from './View/Apropos/Apropos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './View/Layout/Navbar';

function App() {
  return (
    <div>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/historique" element={<Historique />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
