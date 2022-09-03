import { Link } from 'react-router-dom';
import { useState } from "react"
import './Item.css';

import background from "../../assets/img/fondo_objetos.jpg";

const imgBtn = process.env.PUBLIC_URL + "/img/buttonRed.png";
const styleCard = {backgroundImage: `url(${background})` };
const styleButton={backgroundImage: `url(${imgBtn})` };

const pathImg = process.env.PUBLIC_URL + "/img/obj/"



//id, title, description, price, pictureUrl
export const Item = ({item}) =>
{
    return (
            <div className="col-md-4">
                <figure className="card card-product-grid card-lg font-objeto" style={styleCard}>
                    <figcaption className="info-wrap">
                                <div className="row">
                                    <div className="col-md-12">
                                        <a href="#" className="font-objeto" data-abc="true">{item.title}</a>
                                    </div>
                                </div>
                    </figcaption>

                    <a href="#" className="img-wrap" data-abc="true"><img src={pathImg + item.pictureUrl}/></a>
                    <div className="descripcionPrecio">

                        <div className="col-md-12">
                            <div className="contenedorPrecio">
                                <p href="#" className="font-objeto-precio" data-abc="true">${parseFloat(item.price)}</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="bottom-wrap">
                        <Link to={`/Objetos/${item.id}`}> 
                            <div className="price-wrap">
                                <button className="btn btnProducto" data-abc="true"> Ver detalle </button>
                            </div>
                        </Link>
                    </div> 
                </figure>
            </div>
    )
}