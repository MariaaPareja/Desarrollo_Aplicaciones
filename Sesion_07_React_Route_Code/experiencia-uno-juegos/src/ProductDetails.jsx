import { useParams } from 'react-router-dom';

// Array actualizado de productos
const products = [
    { id: 1, name: "Ajedrez", description: "Juego de estrategia básico.", category: "Estrategia", players: "2", duration: "Indefinido", image: "public/chess_image.jpg" },
    { id: 2, name: "Monopoly", description: "Monopoly clásico.", category: "Familia", players: "2-6", duration: "1-2 horas", image: "public/monopoly_image.jpg" },
    { id: 3, name: "Clue", description: "Descubre quién fue el asesino.", category: "Misterio", players: "3-6", duration: "1 hora", image:"public/clue_image.jpg" },
    { id: 4, name: "Jenga", description:"Construye y derriba.", category:"Habilidad", players:"2+", duration:"Indefinido", image:"public/jenga_image.jpg"},
    { id: 5, name:"Uno", description:"Sé el primero en quedarse sin cartas.", category:"Familiar", players:"2-10", duration:"30-60 minutos", image:"public/uno_image.jpg"},
    { id : 6 , name : 'Rummi-Q' , description : 'Combina sets de fichas.' , category : 'Estrategia' , players : '2-4' , duration : '45 minutos' , image : 'public/rummi-q_image.jpg' }
];

function ProductDetail() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id)); 

    if (!product) {
        return <div>¡Producto no disponible!</div>; // Manejo de error 
    }

    return (
        <div>
            <h2>{product.name}</h2> 
            <img src={product.image} alt={product.name} style={{ width:'200px', height:'auto' }} /> {/* Mostrar la imagen del producto */}
            <p>Descripción: {product.description}</p> 
            <p>Categoría: {product.category}</p> {/* Mostrar la categoría del juego */}
            <p>Número de jugadores: {product.players}</p> {/* Mostrar el número de jugadores */}
            <p>Duración del juego: {product.duration}</p> {/* Mostrar la duración del juego */}
        </div>
    );
}

export default ProductDetail;