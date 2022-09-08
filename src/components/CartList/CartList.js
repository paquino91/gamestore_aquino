import { useEffect, useState } from "react"
import { SpinnerCircularSplit } from "spinners-react/lib/esm/SpinnerCircularSplit";
import './CartList.css';
export const CartList = ({}) =>
{
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
            <div className="container">
                {
                    loading ? 
                            <div className="itemListLoad"><SpinnerCircularSplit size={50} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" /> </div>
                    :
                    <div className="row" >
                        <div className="col-md-12">
                            <figure className="card card-product-grid card-lg font-objeto background-objeto">
                                <figcaption className="info-wrap">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <a href="#" className="font-objeto" data-abc="true">Aquí va el listado del carrito</a>
                                                </div>
                                            </div>
                                </figcaption>
                            </figure>
                    </div>
                </div>
                }
            </div>
    )
}