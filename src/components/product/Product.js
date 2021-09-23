import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'
const Product = (props) => {
    const { name, img, price, stock } = props.product
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p>Price: <b>{price}</b></p>
                <p>Stock :{stock}</p>
                <button className="btn-regular" onClick={() => props.handleAddToCart(props.product)}>{cartIcon}Add to cart</button>
            </div>
        </div>
    );
};

export default Product;