import {createContext, useState} from 'react';

const CartContext =  createContext();

export function CartProvider({children}){
    const [items, setItems] = useState([]);

    const addToCart = (name, price, quantity) => {
            items.map((prevItems)=> prevItems === name)
            setItems((prevItems)=> [...prevItems,{name, price, quantity}])
    }
    return(
        <CartContext.Provider value={{item:1, items, addToCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext; 