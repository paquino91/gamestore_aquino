import {useParams} from "react-router-dom";
import { useEffect, useState } from "react"
import { Item } from "../Item/Item";
import {tipoObjetos} from "../../helpers/enumeraciones";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { SpinnerCircularSplit } from "spinners-react/lib/esm/SpinnerCircularSplit";
import getFetch from "../../helpers/productos";
import './ItemList.css';
export const ItemList = ({items}) =>
{
    const {idTipoObjeto} = useParams();
    const [objetos, setObjetos] = useState([]);
    const [loading, setLoading] = useState(true)
    const obtenerObjetos = (items) =>
    {
        return new Promise ((resolve, reject)=>
        {
            setTimeout(() =>
            {
                items = items.filter(prod => prod.idTipoObjeto == idTipoObjeto || idTipoObjeto == null || idTipoObjeto == 0);
                
                resolve(items);
            }, 3000);
        })
    }
    
    useEffect(() =>
    {
        const funcAsync = async()=>
        {
            try
            {
                setLoading(true);
                const listaObjetos = await obtenerObjetos(items);
                setLoading(false);
                setObjetos(listaObjetos);
            }
            catch(error)
            {
                console.log("Ha ocurrido un error");
            }
        }

        funcAsync();

    }, [idTipoObjeto])


    return (
            <div className="container">
                {
                    loading ? 
                            <div className="itemListLoad"><SpinnerCircularSplit size={50} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" /> </div>
                    :
                    <div className="row" >
                        {
                            objetos.map((obj)=>
                            {
                                return <Item key={obj.id} item={obj}/>
                            })
                        }
                    </div>
                }
            </div>
    )
}