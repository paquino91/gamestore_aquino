import { Link } from 'react-router-dom';
import './BuyComplete.css';

export const BuyComplete = ({idCompra}) =>
{
    return (
            <div className="col-md-12">
                <figure className="card card-product-grid card-lg font-objeto background-objeto-cart-card">
                    <figcaption className="info-wrap">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <p className="fontTituloBuyComplete">¡Muchas gracias!</p>
                                    <p className="fontTextoBuyComplete">La orden de compra ha sido generada correctamente con el código {idCompra}.</p>
                                    <Link to="/TipoObjeto/0"><p>Volver al listado de productos</p> </Link>
                                </div>
                            </div>
                    </figcaption>
                </figure>
            </div>
    )
}