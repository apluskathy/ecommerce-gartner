import React from 'react';
import ItemCount from './ItemCount';

const Item = ({product}) => {

    const handleAddCount = () => {
        alert('Your item was added in your cart!');
    }

    return (
        <div className="product-container">
            <img className="product-img" src={ product.image } />
            <p className="product-name">{ product.name }</p>
            <p className="product-price">{ product.price }</p>
            <ItemCount stock="10" addCount={ handleAddCount } initial="1"/>
        </div>
    )
}

export default Item;
