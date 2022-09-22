import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>
{
    const [productCartList, setProductCartList] = useState([])
    const [cantidad, setCantidad] = useState(0)
    
    const addProduct = (product) =>
    {
        if (isInCart(product.id))
        {
            const productUpdate = productCartList.find(e=>e.id == product.id)
            productUpdate.cantidad = productUpdate.cantidad + product.cantidad
            updateCantidad(productCartList)
        }
        else
        {
            const cartList = [...productCartList, product]
            setProductCartList(cartList)
            updateCantidad(cartList)
        }

    }

    const updateProduct = (id, cantidad) =>
    {
        if (cantidad <= 0)
        {
            deleteProduct(id);
        }
        else if (isInCart(id))
        {
            const productUpdate = productCartList.find(e=>e.id == id)
            productUpdate.cantidad = cantidad
            updateCantidad(productCartList)
        }


    }

    const deleteProduct = (id) =>
    {
        const cartList = [...productCartList];
        const newCartList = cartList.filter(e=>e.id != id)
        setProductCartList(newCartList)
        updateCantidad(newCartList)
    }

    const clear = () =>
    {
        const cartList = []
        setProductCartList(cartList)
        setCantidad(0)
    }

    const isInCart = (id) =>
    {
        return productCartList.some(e=>e.id == id);
    }

    const updateCantidad = (productList) =>
    {
        let cantidad = 0;
        productList.forEach(e => cantidad += e.cantidad);
        setCantidad(cantidad);
    }

    const totalPrice = () =>
    {
        let precioTotal = 0;
        productCartList.forEach(e => console.log(e.price));
        productCartList.forEach(e => precioTotal += e.cantidad * e.price);
        return precioTotal;
    }

    return (
        <CartContext.Provider value={{productCartList, cantidad, addProduct, deleteProduct, clear, updateProduct, totalPrice}}>
            {children}
        </CartContext.Provider>

    )
}