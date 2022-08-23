import React, { useState } from 'react';

import { Button } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import { CartWidget } from './components/CartWidget/CartWidget';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  const [cantidadCarrito, setCantidadCarrito] = useState(0);

const agregarProducto = (cantidad) =>
{
  setCantidadCarrito(cantidad);
}

  return (
    <div className="App">
      <NavBar> 
        <CartWidget cantidad={cantidadCarrito} />
      </NavBar>
      <br /><br /><br /><br />

      <ItemListContainer  greeting="Bienvenido" onAdd={agregarProducto}/>

      
     
    </div>
  );
}

export default App;
