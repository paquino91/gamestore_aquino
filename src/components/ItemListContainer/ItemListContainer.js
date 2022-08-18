import './ItemListContainer.css';


export const ItemListContainer = ({greeting}) =>
{
    return(
            <div className='itemListContainer'>
                <p>{greeting}</p>
            </div>
    )
}