import { useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import './FormOrder.css';
import { setOrder } from "../../helpers/productos";
const imgBtn = process.env.PUBLIC_URL + "/img/buttonRed.png";
const styleButton={backgroundImage: `url(${imgBtn})` };

export const FormOrder = ({onSetBuy}) =>
{
    const {productCartList, totalPrice, clear} = useContext(CartContext)

    const enviarOrden = async(e) =>{
        e.preventDefault();
        const order =
        {
            buyer:
            {
                nombre: e.target[0].value,
                phone: e.target[1].value,
                email: e.target[2].value
            },
            items: productCartList

            
        }

        let responseOrder = await setOrder(order);
        onSetBuy(responseOrder.id);
        clear();
    }

    const obtenerPrecio = () => 
    {
        return totalPrice();
    }

    return (
            <div className="col-md-3">  
                        <figure className="card card-product-grid card-lg font-objeto background-objeto-cart-card">
                            <figcaption className="info-wrap">
                                    <div className="row">
                                        <div className="col-md-12" style={{padding: "5px"}}>
                                            <h3 className="titleForm">Compra</h3>
                                        </div>
                                        
                                        <div className="col-md-12" style={{padding: "5px"}}>
                                        {
                                                productCartList.map((producto)=>
                                                {
                                                    return (
                                                        <div className="row">
                                                                <div className="col-md-7">
                                                                    <p className="itemCompra">{producto.title} x {producto.cantidad}</p>
                                                                </div>
                                                                <div className="col-md-5">
                                                                    <p className="itemCompraPrecio">$ {producto.cantidad * producto.price},00</p>
                                                                </div>
                                                        </div>

                                                        
                                                    )
                                                })
                
                                            }
                                        </div>

                                        <div className="col-md-12" style={{padding: "5px"}}>
                                            <p className="itemCompraTotal">TOTAL: $ {obtenerPrecio()},00</p>
                                        </div>
   
                                        <form onSubmit={enviarOrden}>
                                            <div className="col-md-12" style={{padding: "5px"}}>
                                                <input className="form-control inputCompra" type="text" placeholder="Ingrese su nombre"/> 
                                            </div>
                                            <div className="col-md-12" style={{padding: "5px"}}>
                                                <input className="form-control inputCompra" type="text" placeholder="Ingrese su telefono"/> 
                                            </div>
                                            <div className="col-md-12" style={{padding: "5px"}}>
                                                <input className="form-control inputCompra" type="text" placeholder="Ingrese su email"/> 
                                            </div>
                                            <div className="col-md-12" style={{padding: "5px"}}>
                                                <button type="submit" class="btn btnProducto" data-abc="true" style={styleButton} > Comprar</button>
                                            </div>

                                        </form>

                                    </div>
                            </figcaption>
                        </figure>
            </div>
    )
}