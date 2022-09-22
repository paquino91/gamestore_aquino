import { Link } from 'react-router-dom';
import './CartEmpty.css';

export const CartEmpty = () =>
{
    return (
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
    )
}