import React from "react";
import './ItemDetailContainer.css';
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () =>
{
    return(    
            <div className='itemDetailContainer'>
                <ItemDetail/>
            </div>
    )
}
