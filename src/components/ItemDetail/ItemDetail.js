
import {useParams, Link} from "react-router-dom";
import { SpinnerCircularSplit } from "spinners-react/lib/esm/SpinnerCircularSplit";

import { useState, useEffect } from "react";
import getFetch from "../../helpers/productos";
import './ItemDetail.css';

import background from "../../assets/img/fondo_objetos.jpg";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemMin } from "../ItemMin/ItemMin";
const styleCard = {backgroundImage: `url(${background})` };

const pathImg = process.env.PUBLIC_URL + "/img/obj/"






export const ItemDetail = () =>
{
    const {id} = useParams();
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [cantidad, setCantidad] = useState(0)

    const updateCantidadItemDetail = (cantidad) =>
    {
        setCantidad(cantidad)
    }
    
    useEffect(()=>
    {
        setLoading(true);
        getFetch.then(response => 
            {
                setData(response.find(prod => prod.id == id))
                setLoading(false);
            })
    }, [id])

    return (
        <div className="col-md-8">
            {
                loading ? <SpinnerCircularSplit size={50} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
                :
                <figure className="card card-product-grid card-lg font-objeto background-objeto">
                    
                    <ItemMin value={data.title} pictureUrl={data.pictureUrl} />

                    <div className="descripcionPrecio">

                    <div className="col-md-12">
                            <div className="contenedorPrecio">
                                <p href="#" className="font-objeto-precio" data-abc="true">${parseFloat(data.price)}</p>
                            </div>
                            
                        </div>

                        <div className="col-md-12">
                            <p className="font-objeto-descripcion" data-abc="true">{data.description}</p>
                        </div>


                    </div>
                    <ItemCount stock={10} initial={0} item={data} onUpdateCantidadItemDetail={updateCantidadItemDetail}/>

    
                            <div className="price-wrap finCompra" style={ cantidad > 0 ? {visibility: "visible"} : {visibility: "hidden"} }>
                                <Link to="/Cart">
                                    <button className="btn btnFinalizarCompra" data-abc="true"> Terminar Compra</button>
                                </Link>
                            </div>
                    
                    
                </figure>
            }

    </div>
    )
}