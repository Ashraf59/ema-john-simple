import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart)
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCard = (product) => {
        console.log(product)

        const newCart = [...cart, product];
        setCart(newCart);
       
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
                <Cart cart = {cart}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;