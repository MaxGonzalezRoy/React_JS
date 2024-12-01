import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav style={{ width: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '10px', paddingLeft: '50px', paddingRight: '30px', background: '#D1FDDD', color: '#443856'}}>
        <h1>Hiper Tiendita</h1>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '55px', color: '#443856' }}>
            <li ><a href="#home" >Inicio</a></li>
            <li><a href="#products">Productos</a></li>
            <li><a href="#about">Acerda de</a></li>
        </ul>
        <CartWidget/>
        </nav>
    );
};

export default NavBar;