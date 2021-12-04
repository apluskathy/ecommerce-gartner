import React from 'react';
import ItemCount from './ItemCount';
import '../styles/main.scss';

const ItemListContainer = (props) => {
    const handleAddCount = () => {
        alert('Your item was added in your cart!');
    }

    return (
        <div className="main-content">
            {props.greeting}
            <ItemCount stock="10" addCount={ handleAddCount } initial="1"/>
        </div>      
    )
}

export default ItemListContainer
