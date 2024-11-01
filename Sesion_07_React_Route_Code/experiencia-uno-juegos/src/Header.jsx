import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Board Game Store</h1>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/products">Productos</Link>
                <Link to="/about">Sobre nosotros</Link>
            </nav>
        </header>
    );
}

export default Header;