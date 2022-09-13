import background from "../../assets/img/fondo_objetos.jpg";
import { CartContext } from "../../context/CartContext";
import { ItemMin } from "../ItemMin/ItemMin";
import { useContext, useState } from "react";
import "./CartItem.css"
const imgBtn = process.env.PUBLIC_URL + "/img/buttonRed.png";
const styleCard = {backgroundImage: `url(${background})` };
const styleButton={backgroundImage: `url(${imgBtn})` };

const pathImg = process.env.PUBLIC_URL + "/img/obj/"




//id, title, description, price, pictureUrl
export const CartItem = ({initial, item}) =>
{
    const {updateProduct, deleteProduct} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(initial);

    const incrementar = () =>
    {
        setCantidad(cantidad + 1);
        updateProduct(item.id, cantidad + 1);
    }

    const decrementar = () =>
    {
        if (cantidad > 0)
        {
            setCantidad(cantidad - 1);
            updateProduct(item.id, cantidad - 1);
        }
    }



    const quitarDelCarrito = (id) =>
    {
        deleteProduct(id)
    }

    return (
            <div className="col-md-12">
                <figure className="card card-product-grid card-lg font-objeto" style={styleCard}>
                    <ItemMin title={item.title} pictureUrl={item.pictureUrl}/>

                    <div className="bottom-wrap btnCarrito">
                        <div className="">
                            <button onClick={decrementar} class="btn btnProducto" data-abc="true" style={styleButton}> - </button>
                            <div className="control-cantidad"><input type="text" className="form-control cantidad" value={cantidad} /></div>
                            <button onClick={incrementar}  href="#" class="btn btnProducto" data-abc="true" style={styleButton} > + </button>
                        </div>
                    <div className="boton-wrap btnCarrito">
                        <button className="btn btnProducto" data-abc="true" onClick={()=>quitarDelCarrito(item.id)}> Quitar </button>
                    </div>
                </div> 

                </figure>
            </div>
    )
}