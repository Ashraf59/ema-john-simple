import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import './Shop.css';
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {
    const products = useLoaderData()
    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([])
        deleteShoppingCart();
    }
   

    useEffect(() => {
       const storedCart =  getStoredCart();
       const saveCart = [];
       console.log(storedCart)
       for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
        }
        console.log(addedProduct);
       }
       setCart(saveCart);
    },[products])

    const handleAddToCard = (selectedProduct) => {
        // console.log(product)
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];

        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
            addToDb(selectedProduct.id)
        }

        setCart(newCart);
        addToDb(selectedProduct.id)
       
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Products 
                    
                        key = {product.id}
                        product = {product} 
                        handleAddToCart = {handleAddToCard}
                        
                        ></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart clearCart = {clearCart} cart = {cart}>
                <Link to='/orders'>
                    <button>Review Order</button>
                    </Link>
                </Cart>
                
            </div>
        </div>
    );
};

export default Shop;