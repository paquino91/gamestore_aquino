import './ItemListContainer.css';
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemListContainer = ({onAdd}) =>
{
    return(
            <div className='itemListContainer'>
                <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            </div>
    )
}