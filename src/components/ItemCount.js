import { useState } from "react"

const ItemCount = ({stock, addCount, initial}) => {

    const [counter, setCounter] = useState(1);

    const handleMinus = () => {
        if(counter > initial) {
            setCounter(counter - 1)
        }
    }

    const handleAdd = () => {
        if(counter < stock) {
            setCounter(counter + 1)
        }
    }

    return (
        <div className="item-container">
            <div className="item-counter">
                <button onClick={handleMinus} className="btn btn--round">
                    <span className="material-icons">remove</span>
                </button>

                <p>{counter}</p>

                <button onClick={handleAdd} className="btn btn--round">
                    <span className="material-icons">add</span>
                </button>
            </div>
            <div className="item-add">
                <button onClick={() => addCount()} type="button" className="btn btn--primary">
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default ItemCount;
