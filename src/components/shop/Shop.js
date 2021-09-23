import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './shop.css'
import Product from '../product/Product';
import Cart from '../cart/Cart';


const Shop = () => {
    const data10 = fakeData.slice(0, 10)
    const [products, setProducts] = useState(data10)

    const [cart, setCart] = useState([])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                <h3>products:{products.length}</h3>
                <ul>
                    {products.map(product => <Product product={product} handleAddToCart={handleAddToCart} key={product.key}></Product>)}
                </ul>

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;