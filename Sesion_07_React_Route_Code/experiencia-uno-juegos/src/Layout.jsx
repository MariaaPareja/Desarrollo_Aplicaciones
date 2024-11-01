import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet /> 
            </main>
            <footer>
                <p>© 2024 Mi mesita Store. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Layout;