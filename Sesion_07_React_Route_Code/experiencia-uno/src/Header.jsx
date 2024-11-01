import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Lady Stardust</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About Us</Link>
            </nav>
        </header>
    );
}

export default Header;