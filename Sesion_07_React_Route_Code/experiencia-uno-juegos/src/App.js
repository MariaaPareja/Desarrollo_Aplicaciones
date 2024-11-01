import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function App() {
    return (
        <Router>
            <Routes>
                {/* Ruta principal que utiliza el Layout */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} /> {/* Ruta para la página de inicio */}
                    <Route path="about" element={<About />} /> {/* Ruta para la página "Acerca de nosotros" */}
                    <Route path="products" element={<Products />} /> {/* Ruta para mostrar la lista de productos */}
                    {/* Ruta dinámica para mostrar detalles del producto basado en su ID */}
                    <Route path="products/:id" element={<ProductDetail />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;