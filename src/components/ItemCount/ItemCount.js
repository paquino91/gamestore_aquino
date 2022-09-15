import { useContext, useState } from "react"
import './ItemCount.css';
//import ObjEspada from '../../assets/img/sword_item1.png'

import background from "../../assets/img/fondo_objetos.jpg";
import { CartContext } from "../../context/CartContext";

const imgBtn = process.env.PUBLIC_URL + "/img/buttonRed.png";
const styleCard = {backgroundImage: `url(${background})` };
const styleButton={backgroundImage: `url(${imgBtn})` };

export const ItemCount = ({stock, initial, item, onUpdateCantidadItemDetail}) =>
{
    const {addProduct} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(initial);

    const incrementar = () =>
    {
        if (stock > cantidad)
        {
            setCantidad(cantidad + 1);
        }
    }

    const decrementar = () =>
    {
        if (cantidad > 0)
        {
            setCantidad(cantidad - 1);
        }
    }

    const agregarAlCarrito = (cantidad) =>
    {
        if (cantidad > 0 && cantidad <= stock)
        {
            const nuevoProducto = {...item, cantidad: cantidad}
            addProduct(nuevoProducto)
            onUpdateCantidadItemDetail(cantidad);
        }
    }

    return (
        <div className="bottom-wrap">
        
        <div className="">
            <button onClick={decrementar} class="btn btnProducto" data-abc="true" style={styleButton}> - </button>
            <div className="control-cantidad"><input type="text" className="form-control cantidad" value={cantidad} /></div>
            <button onClick={incrementar}  href="#" class="btn btnProducto" data-abc="true" style={styleButton} > + </button>
        </div>
       <div className="price-wrap">
           <button className={`btn ${cantidad > 0 ? 'btnProducto' : 'btnProductoDisabled'}`} data-abc="true" onClick={()=>agregarAlCarrito(cantidad) }> Agregar al carrito </button>
            
       </div>
   </div> 
            )

    /*return (
<div className="container">
  	

      <div className="row" >
       <div className="offset-md-4 col-md-4">
           <figure className="card card-product-grid card-lg font-objeto" style={styleCard}>
               
               <figcaption className="info-wrap">
                          <div className="row">
                              <div className="col-md-12">
                                  <a href="#" className="font-objeto" data-abc="true">Espada Legendaria</a>
                              </div>
                          </div>
               </figcaption>

               <a href="#" className="img-wrap" data-abc="true"><img src=""/></a>

               <div className="col-md-12">
   
                <a href="#" className="font-objeto-precio" data-abc="true">$1250,00</a>
                
                </div>

               <div className="bottom-wrap">

                    <div className="">
                        <button onClick={decrementar} class="btn btnProducto" data-abc="true" style={styleButton}> - </button>
                        <div className="control-cantidad"><input type="text" className="form-control cantidad" value={cantidad} /></div>
                        <button onClick={incrementar}  href="#" class="btn btnProducto" data-abc="true" style={styleButton} > + </button>
                    </div>
                   <div className="price-wrap">
                       <button className={`btn ${cantidad > 0 ? 'btnProducto' : 'btnProductoDisabled'}`} data-abc="true" onClick={()=>agregarAlCarrito(cantidad)}> Agregar al carrito </button>
                        
                   </div>
               </div> 
           </figure>
       </div>
   
   
   </div>
     </div>
       
    )*/
}