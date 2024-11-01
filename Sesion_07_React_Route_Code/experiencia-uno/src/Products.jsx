import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: "Dress", description: "A beautiful dress." },
    { id: 2, name: "Top", description: "A stylish top." },
    { id: 3, name: "Skirt", description: "A trendy skirt." },
    { id: 4, name: "Top", description: "A dark top." },
    { id: 5, name: "T-shirt", description: "A My Chemical Romance T-shirt." },
];

function Products() {
    return (
        <div>
            <h2>Aviable Products</h2>
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