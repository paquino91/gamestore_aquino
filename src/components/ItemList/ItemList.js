import { useEffect, useState } from "react"
import { Item } from "../Item/Item";

export const ItemList = ({items}) =>
{
    const [objetos, setObjetos] = useState([]);

    const obtenerObjetos = (items) =>
    {
        return new Promise ((resolve, reject)=>
        {
            setTimeout(() =>
            {
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
                const listaObjetos = await obtenerObjetos(items);
                setObjetos(listaObjetos);
            }
            catch(error)
            {
                console.log("Ha ocurrido un error");
            }
        }

        funcAsync();

    }, [])


    return (
            <div className="container">
                <div className="row" >
                    {
                        objetos.map((obj)=>
                        {
                            return <Item item={obj}/>
                        })
                    }
                </div>
            </div>
    )
}