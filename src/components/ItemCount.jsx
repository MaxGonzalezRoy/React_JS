// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import '../styles/item.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleSubtract = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleConfirm = () => {
        onAdd(count);
    };

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <button onClick={handleSubtract} disabled={count <= 1}>
                -
            </button>
            <span style={{ margin: "0 10px" }}>{count}</span>
            <button onClick={handleAdd} disabled={count >= stock}>
                +
            </button>
            <div style={{ marginTop: "10px" }}>
                <button onClick={handleConfirm} disabled={stock === 0}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

ItemCount.propTypes = {
    stock: PropTypes.number.isRequired,
    initial: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default ItemCount;
