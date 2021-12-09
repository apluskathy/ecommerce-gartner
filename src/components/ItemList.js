import React from 'react';
import Item from './Item';

const ItemList = ({products}) => {

    const RenderList = function(list) {
        if(list.length > 0) {
            return (products.map(product =>
                <Item key={products.name} product={product} />
            ))
        } else {
            return (
                <div className="product-loading">
                    Loading...
                </div>
            )
        }
    }

    return (
        <ul className="product-list">
            {RenderList(products)}
        </ul>
    )
}

export default ItemList;
