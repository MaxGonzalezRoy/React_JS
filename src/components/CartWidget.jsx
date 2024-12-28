const CartWidget = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px'}}>
            <img src="https://img.icons8.com/ios-filled/50/shopping-cart.png" alt="Carrito de compras" style={{ width: '24px'}}/>
            <span style={{ backgroundColor: 'red', color: 'white', borderRadius: '50%', padding: '5px 10px'}}>33</span>
        </div>
    );
};

export default CartWidget;
