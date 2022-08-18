import React, { useState } from 'react';

import { Button } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <br /><br /><br /><br />

      <ItemListContainer  greeting="Bienvenido"/>

      
     
    </div>
  );
}

export default App;
