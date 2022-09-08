import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import { CartWidget } from './components/CartWidget/CartWidget';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartList } from './components/CartList/CartList';


function App() {
  const [cantidadCarrito, setCantidadCarrito] = useState(0);

const agregarProducto = (cantidad) =>
{
  setCantidadCarrito(cantidad);
}

  return (
    <BrowserRouter>
      <div className="App">
        
          <NavBar> 
            <CartWidget cantidad={cantidadCarrito} />
          </NavBar>
          <br /><br /><br /><br /><br />

          <Routes>
            <Route path="/" element={<ItemListContainer  greeting="Bienvenido" onAdd={agregarProducto}/>}/>
            <Route path="/TipoObjeto/:idTipoObjeto" element={<ItemListContainer  greeting="Bienvenido" onAdd={agregarProducto}/>}/>
            <Route path="/Objetos/:id" element={<ItemDetailContainer/>}/>
            <Route path="/Objetos/:id" element={<ItemDetailContainer/>}/>
            <Route path="/Cart/" element={<CartList/>}/>
          </Routes>

          <br /><br /><br /><br />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
