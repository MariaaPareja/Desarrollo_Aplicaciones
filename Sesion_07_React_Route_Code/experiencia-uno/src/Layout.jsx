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
                <p>© 2024 Lady Stardust. Copyright.</p>
            </footer>
        </div>
    );
};

export default Layout;