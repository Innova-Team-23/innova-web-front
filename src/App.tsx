import React from 'react';
import './App.css';
// import Homeback from './ViewBack/HomeBack/Homeback';
import Sidebar from './ViewBack/Layout/Sidebar';

import Navbar from './View/Navbar/Navbar';
import Footer from './View/Footer/Footer';

function App() {
  return (
    <div>
      <Sidebar/>
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
