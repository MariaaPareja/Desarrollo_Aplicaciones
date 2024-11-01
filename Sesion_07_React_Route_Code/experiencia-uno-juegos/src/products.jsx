import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: "Ajedrez", description: "Juego de estretegia básico." },
    { id: 2, name: "Monopoly", description: "Monopoly clásico." },
    { id: 3, name: "Clue", description: "Descubre quién fue el asesino." },
    { id: 4, name: "Jenga", description: "Construye y derriba" },
    { id: 5, name: "Uno", description: "Se el primero en quedarse sin cartas" },
    { id: 5, name: "Rummi-Q", description: "Combina sets de fichas" }
];

function Products() {
    return (
        <div>
            <h2>Productos disponibles</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>: {product.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;