
import { SpinnerCircularSplit } from "spinners-react/lib/esm/SpinnerCircularSplit";

import { useState, useEffect } from "react";
import getFetch from "../../helpers/productos";
import './ItemDetail.css';

import background from "../../assets/img/fondo_objetos.jpg";
const styleCard = {backgroundImage: `url(${background})` };

const pathImg = process.env.PUBLIC_URL + "/img/obj/"






export const ItemDetail = () =>
{
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(()=>
    {
        getFetch.then(response => 
            {
                setData(response.find(prod => prod.id == 1))
                setLoading(false);
            })
    }, [])

    return (
        <div className="col-md-8">
            {
                loading ? <SpinnerCircularSplit size={50} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
                :
                <figure className="card card-product-grid card-lg font-objeto background-objeto">
                    <figcaption className="info-wrap">
                                <div className="row">
                                    <div className="col-md-12">
                                        <a href="#" className="font-objeto" data-abc="true">{data.title}</a>
                                    </div>
                                </div>
                    </figcaption>
                    <a href="#" className="img-wrap" data-abc="true"><img src={pathImg + data.pictureUrl}/></a>
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
                </figure>
            }

    </div>
    )
}