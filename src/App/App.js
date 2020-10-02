import React from 'react';
import NavBar from '../NavBar/NavBar.js'
import Footer from '../Footer/Footer.js'
import Routes from './Routes.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
