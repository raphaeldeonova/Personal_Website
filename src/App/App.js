import React from 'react';
import NavBar from '../NavBar/NavBar.js'
import Cover from '../Cover/Cover.js'
import ContactList from '../ContactList/ContactList.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Cover />
      <ContactList />
    </div>
  );
}

export default App;
