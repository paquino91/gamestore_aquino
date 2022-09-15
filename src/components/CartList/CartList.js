import { useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { SpinnerCircularSplit } from "spinners-react/lib/esm/SpinnerCircularSplit";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import './CartList.css';
export const CartList = ({}) =>
{
    const {productCartList} = useContext(CartContext)
    const [loading, setLoading] = useState(true)
    const obtenerCarrito = () =>
    {
        return new Promise ((resolve, reject)=>
        {
            setTimeout(() =>
            {
                resolve(1);
            }, 3000);
        })
    }
    
    useEffect(() =>
    {
        const funcAsync = async()=>
        {
            try
            {
                const listaCarrito = await obtenerCarrito();
                setLoading(false);
            }
            catch(error)
            {
                console.log("Ha ocurrido un error");
            }
        }

        funcAsync();

    })




    return (
            <div className="container containerCart">
                {
                    loading ? 
                            <div className="itemListLoad"><SpinnerCircularSplit size={50} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" /> </div>
                    :
                    <div className="row" >
                        
                        {
                            productCartList.length > 0 ?

                            <div className="col-md-8 offset-md-2">
                                <figure className="card card-product-grid card-lg font-objeto background-objeto-cart-card">
                                    <figcaption className="info-wrap">
                                            <div className="row">
                                                <div className="col-md-6 offset-md-3">
                                                    <div className="col-md-12">
                                                        <figure>
                
                                                        </figure>
                                                    </div>

                                                </div>
                                                <div className="col-md-8 offset-md-2">
                                                    {
                                              
                                                        productCartList.map((producto)=>
                                                        {
                                                            return <CartItem key={producto.id} initial={producto.cantidad} item={producto}/>
                                                        })
                        
                                                    }
                                                </div>
                                            </div>
                                    </figcaption>
                                </figure>
                            </div>
                            :
                            <div className="col-md-12">
                                <figure className="card card-product-grid card-lg font-objeto background-objeto-cart-card">
                                    <figcaption className="info-wrap">
                                            <div className="row">
                                                <div className="col-md-6 offset-md-3">
                                                    <p className="fontCarritoSubtitulo">:(</p>
                                                    <p className="fontCarrito">No hay productos agregados al carrito</p>
                                                    <Link to="/TipoObjeto/0"><p>Ir al listado de productos</p> </Link>
                                                </div>
                                            </div>
                                    </figcaption>
                                </figure>
                            </div>
                        }

                </div>
                }
            </div>
    )
}