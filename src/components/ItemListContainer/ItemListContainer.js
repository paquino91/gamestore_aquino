import './ItemListContainer.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { ItemList } from '../ItemList/ItemList';
import dataObjetos from '../../data/dataObjetos.json'

export const ItemListContainer = ({onAdd}) =>
{
    return(
            <div className='itemListContainer'>
                <ItemList items={dataObjetos} />
            </div>
    )
}